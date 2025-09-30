import React, { useRef, useState } from "react";
import axios from "axios";

const placeholder = "/img1.png";

const AddTeamMemberForm = ({ onSuccess, onCancel }) => {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(placeholder);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    imageUrl: "", // ✅ Cloudinary URL
    bio: "",
    email: "",
    linkedinUrl: "",
    specializations: "",
    certifications: "",
    yearsExperience: "",
    isActive: true,
    displayOrder: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUploadClick = () => fileInputRef.current.click();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setUploading(true);

    try {
      const uploadData = new FormData();
      uploadData.append("image", file);

      // ✅ Axios will set correct multipart headers automatically
      const res = await axios.post("https://zoroinnovation-3-tuqe.vercel.app/api/v1/upload", uploadData);

      setFormData((prev) => ({ ...prev, imageUrl: res.data.imageUrl }));
    } catch (err) {
      console.error("Image upload failed:", err);
      alert("Image upload failed: " + (err.response?.data?.message || err.message));
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!formData.name || !formData.role || !formData.email) {
      alert("Name, role, and email are required");
      return;
    }
    if (!formData.imageUrl) {
      alert("Please upload an image before saving");
      return;
    }

    try {
      const payload = {
        name: formData.name,
        role: formData.role,
        fullName: formData.name,
        position: formData.role,
        bio: formData.bio || "",
        email: formData.email,
        linkedinUrl: formData.linkedinUrl || "",
        specializations: formData.specializations
          ? formData.specializations.split(",").map((s) => s.trim())
          : [],
        certifications: formData.certifications
          ? formData.certifications.split(",").map((c) => c.trim())
          : [],
        yearsExperience: Number(formData.yearsExperience) || 0,
        isActive: formData.isActive,
        displayOrder: Number(formData.displayOrder) || 0,
        imageUrl: formData.imageUrl, // ✅ Cloudinary URL
      };

      const res = await axios.post(
        "https://zoroinnovation-3-tuqe.vercel.app/api/admin/team-members",
        payload
      );

      alert("Team member added successfully!");

      // reset form
      setFormData({
        name: "",
        role: "",
        imageUrl: "",
        bio: "",
        email: "",
        linkedinUrl: "",
        specializations: "",
        certifications: "",
        yearsExperience: "",
        isActive: true,
        displayOrder: "",
      });
      setPreview(placeholder);

      if (onSuccess) onSuccess(res.data);
    } catch (err) {
      console.error("Save failed:", err);
      alert("Error adding member: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="border border-gray-300 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 relative">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold"
        onClick={onCancel}
      >
        ✕
      </button>

      <div className="space-y-4">
        {["name", "role", "email", "linkedinUrl", "specializations", "certifications"].map(
          (field) => (
            <div key={field}>
              <label className="font-bold text-gray-800 capitalize">{field}</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full mt-2 p-3 bg-gray-100 rounded-xl"
              />
            </div>
          )
        )}

        <div>
          <label className="font-bold text-gray-800">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full mt-2 p-3 bg-gray-100 rounded-xl min-h-[120px]"
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="font-bold text-gray-800">Active</label>
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4">
        <img
          src={preview}
          alt="Preview"
          className="w-full max-w-[300px] rounded-xl mb-4"
        />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />
        <button
          type="button"
          onClick={handleUploadClick}
          className="bg-orange-500 text-white px-4 py-2 rounded-xl font-bold"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload Image"}
        </button>

        {["yearsExperience", "displayOrder"].map((field) => (
          <div key={field} className="w-full">
            <label className="font-bold text-gray-800 capitalize">{field}</label>
            <input
              type="number"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full mt-2 p-3 bg-gray-100 rounded-xl"
            />
          </div>
        ))}

        <div className="flex justify-end gap-4 mt-4 w-full">
          <button
            type="button"
            className="px-6 py-3 bg-gray-300 rounded-xl font-bold"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-6 py-3 bg-orange-500 text-white rounded-xl font-bold"
            disabled={uploading}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTeamMemberForm;
