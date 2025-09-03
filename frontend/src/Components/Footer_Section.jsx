// import React from "react";
// import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white py-8 mt-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {/* Navigation Links */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
//             <ul>
//               <li><Link to="/about" className="hover:text-orange-500">About Us</Link></li>
//               <li><Link to="/menu" className="hover:text-orange-500">Menu</Link></li>
//               <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
//               <li><Link to="/faq" className="hover:text-orange-500">FAQ</Link></li>
//             </ul>
//           </div>

//           {/* Social Media Links */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
//             <div className="flex space-x-4">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
//                 <FaFacebook size={24} />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
//                 <FaInstagram size={24} />
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
//                 <FaTwitter size={24} />
//               </a>
//             </div>
//           </div>

//           {/* Newsletter Subscription */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4">Subscribe to Our Newsletter</h4>
//             <form className="flex">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="p-2 rounded-l-md text-black"
//               />
//               <button type="submit" className="bg-orange-500 text-white p-2 rounded-r-md hover:bg-orange-600">
//                 <FaEnvelope />
//               </button>
//             </form>
//           </div>

//           {/* Contact Information */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
//             <p>📍 Coimbatore, Tamil Nadu, India</p>
//             <p>📞 +91 123 456 7890</p>
//             <p>📧 support@fooddelivery.com</p>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
//           <p>&copy; {currentYear} Food Delivery App. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
