'use client'

import Link from 'next/link';
import {Button} from "@/components/ui/button";
import {useIsMobile} from "@/hooks/use-mobile";
import {useState} from "react";
import {Menu, X} from "lucide-react";

const Header = () => {
    const mobile = useIsMobile();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        {href: '/how-it-works', label: 'How It Works'},
        {href: '/pricing', label: 'Pricing'},
        {href: '/about', label: 'About'},
        {href: '/contact', label: 'Contact'}
    ];

    return (
        <nav
            className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-sm">OS</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">OfferStack</h1>
                            <p className="text-sm text-gray-600">Hiring made simple</p>
                        </div>
                        {/*<span className="font-bold text-xl">TalentLink</span>*/}
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    {/* User Menu / Auth Buttons */}
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex items-center space-x-2">
                            <Button variant="ghost" asChild>
                                <Link href="/sign-in">Sign In</Link>
                            </Button>
                            <Button asChild
                                    className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                                <Link href="/sign-up">Start Free Trial</Link>
                            </Button>
                        </div>

                        {/* Mobile menu button */}
                        {mobile && <Button
                            variant="ghost"
                            size="sm"
                            className=""
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
                        </Button>}
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden border-t py-4">
                            <div className="flex flex-col space-y-3">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}


                                <div className="flex flex-col space-y-2 pt-2">
                                    <Button variant="ghost" asChild>
                                        <Link href="/sign-in" onClick={() => setMobileMenuOpen(false)}>
                                            Sign In
                                        </Link>
                                    </Button>
                                    <Button asChild>
                                        <Link href="/sign-up" onClick={() => setMobileMenuOpen(false)}>
                                            Sign Up
                                        </Link>
                                    </Button>
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
