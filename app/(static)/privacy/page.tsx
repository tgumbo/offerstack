
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield, Eye, Database } from 'lucide-react';
import Link from 'next/link'

const Privacy = () => {
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
                                <p className="text-sm text-gray-600">Privacy Policy</p>
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
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                        <p className="text-gray-600">Last updated: June 24, 2025</p>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-blue-600" />
                                    Information We Collect
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-700">
                                    We collect information you provide directly to us, such as when you create an account,
                                    use our services, or contact us for support.
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Account information (name, email, company details)</li>
                                    <li>Job offer data you create and manage</li>
                                    <li>Usage data and analytics</li>
                                    <li>Communication preferences</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Eye className="h-5 w-5 text-blue-600" />
                                    How We Use Your Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-700">
                                    We use the information we collect to provide, maintain, and improve our services.
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>To provide and maintain our service</li>
                                    <li>To process transactions and send related information</li>
                                    <li>To send technical notices and support messages</li>
                                    <li>To communicate with you about products, services, and events</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Database className="h-5 w-5 text-blue-600" />
                                    Data Security
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-700">
                                    We implement appropriate security measures to protect your personal information
                                    against unauthorized access, alteration, disclosure, or destruction.
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Encryption of data in transit and at rest</li>
                                    <li>Regular security audits and updates</li>
                                    <li>Access controls and authentication</li>
                                    <li>Compliance with international data protection standards</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Us</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">
                                    If you have any questions about this Privacy Policy, please contact us at{' '}
                                    <a href="mailto:privacy@offerstack.com" className="text-blue-600 hover:underline">
                                        privacy@offerstack.com
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

export default Privacy;
