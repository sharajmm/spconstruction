import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Building2 } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Building2, label: 'Years Experience', value: '5+' },
    { icon: Award, label: 'Projects Completed', value: '25+' },
    { icon: Users, label: 'Skilled Workers', value: '100+' },
  ];

  return (
    <div className="min-h-screen">
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.8)), url('https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Building Your Dreams
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in-up animation-delay-200">
            Professional construction services with precision, quality, and excellence
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-fade-in-up animation-delay-400">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              View Our Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose SP Constructions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With years of experience and a commitment to excellence, we deliver construction 
              projects that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-8 rounded-lg bg-gray-50 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-700 text-white rounded-full mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-blue-700 mb-2">{stat.value}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Your Trusted Construction Partner
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At SP Constructions, we combine traditional craftsmanship with modern techniques 
                to deliver exceptional results. Our team of skilled professionals is dedicated 
                to bringing your vision to life.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mr-4"></div>
                  <span className="text-gray-700">Quality materials and construction</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mr-4"></div>
                  <span className="text-gray-700">Timely project completion</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mr-4"></div>
                  <span className="text-gray-700">Competitive pricing</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mr-4"></div>
                  <span className="text-gray-700">Professional project management</span>
                </li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center mt-8 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Construction team at work"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;