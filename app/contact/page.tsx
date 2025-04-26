'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-amber-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">123 Restaurant Street</p>
                <p className="text-gray-600">City, State 12345</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhone className="text-amber-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+1 (123) 456-7890</p>
                <p className="text-gray-600">+1 (123) 456-7891</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-amber-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">info@gourmethaven.com</p>
                <p className="text-gray-600">reservations@gourmethaven.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaClock className="text-amber-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold">Opening Hours</h3>
                <p className="text-gray-600">Monday - Friday: 11:00 AM - 11:00 PM</p>
                <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 12:00 AM</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155710122!2d-73.9878448!3d40.7579887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 