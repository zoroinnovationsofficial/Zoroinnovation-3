
const API_BASE = import.meta?.env?.VITE_API_URL || "${API_BASE}";

export async function sendContactMessage(formData) {
  if (!formData?.name || !formData?.email || !formData?.message) {
    throw new Error("All required fields must be filled");
  }

  const response = await fetch(`${API_BASE}/api/v1/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to submit message");
  }

  return await response.json();
}
