import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto my-28 p-6 bg-white shadow-xl rounded-lg text-center">
      <h1 className="text-3xl font-bold text-gray-800">Contact Me</h1>
      <p className="text-gray-600 mt-2">Feel free to reach out via email, phone, or WhatsApp!</p>

      <div className="mt-6 flex flex-col gap-4 text-lg text-gray-700">
        {/* Email */}
        <a className="flex items-center gap-3 hover:text-blue-500">
          <FaEnvelope className="text-blue-500" /> radoanahmed1242000@gmail.com
        </a>

        {/* Phone Number */}
        <a className="flex items-center gap-3 hover:text-green-500">
          <FaPhoneAlt className="text-green-500" /> +8801703344405
        </a>

        {/* WhatsApp (Optional) */}
        <a target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-green-600">
          <FaWhatsapp className="text-green-600" /> +8801774999298
        </a>
      </div>
    </div>
  );
};

export default Contact;
