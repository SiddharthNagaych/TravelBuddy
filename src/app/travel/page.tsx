"use client";
import { useState } from "react";

const Travel = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    currentDestination: "",
    travelingTo: "",
    sex: "",
    password: "",
  });
  const [searchCriteria, setSearchCriteria] = useState({
    currentDestination: "",
    travelingTo: "",
  });
  const [partners, setPartners] = useState<any[]>([]);
  const [partnerFound, setPartnerFound] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchCriteria((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateEntry = async () => {
    const response = await fetch("/api/createEntry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setMessage("Entry created successfully!"); // Show success message
    } else {
      setMessage(result.message || "Error creating entry.");
    }
  };

  const handleFindPartner = async () => {
    const { currentDestination, travelingTo } = searchCriteria;
    const response = await fetch(`/api/findPartner?currentDestination=${currentDestination}&travelingTo=${travelingTo}`);
    const data = await response.json();

    if (response.ok) {
      setPartners(data);
      setPartnerFound(true);
    } else {
      setPartnerFound(false);
      setMessage(data.message || "No partners found.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Travel Partner Finder</h1>

      {/* Create Entry Form */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Create Entry</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Your Contact Number"
          value={formData.contactNumber}
          onChange={handleInputChange}
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="text"
          name="currentDestination"
          placeholder="Current Destination"
          value={formData.currentDestination}
          onChange={handleInputChange}
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="text"
          name="travelingTo"
          placeholder="Traveling To"
          value={formData.travelingTo}
          onChange={handleInputChange}
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="text"
          name="sex"
          placeholder="Sex (Male/Female)"
          value={formData.sex}
          onChange={handleInputChange}
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handleCreateEntry}
          className="bg-[#71503A] text-white py-2 px-4 rounded"
        >
          Create Entry
        </button>
      </div>

      {/* Search for Partners */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Find a Partner</h2>
        <input
          type="text"
          name="currentDestination"
          placeholder="Current Destination"
          value={searchCriteria.currentDestination}
          onChange={handleSearchChange}
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="text"
          name="travelingTo"
          placeholder="Traveling To"
          value={searchCriteria.travelingTo}
          onChange={handleSearchChange}
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handleFindPartner}
          className="bg-[#71503A] text-white py-2 px-4 rounded"
        >
          Find Partner
        </button>

        {/* Display search results */}
        {partnerFound ? (
          <div className="mt-4">
            <h3 className="text-lg font-bold">Partners Found:</h3>
            {partners.map((partner, index) => (
              <div key={index} className="mt-2">
                <p>Name: {partner.name}</p>
                <p>Contact: {partner.contactNumber}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-red-500">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Travel;
