import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {
    ArrowRight,
    CheckCircle,
    Clock,
    FileText,
    Globe,
    Play,
    Shield,
    Star,
    TrendingUp,
    Users,
    Zap
} from "lucide-react";
import {OfferCard} from "@/components/OfferCard";
import Footer from "@/app/(static)/components/Footer";

// Mock data for demo
const mockOffers = [
    {
        id: "1",
        candidateName: "Sarah Mthembu",
        jobTitle: "Senior Developer",
        department: "Engineering",
        status: "sent" as const,
        dateSent: "2024-06-20",
        expiryDate: "2024-07-04",
        salary: 85000,
        currency: "ZAR",
        country: "South Africa"
    },
    {
        id: "2",
        candidateName: "Michael Chikwanha",
        jobTitle: "Marketing Manager",
        department: "Marketing",
        status: "signed" as const,
        dateSent: "2024-06-18",
        expiryDate: "2024-07-02",
        salary: 45000,
        currency: "USD",
        country: "Zimbabwe"
    },
    {
        id: "3",
        candidateName: "Amara Ndumiso",
        jobTitle: "UX Designer",
        department: "Design",
        status: "viewed" as const,
        dateSent: "2024-06-22",
        expiryDate: "2024-07-06",
        salary: 55000,
        currency: "ZAR",
        country: "South Africa"
    }
];

