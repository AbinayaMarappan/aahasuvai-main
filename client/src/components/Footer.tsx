
// import { Link } from "wouter";

// export default function Footer() {
//   return (
//     <footer className="bg-[#033e2d] text-[#fff6e7] text-sm">
//       <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
//         {/* Address Section - Left */}
//         <div className="space-y-3">
//           <h2 className="text-lg font-semibold text-[#c19a6b]">Address</h2>
//           <p>
//             Aahasuvai Spices,<br />
//             30/147, Kuppanna Chettiyar Street,<br />
//             Tiruppur, Tamil Nadu – 641604, India
//           </p>
//           <p>Phone: +91 9361360885</p>
//           <p>Email: aahasuvaispices@gmail.com</p>
//         </div>

//         {/* Quick Links + Policies - Center */}
//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <h2 className="text-lg font-semibold text-[#c19a6b] mb-2">Quick Links</h2>
//             <ul className="space-y-1">
//               <li><Link href="/about" className="hover:text-[#c19a6b]">About us</Link></li>
//               <li><Link href="/products" className="hover:text-[#c19a6b]">Products</Link></li>
//               <li><Link href="/faq" className="hover:text-[#c19a6b]">FAQ</Link></li>
//               <li><Link href="/account" className="hover:text-[#c19a6b]">My Account</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h2 className="text-lg font-semibold text-[#c19a6b] mb-2">Policies</h2>
//             <ul className="space-y-1">
//               <li><Link href="/privacy" className="hover:text-[#c19a6b]">Privacy Policy</Link></li>
//               <li><Link href="/return-refund" className="hover:text-[#c19a6b]">Return & Refund</Link></li>
//               <li><Link href="/copyright" className="hover:text-[#c19a6b]">Copyright</Link></li>
//               <li><Link href="/terms" className="hover:text-[#c19a6b]">Terms & Conditions</Link></li>
//               <li><Link href="/shipping" className="hover:text-[#c19a6b]">Shipping Policy</Link></li>
//             </ul>
//           </div>
//         </div>

//         {/* Social Media - Right */}
//         <div>
//           <h2 className="text-lg font-semibold text-[#c19a6b] mb-4">Social Media</h2>
//           <div className="flex flex-wrap gap-4">
//             {[
//               { icon: "instagram", label: "Instagram", href: "#" },
//               { icon: "linkedin", label: "LinkedIn", href: "#" },
//               { icon: "youtube", label: "YouTube", href: "#" },
//               { icon: "facebook", label: "Facebook", href: "#" },
//             ].map(({ icon, label, href }) => (
//               <a key={icon} href={href} aria-label={label}
//                 className="w-10 h-10 bg-[#004d3d] rounded-full flex items-center justify-center text-white hover:bg-[#006d5d] transition-colors">
//                 <i className={`fab fa-${icon}`}></i>
//               </a>
//             ))}
//             {/* Example logos like Cashfree */}
//             <img src="/cashfree-logo.svg" alt="Cashfree" className="h-8" />
//             <img src="/shiprocket-logo.svg" alt="Shiprocket" className="h-8" />
//           </div>
//         </div>
//       </div>

//       {/* Bottom Text */}
//       <div className="border-t border-[#c19a6b] py-4 px-4 text-center text-sm">
//         &copy; 2025 Aahasuvai. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }
// import { Link } from "wouter";

// export default function Footer() {
//   return (
//     <footer className="bg-[#033e2d] text-[#fff6e7] text-sm">
//       <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        
//         {/* Address */}
//         <div>
//           <h2 className="text-lg font-semibold text-[#c19a6b] mb-3">Address</h2>
//           <p>
//             Aahasuvai Spices,<br />
//             30/147, Kuppanna Chettiyar Street,<br />
//             Tiruppur, Tamil Nadu – 641604, India
//           </p>
//           <p className="mt-2">Phone: +91 9361360885</p>
//           <p>Email: aahasuvaispices@gmail.com</p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h2 className="text-lg font-semibold text-[#c19a6b] mb-3">Quick Links</h2>
//           <ul className="space-y-1">
//             <li><Link href="/about" className="hover:text-[#c19a6b]">About us</Link></li>
//             <li><Link href="/products" className="hover:text-[#c19a6b]">Products</Link></li>
//             <li><Link href="/faq" className="hover:text-[#c19a6b]">FAQ</Link></li>
//             <li><Link href="/account" className="hover:text-[#c19a6b]">My Account</Link></li>
//           </ul>
//         </div>

