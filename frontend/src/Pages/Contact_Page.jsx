// import React, { useState, useEffect } from "react";
// import { FaEnvelope } from "react-icons/fa";
// import emailjs from "emailjs-com";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [status, setStatus] = useState(null);

//   useEffect(() => {
//     emailjs.init("YOUR_PUBLIC_KEY");
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setStatus(null);

//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         e.target,
//         "YOUR_USER_ID"
//       )
//       .then(
//         () => {
//           setStatus("Message sent successfully!");
//           setFormData({ name: "", email: "", message: "" });
//         },
//         (error) => {
//           setStatus("Failed to send message. Please try again.");
//           console.error("EmailJS error:", error);
//         }
//       )
//       .finally(() => {
//         setIsSubmitting(false);
//       });
//   };

//   return (
// <section className="min-h-screen bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white">
//   <div className="container mx-auto px-4">
//     <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
//     <div className="max-w-xl mx-auto bg-white text-gray-800 p-6 rounded-lg shadow-lg">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-medium mb-2">
//             Your Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="user_name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium mb-2">
//             Your Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="user_email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="message" className="block text-sm font-medium mb-2">
//             Your Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows="4"
//             className="w-full p-3 border border-gray-300 rounded-md"
//           ></textarea>
//         </div>
//         <div className="flex justify-between items-center">
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 disabled:bg-gray-400"
//           >
//             {isSubmitting ? "Sending..." : "Send Message"}
//           </button>
//           <div className="text-sm">
//             <a
//               href="mailto:support@yourdomain.com"
//               className="flex items-center space-x-1 text-orange-500 hover:text-orange-600"
//             >
//               <FaEnvelope />
//               <span>support@yourdomain.com</span>
//             </a>
//           </div>
//         </div>
//       </form>
//       {status && (
//         <p
//           className={`mt-4 text-center text-sm ${
//             status.includes("successfully") ? "text-green-500" : "text-red-500"
//           }`}
//         >
//           {status}
//         </p>
//       )}
//     </div>
//   </div>
// </section>

//   );
// }
