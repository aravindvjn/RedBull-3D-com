import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-3">About This Site</h3>
            <p className="text-gray-400 text-sm">
              This is a fan-made project and is not affiliated with or endorsed
              by Red Bull. If there are any copyright concerns, please contact:{" "}
              <Link href="mailto:aravind284479@gmail.com" className="underline">
                mail
              </Link>
              .
            </p>
          </div>

          <div className="center flex-col">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              
            </div>
          </div> */}
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>© 2025 Fan-Made Red Bull Showcase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