//         {/* Policies (slightly left using margin tweak) */}
//         <div className="-ml-4">
//           <h2 className="text-lg font-semibold text-[#c19a6b] mb-3">Policies</h2>
//           <ul className="space-y-1">
//             <li><Link href="/privacy" className="hover:text-[#c19a6b]">Privacy Policy</Link></li>
//             <li><Link href="/return-refund" className="hover:text-[#c19a6b]">Return & Refund</Link></li>
//             <li><Link href="/copyright" className="hover:text-[#c19a6b]">Copyright</Link></li>
//             <li><Link href="/terms" className="hover:text-[#c19a6b]">Terms & Conditions</Link></li>
//             <li><Link href="/shipping" className="hover:text-[#c19a6b]">Shipping Policy</Link></li>
//           </ul>
//         </div>

//         {/* Social Media & Logos */}
//         <div>
//           <h2 className="text-lg font-semibold text-[#c19a6b] mb-3">Social Media</h2>

//           {/* Social Icons (small & left aligned) */}
//           <div className="flex gap-2 mb-4">
//             {[
//               { icon: "facebook", href: "#" },
//               { icon: "instagram", href: "#" },
//               { icon: "youtube", href: "#" },
//             ].map(({ icon, href }) => (
//               <a
//                 key={icon}
//                 href={href}
//                 className="w-8 h-8 bg-[#004d3d] rounded-full flex items-center justify-center hover:bg-[#006d5d]"
//                 aria-label={icon}
//               >
//                 <i className={`fab fa-${icon} text-white text-sm`}></i>
//               </a>
//             ))}
//           </div>

//           {/* Logos beside social icons, NOT below */}
//           <div className="flex items-center gap-4">
//             <img src="/shiprocket-logo.svg" alt="Shiprocket" className="h-6" />
//             <img src="/cashfree-logo.svg" alt="Cashfree" className="h-6" />
//           </div>
//         </div>
//       </div>

//       {/* Bottom Copyright */}
//       <div className="border-t border-[#c19a6b] py-4 text-center text-sm">
//         &copy; 2025 Aahasuvai. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }

// import { Link } from "wouter";

// export default function Footer() {
//   return (
//     <footer className="bg-[#033e2d] text-[#fff6e7] text-sm">
//       <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {/* Address */}
//         <div>
//           <h2 className="text-lg font-semibold text-[#c19a6b] mb-3">Address</h2>
//           <p>
//             Aahasuvai Spices,<br />
//             30/147, Kuppanna Chettiyar Street,<br />
//             Tiruppur, Tamil Nadu – 641604, India
//           </p>
//           <p className="mt-2">Phone: +91 9361360885</p>
//           <p>Email: aahasuvaispices@gmail.com</p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h2 className="text-lg font-semibold text-[#c19a6b] mb-3">Quick Links</h2>
//           <ul className="space-y-1">
//             <li><Link href="/about" className="hover:text-[#c19a6b]">About us</Link></li>
//             <li><Link href="/products" className="hover:text-[#c19a6b]">Products</Link></li>
//             <li><Link href="/faq" className="hover:text-[#c19a6b]">FAQ</Link></li>
//             <li><Link href="/account" className="hover:text-[#c19a6b]">My Account</Link></li>
//           </ul>
//         </div>

//         {/* Policies */}
//         <div>
//           <h2 className="text-lg font-semibold text-[#c19a6b] mb-3">Policies</h2>
//           <ul className="space-y-1">
//             <li><Link href="/privacy" className="hover:text-[#c19a6b]">Privacy Policy</Link></li>
//             <li><Link href="/return-refund" className="hover:text-[#c19a6b]">Return & Refund</Link></li>
//             <li><Link href="/copyright" className="hover:text-[#c19a6b]">Copyright</Link></li>
//             <li><Link href="/terms" className="hover:text-[#c19a6b]">Terms & Conditions</Link></li>
//             <li><Link href="/shipping" className="hover:text-[#c19a6b]">Shipping Policy</Link></li>
//           </ul>
//         </div>

