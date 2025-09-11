import { buildApiUrl } from "./config";
import employeeData from "../Data/employeeData.js";


function normalizeEmployee(employee) {
  return employee ?? null;
}

export async function verifyEmployee(employeeId) {
  if (!employeeId || typeof employeeId !== "string") {
    throw new Error("Valid Employee ID is required");
  }
  const normalizedInputId = employeeId.trim();
  const upper = normalizedInputId.toUpperCase();
  const match = upper.match(/^(?:EMP|E)(\d+)$/i);
  const candidates = new Set([upper]);
  if (match) {
    const digits = match[1];
    const padded = digits.padStart(3, "0");
    candidates.add(`E${padded}`);
    candidates.add(`EMP${padded}`);
  }
  if (!normalizedInputId) {
    throw new Error("Valid Employee ID is required");
  }

  // First attempt: verify directly with backend (try all candidate IDs)
  for (const idCandidate of candidates) {
    try {
      const res = await fetch(buildApiUrl("/api/v1/employee/verify-employee-id"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ employeeId: idCandidate }),
      });
      if (res.ok) {
        const data = await res.json();
        const normalized = normalizeEmployee(data.employee);
        if (!normalized) throw new Error("Invalid response from server");
        // include verification flags for UI
        const isActive = data?.employee?.status === 'Active' || data?.employee?.isActive === true;
        return { ...normalized, isActive, isVerified: isActive };
      }
    } catch (err) {
      // continue trying other candidates
    }
  }

  // Fallback: get all employees and find manually (normalize both sides)
  try {
    const params = new URLSearchParams({ page: "1", limit: "1000" });
    const res = await fetch(
      buildApiUrl(`/api/v1/employee/getemployees?${params.toString()}`),
      { method: "GET" }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch employees");
    }
    const data = await res.json();
    const employees = data?.employees || [];
    const candidateSet = new Set(Array.from(candidates));
    const found = employees.find((e) => {
      const empId = String(e?.employeeId || "").toUpperCase();
      const m = empId.match(/^(?:EMP|E)(\d+)$/i);
      const empCandidates = new Set([empId]);
      if (m) {
        const digits = m[1];
        const padded = digits.padStart(3, "0");
        empCandidates.add(`E${padded}`);
        empCandidates.add(`EMP${padded}`);
      }
      for (const c of empCandidates) {
        if (candidateSet.has(c)) return true;
      }
      return false;
    });
    if (!found) {
      throw new Error("Employee not found");
    }
    const normalized = normalizeEmployee(found);
    const isActive = (found?.status || '').toLowerCase() === 'active';
    return { ...normalized, isActive, isVerified: isActive };
  } catch (err) {
    // Final fallback: look into local admin data source (employeeData.js)
    try {
      const candidateSet = new Set(Array.from(candidates));
      const foundLocal = employeeData.find((e) => {
        const empId = String(e?.id || e?.employeeId || "").toUpperCase();
        const m = empId.match(/^(?:EMP|E)(\d+)$/i);
        const empCandidates = new Set([empId]);
        if (m) {
          const digits = m[1];
          const padded = digits.padStart(3, "0");
          empCandidates.add(`E${padded}`);
          empCandidates.add(`EMP${padded}`);
        }
        for (const c of empCandidates) {
          if (candidateSet.has(c)) return true;
        }
        return false;
      });
      if (foundLocal) {
        const isActive = String(foundLocal.status || "").toLowerCase() === "active";
        return {
          employeeId: foundLocal.employeeId || foundLocal.id,
          fullName: foundLocal.fullName || foundLocal.name,
          department: foundLocal.department,
          role: foundLocal.role,
          startDate: foundLocal.startDate,
          status: foundLocal.status,
          certificateIssueDate: foundLocal.certificateIssueDate || foundLocal.certificateDate,
          isActive,
          isVerified: isActive,
        };
      }
    } catch (_) {
      // ignore and fall through to throw
    }
    throw new Error(err?.message || "Verification failed");
  }
}

