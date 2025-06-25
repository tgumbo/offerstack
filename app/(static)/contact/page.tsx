'use client'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Clock, FileText, Mail, MapPin, Phone, Send} from 'lucide-react';
import Link from 'next/link'
import {toast} from 'sonner';
import React, {ChangeEvent, FormEvent, useState} from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        toast("Message sent!", {
            description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        });
        setFormData({name: '', email: '', company: '', message: ''});
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <header className="border-b bg-white/80 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                                <FileText className="h-6 w-6 text-white"/>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">OfferStack</h1>
                                <p className="text-sm text-gray-600">Contact Us</p>
                            </div>
                        </Link>
                        <Link href="/" className="text-blue-600 hover:text-blue-700">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
                        <p className="text-xl text-gray-600">
                            We're here to help you streamline your hiring process
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <Card className="border-0 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Mail className="h-5 w-5 text-blue-600"/>
                                        Email Us
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-2">General inquiries</p>
                                    <a href="mailto:hello@offerstack.com"
                                       className="text-blue-600 hover:underline font-semibold">
                                        hello@offerstack.com
                                    </a>
                                    <p className="text-gray-600 mt-4 mb-2">Support</p>
                                    <a href="mailto:support@offerstack.com"
                                       className="text-blue-600 hover:underline font-semibold">
                                        support@offerstack.com
                                    </a>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-blue-600"/>
                                        Serving
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <p className="font-semibold">🇿🇦 South Africa</p>
                                        <p className="font-semibold">🇿🇼 Zimbabwe</p>
                                        <p className="font-semibold">🇧🇼 Botswana</p>
                                        <p className="font-semibold">🇳🇦 Namibia</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card className="border-0 shadow-lg">
                                <CardHeader>
                                    <CardTitle>Send us a Message</CardTitle>
                                    <p className="text-gray-600">We'll get back to you within 24 hours</p>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="name"
                                                       className="block text-sm font-medium text-gray-700 mb-2">
                                                    Full Name *
                                                </label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Your full name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email"
                                                       className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email Address *
                                                </label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="company"
                                                   className="block text-sm font-medium text-gray-700 mb-2">
                                                Company Name
                                            </label>
                                            <Input
                                                id="company"
                                                name="company"
                                                type="text"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Your company name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message"
                                                   className="block text-sm font-medium text-gray-700 mb-2">
                                                Message *
                                            </label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell us how we can help you..."
                                                rows={6}
                                            />
                                        </div>

                                        <Button type="submit" size="lg"
                                                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                                            <Send className="h-4 w-4 mr-2"/>
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
