
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import  Link  from 'next/link';

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "R299",
            period: "/month",
            description: "Perfect for small businesses and startups",
            features: [
                "Up to 10 offers per month",
                "Basic templates",
                "Email signatures",
                "48-hour support",
                "Basic analytics"
            ],
            limitations: [
                "Limited customization",
                "No team collaboration"
            ],
            buttonText: "Start Free Trial",
            popular: false
        },
        {
            name: "Professional",
            price: "R699",
            period: "/month",
            description: "Ideal for growing companies",
            features: [
                "Up to 50 offers per month",
                "Advanced templates",
                "Digital signatures",
                "24-hour support",
                "Advanced analytics",
                "Team collaboration",
                "Custom branding",
                "Bulk operations"
            ],
            limitations: [],
            buttonText: "Start Free Trial",
            popular: true
        },
        {
            name: "Enterprise",
            price: "R1,499",
            period: "/month",
            description: "For large organizations with complex needs",
            features: [
                "Unlimited offers",
                "Custom templates",
                "Advanced signatures",
                "Priority support",
                "Full analytics suite",
                "Multi-team management",
                "White-label solution",
                "API access",
                "Compliance tools",
                "Dedicated account manager"
            ],
            limitations: [],
            buttonText: "Contact Sales",
            popular: false
        }
    ];

    const faqs = [
        {
            question: "Can I change my plan at any time?",
            answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
        },
        {
            question: "Is there a free trial?",
            answer: "Yes, we offer a 14-day free trial for all paid plans. No credit card required to start."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and bank transfers for South African customers."
        },
        {
            question: "Do you offer discounts for annual billing?",
            answer: "Yes, save 20% when you pay annually. Contact our sales team for custom enterprise pricing."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">OfferStack</h1>
                                <p className="text-sm text-gray-600">Hiring made simple</p>
                            </div>
                        </Link>
                        <nav className="hidden md:flex items-center space-x-8">
                            <Link href="/how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</Link>
                            <Link href="/pricing" className="text-blue-600 font-medium">Pricing</Link>
                            <Link href="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
                            <Link href="/signup">
                                <Button>Get Started</Button>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Choose the perfect plan for your hiring needs. All plans include our core features with no hidden fees.
                    </p>
                    <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
                        <span className="px-4 py-2 text-sm font-medium text-gray-600">Monthly</span>
                        <span className="px-4 py-2 bg-white rounded-md text-sm font-medium text-gray-900 shadow-sm">
              Save 20% with Annual
            </span>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {plans.map((plan, index) => (
                            <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 shadow-xl scale-105' : 'border-gray-200'}`}>
                                {plan.popular && (
                                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                                        Most Popular
                                    </Badge>
                                )}
                                <CardHeader className="text-center pb-4">
                                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold">{plan.price}</span>
                                        <span className="text-gray-600">{plan.period}</span>
                                    </div>
                                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button
                                        className={`w-full mb-6 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                                        variant={plan.popular ? 'primary' : 'secondary'}
                                    >
                                        {plan.buttonText}
                                    </Button>

                                    <div className="space-y-3">
                                        {plan.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center">
                                                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                                <span className="text-sm text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                        {plan.limitations.map((limitation, limitationIndex) => (
                                            <div key={limitationIndex} className="flex items-center">
                                                <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                                                <span className="text-sm text-gray-500">{limitation}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            Frequently Asked Questions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {faqs.map((faq, index) => (
                                <div key={index}>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Ready to streamline your hiring process?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Join thousands of companies already using OfferStack
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/signup">
                            <Button size="lg" className="px-8">
                                Start Your Free Trial
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="px-8">
                                Contact Sales
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Pricing;
