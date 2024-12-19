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
    modeOfTransport: "",
    numberOfPeople: "",
    date: "",
  });
  const [searchCriteria, setSearchCriteria] = useState({
    currentDestination: "",
    travelingTo: "",
    modeOfTransport: "",
    numberOfPeople: "",
    date: "",
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
      setMessage("Entry created successfully!");
    } else {
      setMessage(result.message || "Error creating entry.");
    }
  };

  const handleFindPartner = async () => {
    const queryParams = new URLSearchParams(searchCriteria).toString();
    const response = await fetch(`/api/findPartner?${queryParams}`);
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
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg1.jpeg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative flex flex-col items-center justify-center p-8 text-white">
        <h1 className="text-2xl font-bold mb-6">Travel Partner Finder</h1>

        {/* Create Entry Form */}
        <div className="w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Create Entry</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 bg-black text-white rounded mb-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 bg-black text-white rounded mb-4"
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Your Contact Number"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 bg-black text-white rounded mb-4"
          />
          <input
            type="text"
            name="currentDestination"
            placeholder="Current Destination"
            value={formData.currentDestination}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 bg-black text-white rounded mb-4"
          />
          <input
            type="text"
            name="travelingTo"
            placeholder="Traveling To"
            value={formData.travelingTo}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 bg-black text-white rounded mb-4"
          />
          <input
            type="text"
            name="sex"
            placeholder="Sex (Male/Female)"
            value={formData.sex}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 bg-black text-white rounded mb-4"
          />
          <input
            type="text"
            name="modeOfTransport"
            placeholder="Mode of Transport (e.g., Car, Train)"
            value={formData.modeOfTransport}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 bg-black text-white rounded mb-4"
          />
          <input
            type="number"
            name="numberOfPeople"
            placeholder="Number of People"
            value={formData.numberOfPeople}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 bg-black text-white rounded mb-4"
          />
          <input
            type="date"
            name="date"
            placeholder="Travel Date"
            value={formData.date}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 bg-black text-white rounded mb-4"
          />
          <button
            onClick={handleCreateEntry}
            className="bg-[#71503A] text-white py-2 px-4 rounded"
          >
            Create Entry
          </button>
        </div>

        {/* Search for Partners */}
        <div className="w-full max-w-md mt-8">
          <h2 className="text-xl font-semibold mb-4">Find a Partner</h2>
          <input
            type="text"
            name="currentDestination"
            placeholder="Current Destination"
            value={searchCriteria.currentDestination}
            onChange={handleSearchChange}
            className="block w-full p-2 border border-gray-300 bg-black text-white rounded mb-4"
          />
          <input
            type="text"
            name="travelingTo"
            placeholder="Traveling To"
            value={searchCriteria.travelingTo}
            onChange={handleSearchChange}
            className="block w-full p-2 border border-gray-300 bg-black text-white rounded mb-4"
          />
          <input
            type="text"
            name="modeOfTransport"
            placeholder="Mode of Transport"
            value={searchCriteria.modeOfTransport}
            onChange={handleSearchChange}
            className="block w-full p-2 border border-gray-300 bg-black text-white rounded mb-4"
          />
          <input
            type="number"
            name="numberOfPeople"
            placeholder="Number of People"
            value={searchCriteria.numberOfPeople}
            onChange={handleSearchChange}
            className="block w-full p-2 border border-gray-300 bg-black text-white rounded mb-4"
          />
          <input
            type="date"
            name="date"
            placeholder="Travel Date"
            value={searchCriteria.date}
            onChange={handleSearchChange}
            className="block w-full p-2 border border-gray-300 bg-black text-white rounded mb-4"
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
                  <p>Mode of Transport: {partner.modeOfTransport}</p>
                  <p>Number of People: {partner.numberOfPeople}</p>
                  <p>Date: {new Date(partner.date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-red-500">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Travel;
