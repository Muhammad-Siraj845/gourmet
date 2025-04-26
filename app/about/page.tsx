'use client';

import Image from 'next/image';
import { FaAward, FaUtensils, FaWineGlassAlt, FaUsers } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Chef John Smith',
    role: 'Executive Chef',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    bio: 'With over 20 years of experience in fine dining, Chef John brings his passion for Italian cuisine to every dish.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Pastry Chef',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    bio: 'Specializing in French pastries and desserts, Sarah creates sweet masterpieces that delight our guests.'
  },
  {
    name: 'Michael Chen',
    role: 'Sous Chef',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    bio: 'Michael\'s expertise in Asian fusion cuisine adds a unique twist to our menu.'
  }
];

const features = [
  {
    icon: <FaAward className="text-4xl text-amber-500" />,
    title: 'Award Winning',
    description: 'Recognized for excellence in culinary arts and service'
  },
  {
    icon: <FaUtensils className="text-4xl text-amber-500" />,
    title: 'Fresh Ingredients',
    description: 'Locally sourced, organic ingredients for the best flavors'
  },
  {
    icon: <FaWineGlassAlt className="text-4xl text-amber-500" />,
    title: 'Wine Selection',
    description: 'Curated wine list featuring the finest selections'
  },
  {
    icon: <FaUsers className="text-4xl text-amber-500" />,
    title: 'Experienced Team',
    description: 'Dedicated professionals committed to your dining experience'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Restaurant interior"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Our Story
          </h1>
        </div>
      </section>

      {/* About Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Welcome to Gourmet Haven</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Gourmet Haven has been serving exceptional cuisine in a warm and inviting atmosphere. Our passion for food and commitment to quality has made us a favorite destination for food enthusiasts.
              </p>
              <p className="text-gray-600">
                We believe in creating memorable dining experiences through carefully crafted dishes, attentive service, and a welcoming ambiance. Our menu reflects our dedication to using the finest ingredients and traditional cooking techniques.
              </p>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Restaurant kitchen"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-amber-500 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 