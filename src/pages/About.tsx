import { Users, Award, Building2, Target, Heart, Shield } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Building2,
      label: "Years of Experience",
      value: "5+",
      color: "bg-blue-600",
    },
    {
      icon: Award,
      label: "Completed Projects",
      value: "25+",
      color: "bg-green-600",
    },
    {
      icon: Users,
      label: "Skilled Workers",
      value: "100+",
      color: "bg-purple-600",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description:
        "Every project is executed with meticulous attention to detail and precision.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "We are passionate about creating spaces that inspire and endure.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description:
        "Dependable service and unwavering commitment to our promises.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About SP Constructions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Building excellence since our inception, we are committed to
              delivering construction solutions that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-white rounded-lg shadow-lg"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} text-white rounded-full mb-4`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At SP Constructions, our journey began with a simple goal: to
                build spaces that last and inspire. Over the years, we have
                grown into a trusted name for both residential and commercial
                projects, known for our commitment to quality and client
                satisfaction. Our team blends experience with innovation,
                ensuring every project is completed with care, safety, and
                attention to detail. We believe construction is more than just
                building—it's about creating environments where people thrive,
                businesses grow, and communities come together. From concept to
                completion, we work closely with our clients to deliver results
                that exceed expectations and stand the test of time.
              </p>
            </div>
            <div className="relative h-full flex items-stretch">
              <img
                src="https://constrofacilitator.com/wp-content/uploads/2024/08/commercial-construction-scaled.jpg"
                alt="Commercial construction site"
                className="rounded-lg shadow-xl object-cover h-full w-full"
                style={{ minHeight: "350px", maxHeight: "600px" }}
              />
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our
                approach to construction.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-700 text-white rounded-full mb-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-blue-700 rounded-lg p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can bring your construction vision to life
              with our expertise and commitment to excellence.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
