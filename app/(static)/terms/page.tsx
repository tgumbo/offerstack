
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Scale, Users, AlertTriangle } from 'lucide-react';
import Link from 'next/link'

const Terms = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <header className="border-b bg-white/80 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                                <FileText className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">OfferStack</h1>
                                <p className="text-sm text-gray-600">Terms of Service</p>
                            </div>
                        </Link>
                        <Link href="/" className="text-blue-600 hover:text-blue-700">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
                        <p className="text-gray-600">Last updated: June 24, 2025</p>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Scale className="h-5 w-5 text-blue-600" />
                                    Acceptance of Terms
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">
                                    By accessing and using OfferStack, you accept and agree to be bound by the terms
                                    and provision of this agreement. If you do not agree to abide by the above,
                                    please do not use this service.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="h-5 w-5 text-blue-600" />
                                    User Responsibilities
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-700">
                                    As a user of OfferStack, you agree to:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Provide accurate and complete information</li>
                                    <li>Maintain the security of your account credentials</li>
                                    <li>Use the service in compliance with applicable laws</li>
                                    <li>Respect the intellectual property rights of others</li>
                                    <li>Not use the service for any unlawful or prohibited purpose</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <FileText className="h-5 w-5 text-blue-600" />
                                    Service Description
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-700">
                                    OfferStack provides a platform for creating, managing, and tracking job offer letters.
                                    Our service includes:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Professional offer letter templates</li>
                                    <li>Electronic signature capabilities</li>
                                    <li>Offer tracking and management tools</li>
                                    <li>Candidate communication features</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <AlertTriangle className="h-5 w-5 text-blue-600" />
                                    Limitation of Liability
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">
                                    OfferStack shall not be liable for any indirect, incidental, special, consequential,
                                    or punitive damages, including without limitation, loss of profits, data, use,
                                    goodwill, or other intangible losses.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">
                                    For questions about these Terms of Service, please contact us at{' '}
                                    <a href="mailto:legal@offerstack.com" className="text-blue-600 hover:underline">
                                        legal@offerstack.com
                                    </a>
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
