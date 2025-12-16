import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import {CONTACT} from "../constants"
import { motion } from 'framer-motion';
import { FaHome } from "react-icons/fa";

function Contact() {
  return (
    <div className="border-neutral-900 py-12 text-white">
      <motion.h2 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="text-center text-4xl font-bold mb-8"><span className="text-purple-600">Contact Me</span>
      </motion.h2>

      <div className="flex justify-center space-x-6 ">
        {/* Home Section */}
        <motion.div 
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration: 0.9 }}
        className="flex items-center space-x-4 bg-red-100 p-6 rounded-xl shadow-md">
          <FaHome className="text-3xl text-red-500" />

          <span className="text-lg font-semibold text-black">{CONTACT.address}</span>
        </motion.div>

        {/* Phone Section */}
        <motion.div 
         whileInView={{ opacity: 1, y: 0 }}
         initial={{ opacity: 0, y: -10 }}
         transition={{ duration: 0.7 }}
        className="flex items-center space-x-4 bg-indigo-100 p-6 rounded-xl shadow-md">
          <FaPhoneAlt className="text-3xl text-indigo-500" />
          <span className="text-lg font-semibold text-black">{CONTACT.phoneNo}</span>
        </motion.div>

        {/* WhatsApp Section */}
        <motion.div 
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: 100 }}
         transition={{ duration: 0.9 }}
        className="flex items-center space-x-4 bg-green-100 p-6 rounded-xl shadow-md">
          <FaEnvelope className="text-3xl text-green-500" />
          <span className="text-lg font-semibold text-black">kumarirachna740@gmail.com
</span>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
