import {
  Home,
  Building,
  Wrench,
  Paintbrush,
  Truck,
  HardHat,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description:
        "Custom homes, renovations, and residential developments built to your specifications.",
      features: [
        "Custom Home Design",
        "Kitchen & Bath Remodeling",
        "Home Extensions",
        "Interior Renovations",
      ],
    },
    {
      icon: Building,
      title: "Commercial Construction",
      description:
        "Office buildings, retail spaces, and commercial developments for businesses.",
      features: [
        "Office Buildings",
        "Retail Spaces",
        "Warehouses",
        "Industrial Facilities",
      ],
    },
    {
      icon: Wrench,
      title: "Renovation Services",
      description:
        "Complete renovation and remodeling services for existing structures.",
      features: [
        "Full Home Renovations",
        "Bathroom Remodeling",
        "Kitchen Upgrades",
        "Basement Finishing",
      ],
    },
    {
      icon: Paintbrush,
      title: "Interior Design",
      description:
        "Professional interior design services to complement our construction work.",
      features: [
        "Space Planning",
        "Material Selection",
        "Color Consultation",
        "Furniture Layout",
      ],
    },
    {
      icon: Truck,
      title: "Site Preparation",
      description:
        "Comprehensive site preparation and land development services.",
      features: [
        "Excavation",
        "Grading",
        "Utility Installation",
        "Foundation Preparation",
      ],
    },
    {
      icon: HardHat,
      title: "Project Management",
      description:
        "End-to-end project management to ensure timely and successful completion.",
      features: [
        "Timeline Management",
        "Budget Control",
        "Quality Assurance",
        "Permit Coordination",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive construction services tailored to meet your specific
              needs and exceed your expectations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-700 text-white p-3 rounded-lg mr-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, quality materials, and innovative techniques
              to deliver exceptional results on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">
                  Quality
                </span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Quality Assurance
              </h4>
              <p className="text-gray-600">
                Rigorous quality control at every stage
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">Time</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Timely Delivery
              </h4>
              <p className="text-gray-600">Projects completed on schedule</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">
                  Price
                </span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Competitive Pricing
              </h4>
              <p className="text-gray-600">Fair and transparent pricing</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-700">Team</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Expert Team
              </h4>
              <p className="text-gray-600">
                Skilled professionals with experience
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements and get a
            personalized quote for our construction services.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-800 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