//         {/* Partners + Social Media */}
//         <div>
//           <h2 className="text-lg font-semibold text-[#c19a6b] mb-3">Shipping Partner</h2>
//           <div className="flex items-center gap-4 mb-4 flex-wrap">
//             <img src="/shiprocket-logo.svg" alt="Shiprocket" className="h-6" />
//             <img src="/cashfree-logo.svg" alt="Cashfree" className="h-6" />
//           </div>

//           <h2 className="text-lg font-semibold text-[#c19a6b] mb-3">Social Media</h2>
//           <div className="flex items-center gap-3">
//             {[
//               { icon: "facebook", href: "#" },
//               { icon: "instagram", href: "#" },
//               { icon: "youtube", href: "#" },
//             ].map(({ icon, href }) => (
//               <a
//                 key={icon}
//                 href={href}
//                 className="w-8 h-8 bg-[#004d3d] rounded-full flex items-center justify-center hover:bg-[#006d5d]"
//               >
//                 <i className={`fab fa-${icon} text-white text-sm`}></i>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom Copyright */}
//       <div className="border-t border-[#c19a6b] py-4 text-center text-sm">
//         &copy; 2025 Aahasuvai. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#033e2d] text-[#fff6e7] text-xs">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Address */}
        <div>
          <h2 className="text-sm font-semibold text-[#c19a6b] mb-2">Address</h2>
          <p>
            Aahasuvai Spices,<br />
            30/147, Kuppanna Chettiyar Street,<br />
            Tiruppur, Tamil Nadu – 641604, India
          </p>
          <p className="mt-1">Phone: +91 9361360885</p>
          <p>Email: aahasuvaispices@gmail.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-sm font-semibold text-[#c19a6b] mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li><Link href="/about" className="hover:text-[#c19a6b]">About us</Link></li>
            <li><Link href="/products" className="hover:text-[#c19a6b]">Products</Link></li>
            <li><Link href="/faq" className="hover:text-[#c19a6b]">FAQ</Link></li>
            <li><Link href="/account" className="hover:text-[#c19a6b]">My Account</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h2 className="text-sm font-semibold text-[#c19a6b] mb-2">Policies</h2>
          <ul className="space-y-1">
            <li><Link href="/privacy" className="hover:text-[#c19a6b]">Privacy Policy</Link></li>
            <li><Link href="/return-refund" className="hover:text-[#c19a6b]">Return & Refund</Link></li>
            <li><Link href="/copyright" className="hover:text-[#c19a6b]">Copyright</Link></li>
            <li><Link href="/terms" className="hover:text-[#c19a6b]">Terms & Conditions</Link></li>
            <li><Link href="/shipping-policy" className="hover:text-[#c19a6b]">Shipping Policy</Link></li>
          </ul>
        </div>

        {/* Partners + Social Media */}
        <div>
          <h2 className="text-sm font-semibold text-[#c19a6b] mb-2">Shipping Partner</h2>
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <img src="/shiprocket-logo.svg" alt="Shiprocket" className="h-5" />
            <img src="/cashfree-logo.svg" alt="Cashfree" className="h-5" />
          </div>

          <h2 className="text-sm font-semibold text-[#c19a6b] mb-2">Social Media</h2>
          <div className="flex items-center gap-2">
            {[
              { icon: "facebook", href: "#" },
              { icon: "instagram", href: "#" },
              { icon: "LinkedIn", href: "#" },
            ].map(({ icon, href }) => (
              <a
                key={icon}
                href={href}
                className="w-7 h-7 bg-[#004d3d] rounded-full flex items-center justify-center hover:bg-[#006d5d]"
              >
                <i className={`fab fa-${icon} text-white text-[10px]`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-[#c19a6b] py-3 text-center text-xs">
        &copy; 2025 Aahasuvai. All Rights Reserved.
      </div>
    </footer>
  );
}
