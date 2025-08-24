import { useState } from "react";
import { Calendar, MapPin } from "lucide-react";

const Projects = () => {
  const [activeFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Modern Family Home",
      category: "residential",
      location: "Chennai",
      date: "2024",
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "A contemporary 3-bedroom family home with modern amenities and sustainable design features.",
    },
    {
      id: 2,
      title: "Corporate Office Building",
      category: "commercial",
      location: "Coimbatore",
      date: "2024",
      image:
        "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "A state-of-the-art office complex designed for maximum efficiency and employee comfort.",
    },
    {
      id: 3,
      title: "Luxury Villa Renovation",
      category: "renovation",
      location: "Madurai",
      date: "2023",
      image:
        "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Complete renovation of a traditional villa, combining classic architecture with modern luxury.",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our portfolio of successfully completed construction
              projects that showcase our expertise and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  {/* Category removed as requested */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Project Statistics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak to our experience and commitment to delivering
              quality construction projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-blue-700 mb-2">25+</div>
              <div className="text-gray-600 font-medium">
                Projects Completed
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-orange-600 mb-2">
                100+
              </div>
              <div className="text-gray-600 font-medium">Skilled Workers</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your Project Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Ready to bring your construction vision to life? Contact us to
            discuss your project requirements and get started.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
