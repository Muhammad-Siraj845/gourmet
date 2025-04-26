'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for reservations, questions, or feedback.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">123 Restaurant Street, City, Country</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-gray-600">Monday - Friday: 11:00 AM - 10:00 PM</p>
              <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
              <p className="text-gray-600">Email: info@restaurant.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Restaurant Location"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 