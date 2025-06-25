'use client';

import {ReactNode, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {useSession} from 'next-auth/react';
import {ScreenLoader} from '@/components/common/screen-loader';
import {AppLayout} from "@/layout/AppLayout";

export default function ProtectedLayout({
                                            children,
                                        }: {
    children: ReactNode;
}) {
    const {data: session, status} = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/sign-in');
        }
    }, [status, router]);

    if (status === 'loading') {
        return <ScreenLoader/>;
    }

    return session ? <AppLayout>{children}</AppLayout> : null;
}
