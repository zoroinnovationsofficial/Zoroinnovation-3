export default function Footer() {
  return (
    <footer className=" bg-gray-900 text-gray-100 pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Company Info */}
        <div>
          <img
    src="/images/ZORO.png"
    alt="Zoro Innovations Logo"
    className="w-24 h-9 "
  />
          <div className="text-[16px] text-gray-400 mb-4">Transforming businesses through innovative AI solutions and cutting-edge technology.</div>
          <div className="flex space-x-2 mt-2">
  <a href="#" className="text-gray-400 hover:text-white">
    <img src="/images/Background1.png" alt="LinkedIn" className="w-10 h-10" />
  </a>
  <a href="#" className="text-gray-400 hover:text-white">
    <img src="/images/Background.png" alt="Twitter" className="w-10 h-10" />
  </a>
  <a href="#" className="text-gray-400 hover:text-white">
    <img src="/images/Background2.png" alt="Facebook" className="w-10 h-10" />
  </a>
</div>
        </div>
        {/* Services */}
        <div>
          <div className="text-lg font-semibold mb-2">Services</div>
          <ul className="text-[16px] text-gray-400 space-y-1">
            <li>Web Development</li>
            <li>Custom Software</li>
            <li>AI Applications</li>
            <li>IT Consulting</li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <div className="text-lg font-semibold mb-2">Company</div>
          <ul className="text-[16px] text-gray-400 space-y-1">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <div className="text-lg font-semibold mb-2">Contact</div>
          <ul className="text-[16px] text-gray-400 space-y-1">
            <li>contact@company.com</li>
            <li>+1 (555) 123-4567</li>
            <li>123 Innovation Drive<br/>Tech City, TC 12345</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-4 text-xs text-gray-500 text-center">
        © 2025 Zoro Innovations. All rights reserved. <span className="mx-2">|</span> Privacy Policy <span className="mx-2">|</span> Terms of Service
      </div>
    </footer>
  );
}
