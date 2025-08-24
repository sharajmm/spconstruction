import { Phone, Mail, MapPin, Instagram } from "lucide-react";
type WhatsAppIconProps = {
  className?: string;
  width?: number;
  height?: number;
};

const WhatsAppIcon = (props: WhatsAppIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className={props.className}
    width={props.width || 24}
    height={props.height || 24}
  >
    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.661 1.934 6.661L4 29l7.522-1.917A12.96 12.96 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.97 0-3.89-.57-5.53-1.65l-.39-.24-4.47 1.14 1.19-4.36-.25-.4A9.93 9.93 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43.98 2.81 1.12 3 .14.19 2.01 3.07 4.88 4.18.68.27 1.21.43 1.62.55.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              SP Constructions
            </h3>
            <p className="text-gray-300 mb-4">
              Building dreams with precision and excellence. Your trusted
              construction partner for residential and commercial projects.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/918637464069"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <WhatsAppIcon className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              </a>
              <a
                href="https://instagram.com/sp_construction"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between h-full">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">+91 8637464069</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">spconstruction@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300 text-sm">
                  8, Komarappa Muthaliyar Street, Chennaimalai
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 SP Constructions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
