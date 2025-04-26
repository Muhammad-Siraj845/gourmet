'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our story and passion for creating unforgettable dining experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Restaurant Interior"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">Our Story</h3>
            <p className="text-gray-600">
              Founded in 2010, our restaurant has been serving exceptional cuisine in a warm and inviting atmosphere. Our chefs bring years of experience and passion to every dish they create.
            </p>
            <p className="text-gray-600">
              We source the finest ingredients locally and globally to ensure the highest quality in every bite. Our commitment to excellence has earned us recognition as one of the city's premier dining destinations.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Fresh Ingredients"
              className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Fresh Ingredients</h4>
            <p className="text-gray-600">We use only the freshest, highest quality ingredients in all our dishes.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Expert Chefs"
              className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Expert Chefs</h4>
            <p className="text-gray-600">Our talented chefs create culinary masterpieces with passion and precision.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Warm Atmosphere"
              className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Warm Atmosphere</h4>
            <p className="text-gray-600">Enjoy your meal in our elegant and comfortable dining space.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 