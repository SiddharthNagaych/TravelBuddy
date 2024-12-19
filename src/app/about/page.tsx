"use client";

const About = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg2.jpeg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative p-8 text-white">
        <h1 className="text-2xl font-bold mb-6">About Us</h1>
        <p className="mb-4">
          Welcome to Travel Partner Finder - your one-stop solution to connect with travel companions for your journeys.
        </p>
        <p className="mb-4">
          Whether you're looking to share a ride, travel by train, or embark on a group adventure, our platform helps you find like-minded travel partners easily. 
        </p>
        <p className="mb-4">
          Our mission is to make your travel experience smoother and more enjoyable by connecting you with the right travel companions.
        </p>
        <p className="mb-4">
          Join our community today and start your next adventure with partners who share your travel preferences.
        </p>
      </div>
    </div>
  );
};

export default About;
