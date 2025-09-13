// src/components/TeamPage/TeamMembers.jsx
import React, { useEffect, useState } from "react";
import { getAllTeamMembers } from "../../../api/adminTeamMemebersApi";

const placeholder = "../../../assets/TeamPage/img3.png";

const TeamMembers = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 Fetch team members
  const fetchMembers = async () => {
    try {
      setLoading(true);
      const res = await getAllTeamMembers();

      // Normalize response like EmployeeTable
      const members =
        res?.data?.map((member) => ({
          id: member._id,
          fullName: member.fullName,
          position: member.position,
          bio: member.bio,
          email: member.email,
          linkedinUrl: member.linkedinUrl,
          profileImage: member.imageUrl || placeholder,
          specializations: member.specializations || [],
          certifications: member.certifications || [],
          yearsExperience: member.yearsExperience || "",
          isActive: member.isActive,
          displayOrder: member.displayOrder || "",
        })) || [];

      setTeam(members);
    } catch (err) {
      console.error("Failed to fetch team members:", err);
      setError(err.message || "Error fetching team members");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading team members...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-400">
        Failed to load team members: {error}
      </div>
    );
  }

  if (team.length === 0) {
    return (
      <div className="text-center text-gray-400">No team members found</div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12">
      {team.slice(0,5).map((member) => (
        <div
          key={member.id}
          className="hover:bg-white/10 hover:backdrop-blur-md rounded-xl p-4 flex flex-col items-center text-white
          transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500"
        >
          <img
            src={member.profileImage}
            alt={member.fullName}
            className="rounded-xl mb-4 transition-opacity duration-300 hover:opacity-90 w-full max-w-[200px] object-cover"
          />
          <div className="font-bold text-lg">{member.fullName}</div>
          <div className="text-orange-400 font-semibold text-sm">
            {member.position}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
