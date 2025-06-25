import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {ArrowRight, Globe, Target, Users} from 'lucide-react';
import Link from 'next/link'
import Header from "@/app/(static)/components/Header";
import Footer from "@/app/(static)/components/Footer";

const About = () => {
    const team = [
        {
            name: "Sarah Mthembu",
            role: "CEO & Founder",
            description: "Former HR executive with 15+ years experience in Southern African markets"
        },
        {
            name: "Michael Chikwanha",
            role: "CTO",
            description: "Tech leader passionate about simplifying business processes through technology"
        },
        {
            name: "Amara Ndumiso",
            role: "Head of Product",
            description: "UX expert focused on creating intuitive solutions for small businesses"
        }
    ];

    const stats = [
        {number: "500+", label: "Companies Trust Us"},
        {number: "10,000+", label: "Offers Created"},
        {number: "4", label: "Countries Served"},
        {number: "98%", label: "Customer Satisfaction"}
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <Header/>

            <div className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Transforming Hiring Across
                        <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Southern Africa</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We're on a mission to simplify job offer management for small businesses and startups,
                        making professional hiring accessible to everyone.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <Card key={index} className="text-center border-0 shadow-lg">
                            <CardContent className="pt-6">
                                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                <p className="text-gray-600 text-sm">{stat.label}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <Card className="border-0 shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Target className="h-5 w-5 text-blue-600"/>
                                Our Mission
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700">
                                To democratize professional hiring by providing small businesses and startups
                                across Southern Africa with enterprise-grade job offer management tools that
                                are simple, affordable, and compliant with local regulations.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Globe className="h-5 w-5 text-blue-600"/>
                                Our Vision
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700">
                                A future where every business in Southern Africa, regardless of size, can
                                create professional job offers with confidence, streamline their hiring
                                process, and attract top talent in their markets.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Team */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {team.map((member, index) => (
                            <Card key={index} className="border-0 shadow-lg text-center">
                                <CardHeader>
                                    <div
                                        className="w-20 h-20 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <Users className="h-8 w-8 text-blue-600"/>
                                    </div>
                                    <CardTitle className="text-lg">{member.name}</CardTitle>
                                    <p className="text-blue-600 font-semibold">{member.role}</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm">{member.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-green-600 text-white text-center">
                    <CardContent className="pt-8 pb-8">
                        <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Hiring?</h3>
                        <p className="text-lg mb-6 opacity-90">
                            Join hundreds of businesses who trust OfferStack for their hiring needs.
                        </p>
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/signup">
                                Get Started Today
                                <ArrowRight className="ml-2 h-4 w-4"/>
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default About;
