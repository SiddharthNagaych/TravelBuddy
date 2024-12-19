import Link from "next/link";

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpeg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative max-w-screen-md p-8 text-white bg-gray-900 bg-opacity-75 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Get in Touch</h1>
          <p className="mb-6 text-center">
            Our platform is designed to connect travelers by enabling them to create, view, and filter travel entries. It simplifies the process of finding travel partners with similar destinations and interests, fostering a sense of community and shared experiences. By making it easier to collaborate on trips, the platform enhances the travel experience and helps users form meaningful connections.
          </p>

          <h2 className="text-xl font-semibold mt-6 text-center">We’re here to help you plan your journey and make it seamless. For any inquiries or assistance, feel free to reach out to us.</h2>

          <h3 className="text-lg font-bold mt-8 text-center">Contact Numbers</h3>
          <ul className="list-none mt-4 space-y-2">
            <li>📞 +91 96231 95242</li>
            <li>📞 93726 52742</li>
            <li>📞 91376 08570</li>
            <li>📞 +91 93218 81804</li>
            <li>📞 +91 75248 64876</li>
          </ul>

          <div className="mt-6 flex justify-center">
            <Link href="/" className="bg-[#71503A] text-white py-2 px-4 rounded">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
