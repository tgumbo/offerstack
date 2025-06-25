import Link from 'next/link'
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ArrowRight, CheckCircle, Clock, FileText, PenTool, Play, Send, Users} from "lucide-react";
import Footer from "@/app/(static)/components/Footer";
import Header from "@/app/(static)/components/Header";

const HowItWorks = () => {
    const steps = [
        {
            step: "1",
            icon: FileText,
            title: "Create Your Offer",
            description: "Choose from pre-built templates or create custom offer letters with our smart editor. Add candidate details, salary, benefits, and terms.",
            features: ["Country-specific templates", "Smart auto-fill", "Custom branding", "Compliance check"],
            time: "2 minutes"
        },
        {
            step: "2",
            icon: Send,
            title: "Send & Track",
            description: "Send offers via email with a secure signing link. Get real-time notifications when candidates view, download, or interact with offers.",
            features: ["Secure email delivery", "Real-time tracking", "View analytics", "Automated reminders"],
            time: "30 seconds"
        },
        {
            step: "3",
            icon: PenTool,
            title: "Candidate Signs",
            description: "Candidates receive a mobile-friendly signing experience. They can review terms, ask questions, and sign digitally from any device.",
            features: ["Mobile-optimized", "Digital signatures", "Document upload", "Terms acceptance"],
            time: "5 minutes"
        },
        {
            step: "4",
            icon: CheckCircle,
            title: "Get Results",
            description: "Receive instant notifications when offers are signed. Download signed documents and integrate with your HR systems seamlessly.",
            features: ["Instant notifications", "Signed PDF download", "HR system sync", "Audit trail"],
            time: "Instant"
        }
    ];

    const benefits = [
        {
            icon: Clock,
            title: "10x Faster Hiring",
            description: "Reduce time from offer to acceptance from weeks to hours"
        },
        {
            icon: Users,
            title: "Better Candidate Experience",
            description: "Mobile-first design that candidates love to use"
        },
        {
            icon: CheckCircle,
            title: "100% Compliant",
            description: "Built for Southern African employment laws and regulations"
        }
    ];

    const testimonial = {
        quote: "OfferStack transformed our hiring process. What used to take 2 weeks now happens in 2 hours. Our candidates love the seamless experience.",
        author: "Sarah Johnson",
        role: "HR Director",
        company: "TechCorp SA"
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <Header/>

            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <section className="py-20 text-center">
                    <Badge variant="secondary" className="mb-6 px-4 py-2">
                        <Play className="w-4 h-4 mr-2"/>
                        See how it works in 4 simple steps
                    </Badge>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        From Offer to
                        <span
                            className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent block">
              Signed Contract
            </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Streamline your entire hiring process with our simple 4-step workflow.
                        Create, send, and get offers signed in minutes, not weeks.
                    </p>
                    <Button size="lg" asChild
                            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-4">
                        <Link href="/signup">
                            Start Your Free Trial
                            <ArrowRight className="ml-2 h-5 w-5"/>
                        </Link>
                    </Button>
                </section>

                {/* How It Works Steps */}
                <section className="py-16">
                    <div className="space-y-24">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div key={step.step}
                                     className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                                    {/* Content */}
                                    <div className="flex-1 space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="bg-gradient-to-r from-blue-600 to-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                                                {step.step}
                                            </div>
                                            <Badge appearance="stroke" className="text-sm">
                                                <Clock className="w-3 h-3 mr-1"/>
                                                {step.time}
                                            </Badge>
                                        </div>

                                        <div>
                                            <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                            <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                            {step.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-600"/>
                                                    <span className="text-sm text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Visual */}
                                    <div className="flex-1 flex justify-center">
                                        <Card
                                            className="w-full max-w-md border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
                                            <CardHeader className="text-center pb-4">
                                                <div
                                                    className="bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-full w-fit mx-auto mb-4">
                                                    <Icon className="h-12 w-12 text-blue-600"/>
                                                </div>
                                                <CardTitle className="text-xl">{step.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="text-center">
                                                <div className="bg-gray-100 rounded-lg p-6 mb-4">
                                                    <div className="text-4xl mb-2">⚡</div>
                                                    <p className="text-sm text-gray-600">Step {step.step} of 4</p>
                                                </div>
                                                <p className="text-sm text-gray-600">{step.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Teams Love OfferStack</h2>
                        <p className="text-lg text-gray-600">Built specifically for modern hiring teams in Southern
                            Africa</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <Card key={index} className="border-0 shadow-lg text-center">
                                    <CardHeader>
                                        <div
                                            className="bg-gradient-to-r from-blue-100 to-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                                            <Icon className="h-8 w-8 text-blue-600"/>
                                        </div>
                                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600">{benefit.description}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </section>

                {/* Testimonial */}
                <section className="py-16">
                    <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
                        <CardContent className="p-12 text-center">
                            <div className="text-4xl mb-6">💬</div>
                            <blockquote className="text-xl font-medium text-gray-900 mb-6 italic">
                                "{testimonial.quote}"
                            </blockquote>
                            <div>
                                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                                <p className="text-gray-600">{testimonial.role} at {testimonial.company}</p>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div
                        className="text-center bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 text-white">
                        <h2 className="text-4xl font-bold mb-4">Ready to streamline your hiring?</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Join hundreds of companies who've transformed their offer process with OfferStack
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-4">
                                <Link href="/signup">Start Free Trial</Link>
                            </Button>
                            <Button size="lg" variant="outline"
                                    className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
                                    asChild>
                                <Link href="/contact">Schedule Demo</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <Footer/>

        </div>
    );
};

export default HowItWorks;