const Index = () => {
    const stats = {
        totalOffers: mockOffers.length,
        signed: mockOffers.filter(o => o.status === "signed").length,
        pending: mockOffers.filter(o => ["sent", "viewed"].includes(o.status)).length,
        expiringSoon: mockOffers.filter(o => {
            const expiry = new Date(o.expiryDate);
            const today = new Date();
            const diffTime = expiry.getTime() - today.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays <= 3 && diffDays > 0;
        }).length
    };

    const features = [
        {
            icon: FileText,
            title: "Smart Templates",
            description: "Country-specific templates for South Africa, Zimbabwe, Namibia, and Botswana with automatic compliance",
            highlight: "Compliance Ready"
        },
        {
            icon: Users,
            title: "Digital Signatures",
            description: "Secure e-signature process with real-time notifications and legal validity across Southern Africa",
            highlight: "Legally Binding"
        },
        {
            icon: TrendingUp,
            title: "Analytics Dashboard",
            description: "Track offer acceptance rates, time-to-sign metrics, and hiring pipeline performance",
            highlight: "Data-Driven"
        },
        {
            icon: Clock,
            title: "Automated Workflows",
            description: "Set expiry dates, automated reminders, and follow-up sequences to accelerate hiring",
            highlight: "Time-Saving"
        }
    ];

    const benefits = [
        {
            icon: Zap,
            title: "10x Faster Hiring",
            description: "Reduce offer-to-acceptance time from weeks to hours"
        },
        {
            icon: Shield,
            title: "100% Secure",
            description: "Bank-grade encryption and compliance with local data protection laws"
        },
        {
            icon: Globe,
            title: "Multi-Country Support",
            description: "Tailored for South Africa, Zimbabwe, Botswana, and Namibia markets"
        }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "HR Director",
            company: "TechCorp SA",
            content: "OfferStack reduced our time-to-hire by 60%. The automated workflows are a game-changer.",
            rating: 5
        },
        {
            name: "David Moyo",
            role: "Founder",
            company: "StartupZW",
            content: "Finally, a hiring solution built for African businesses. The compliance features saved us weeks.",
            rating: 5
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                                <FileText className="h-6 w-6 text-white"/>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">OfferStack</h1>
                                <p className="text-sm text-gray-600">Hiring made simple</p>
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav className="hidden md:flex items-center space-x-6">
                            <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                                How It Works
                            </Link>
                            <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                                Pricing
                            </Link>
                            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                                About
                            </Link>
                            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                                Contact
                            </Link>
                        </nav>

                        <div className="flex gap-2">
                            <Button variant="outline" asChild>
                                <Link href="/login">Sign In</Link>
                            </Button>
                            <Button asChild
                                    className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                                <Link href="/signup">Start Free Trial</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <section className="py-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <Badge variant="secondary" className="mb-6 px-4 py-2">
                            🚀 Trusted by 500+ companies across Southern Africa
                        </Badge>
                        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                            Hire Faster with
                            <span
                                className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent block">
                                Smart Offer Management
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            The all-in-one platform for creating, sending, and tracking job offers.
                            Built specifically for small businesses and startups in Southern Africa.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Button size="lg" asChild
                                    className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-4">
                                <Link href="/signup">
                                    Start Free Trial
                                    <ArrowRight className="ml-2 h-5 w-5"/>
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-4">
                                <Link href="/how-it-works">
                                    <Play className="mr-2 h-5 w-5"/>
                                    See How It Works
                                </Link>
                            </Button>
                        </div>
                        <p className="text-sm text-gray-500">
                            ✅ Free 14-day trial • ✅ No credit card required • ✅ Setup in 5 minutes
                        </p>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div
                                        className="bg-gradient-to-r from-blue-100 to-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                                        <Icon className="h-8 w-8 text-blue-600"/>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold text-gray-900 mb-4">
                            Everything you need to hire better
                        </h3>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Streamline your entire offer process with tools designed for modern African businesses
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <Card key={index}
                                      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="bg-gradient-to-r from-blue-100 to-green-100 p-3 rounded-lg">
                                                <Icon className="h-6 w-6 text-blue-600"/>
                                            </div>
                                            <Badge variant="secondary" className="text-xs">
                                                {feature.highlight}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </section>

                {/* Demo Section */}
                <section className="py-16">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            See OfferStack in action
                        </h3>
                        <p className="text-gray-600">
                            Real-time offer tracking and management dashboard
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium opacity-90">Active Offers</CardTitle>
                                <FileText className="h-4 w-4 opacity-90"/>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">{stats.totalOffers}</div>
                                <p className="text-xs opacity-75">+12% from last month</p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium opacity-90">Signed</CardTitle>
                                <CheckCircle className="h-4 w-4 opacity-90"/>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">{stats.signed}</div>
                                <p className="text-xs opacity-75">85% acceptance rate</p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium opacity-90">Pending</CardTitle>
                                <Clock className="h-4 w-4 opacity-90"/>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">{stats.pending}</div>
                                <p className="text-xs opacity-75">Avg 2.3 days to sign</p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium opacity-90">Time Saved</CardTitle>
                                <TrendingUp className="h-4 w-4 opacity-90"/>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">24h</div>
                                <p className="text-xs opacity-75">Per offer created</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sample Offers */}
                    <Card className="border-0 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-xl">Live Offer Dashboard</CardTitle>
                            <p className="text-gray-600">Track every offer from creation to signature</p>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {mockOffers.map((offer) => (
                                    <OfferCard key={offer.id} offer={offer}/>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Testimonials */}
                <section className="py-16">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Loved by HR teams across Africa
                        </h3>
                        <p className="text-gray-600">
                            Join hundreds of companies who trust OfferStack with their hiring
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="border-0 shadow-lg">
                                <CardContent className="p-6">
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-yellow-500 fill-current"/>
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div
                        className="text-center bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 text-white">
                        <h3 className="text-4xl font-bold mb-4">Ready to transform your hiring?</h3>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Join 500+ companies across Southern Africa who've accelerated their hiring with OfferStack.
                            Start your free trial today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-4">
                                <Link href="/signup">
                                    Start Free Trial
                                    <CheckCircle className="ml-2 h-5 w-5"/>
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline"
                                    className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
                                    asChild>
                                <Link href="/contact">Talk to Sales</Link>
                            </Button>
                        </div>
                        <p className="text-sm opacity-75">
                            14-day free trial • No setup fees • Cancel anytime
                        </p>
                    </div>
                </section>
            </div>

            <Footer/>
        </div>
    );
};

export default Index;
