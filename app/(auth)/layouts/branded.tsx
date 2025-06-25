import {ReactNode} from 'react';
import {Card, CardContent} from '@/components/ui/card';

export function BrandedLayout({children}: { children: ReactNode }) {

    const benefits = [
        "Get matched with jobs that fit your skills perfectly",
        "Receive personalized job recommendations daily",
        "Stand out with an AI-optimized profile",
        "Track your application progress in real-time",
        "Connect directly with hiring managers"
    ]
    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left side - Benefits */}
            <div
                className="hidden lg:flex lg:flex-col justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8">
                <div className="max-w-md mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-primary mb-2">OfferStack</h1>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">This a test Title</h2>
                        <p className="text-muted-foreground text-lg">This is a test subtitle</p>
                    </div>

                    <div className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"/>
                                <p className="text-foreground">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right side - Form */}
            <div className="flex items-center justify-center p-8 bg-background">
                <Card className="w-full max-w-md">
                    <CardContent className="p-8">
                        {children}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
