import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../config/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

const categories = [
  "Residential",
  "Commercial",
  "Renovation",
  "Interior Design",
  "Site Preparation",
  "Project Management",
];

const UserDetailsForm = () => {
  const [form, setForm] = useState<{
    name: string;
    age: string;
    location: string;
    needs: string;
    interestedCategories: string[];
  }>({
    name: "",
    age: "",
    location: "",
    needs: "",
    interestedCategories: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (category: string) => {
    setForm((prev) => {
      const exists = prev.interestedCategories.includes(category);
      return {
        ...prev,
        interestedCategories: exists
          ? prev.interestedCategories.filter((c) => c !== category)
          : [...prev.interestedCategories, category],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!user) {
      setError("User not authenticated.");
      return;
    }
    try {
      await setDoc(doc(collection(db, "userDetails"), user.uid), {
        uid: user.uid,
        email: user.email,
        ...form,
      });
      setSubmitted(true);
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setError("Failed to submit details. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">
          Tell Us About Yourself
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Your Age"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Your Location"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What do you need from SP Constructions?
            </label>
            <textarea
              name="needs"
              value={form.needs}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Describe your needs"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interested Construction Categories
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={form.interestedCategories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                  />
                  <span className="text-gray-700 text-sm">{cat}</span>
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Submit
          </button>
        </form>
        {submitted && (
          <div className="mt-4 text-green-600 text-center font-medium">
            Thank you! Your details have been submitted.
          </div>
        )}
        {error && (
          <div className="mt-4 text-red-600 text-center font-medium">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetailsForm;
