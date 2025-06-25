import Link from 'next/link';
import {FileText, Github, Linkedin, Mail, MapPin, Phone, Twitter} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                                <FileText className="h-6 w-6 text-white"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">OfferStack</h3>
                                <p className="text-sm text-gray-600">Hiring made simple</p>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-6 max-w-sm">
                            Streamline your job offer process with digital signatures, automated workflows, and
                            compliance-ready templates for Southern Africa.
                        </p>
                        <div className="flex space-x-3">
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                <Twitter className="h-5 w-5"/>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                <Linkedin className="h-5 w-5"/>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                <Github className="h-5 w-5"/>
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>
                                <Link href="/how-it-works" className="hover:text-blue-600 transition-colors">
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link href="/templates" className="hover:text-blue-600 transition-colors">
                                    Templates
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="hover:text-blue-600 transition-colors">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/help" className="hover:text-blue-600 transition-colors">
                                    Help & Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>
                                <Link href="/about" className="hover:text-blue-600 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-blue-600 transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-blue-600 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-blue-600 transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Get in Touch</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-center">
                                <Mail className="h-4 w-4 mr-2 text-gray-400"/>
                                hello@offerstack.com
                            </li>
                            <li className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-gray-400"/>
                                Cape Town, South Africa
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500">
                        © 2024 OfferStack. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
