import React from 'react';
// import '../../index.css';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 py-16 text-gray-400">
            <div className="w-5/6  mx-auto px-8 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 w-full">
                   
                    <div>
                        <img className="h-8 w-auto mb-4" src="/zoro.png" alt="Company Logo" />
                        <p className="text-base font-normal font-['Segoe_UI'] leading-normal mb-6">
                            Transforming businesses through innovative AI solutions and cutting-edge technology.
                        </p>
                        <div className="flex space-x-3">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Facebook" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-3">
                            {['Web Development', 'Custom Software', 'AI Applications', 'IT Consulting'].map((service, idx) => (
                                <li key={idx}>
                                    <a href="#" className="text-base font-normal hover:text-white transition-colors">{service}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Our Team', 'Contact'].map((link, idx) => (
                                <li key={idx}>
                                    <a href="#" className="text-base font-normal hover:text-white transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
                        <p className="text-base font-normal leading-normal mb-2">contact@company.com</p>
                        <p className="text-base font-normal leading-normal mb-2">+1 (555) 123-4567</p>
                        <address className="text-base font-normal leading-normal not-italic">
                            123 Innovation Drive<br />Tech City, TC 12345
                        </address>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>© 2025 Zoro Innovations. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;