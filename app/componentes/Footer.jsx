import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#FF5C00] rounded-full flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <span className="text-3xl font-extrabold text-gray-900 tracking-tighter">Tudelū</span>
            </div>
            <p className="text-gray-500 italic text-lg font-medium">
              Walls that move you™
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest">Quick Links</h3>
            <ul className="space-y-3 text-gray-500 font-medium">
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Gallery</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Privacy</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">News</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Resources</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Measure</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Team</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest">Office</h3>
            <address className="not-italic text-gray-500 font-medium leading-relaxed">
              420 Industrial Avenue<br />
              Little Ferry, NJ<br />
              07643
            </address>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest">Connect</h3>
            <p className="text-gray-500 font-medium mb-1">718.730.7180</p>
            <p className="text-gray-500 font-medium mb-6">info@tudelu.com</p>
            <div className="flex gap-5 text-[#FF5C00]">
              <Link href="#" className="hover:opacity-80 transition-opacity"><FaFacebookF size={20} /></Link>
              <Link href="#" className="hover:opacity-80 transition-opacity"><FaInstagram size={20} /></Link>
              <Link href="#" className="hover:opacity-80 transition-opacity"><FaLinkedinIn size={20} /></Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 text-xs text-gray-400 font-medium">
          Copyright © 1999-2023 Tudelu Holdings, LLC
        </div>
      </div>
    </footer>
  );
};

export default Footer;
