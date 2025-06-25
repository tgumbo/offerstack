'use client';

import {ReactNode, useEffect} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Download} from 'lucide-react';
import {useBodyClass} from '@/hooks/use-body-class';
import {useSettings} from '@/providers/settings-provider';
import {Button} from '@/components/ui/button';
import {Footer} from './components/footer';
import {Header} from './components/header';
import {Toolbar, ToolbarActions, ToolbarHeading} from './components/toolbar';

const AppLayout = ({children}: { children: ReactNode }) => {
    const {setOption} = useSettings();
    const pathname = usePathname();

    // Using the custom hook to set multiple CSS variables and class properties
    useBodyClass(`
    [--header-height-default:95px]
    data-[sticky-header=on]:[--header-height:60px]
    [--header-height:var(--header-height-default)]	
    [--header-height-mobile:70px]	
  `);

    useEffect(() => {
        setOption('layout', 'demo7');
    }, [setOption]);

    return (
        <>
            <div className="flex grow flex-col in-data-[sticky-header=on]:pt-(--header-height-default)">
                <Header/>

                <div className="grow" role="content">
                    {!pathname.includes('/public-profile/') &&
                        !pathname.includes('/user-management') &&
                        !pathname.includes('/dashboard') && (
                            <Toolbar>
                                <ToolbarHeading/>

                                <ToolbarActions>
                                    <Button variant="outline" asChild>
                                        <Link href={'/account/home/get-started'}>
                                            <Download/>
                                            Export
                                        </Link>
                                    </Button>

                                </ToolbarActions>
                            </Toolbar>
                        )}
                    {children}
                </div>

                <Footer/>
            </div>
        </>
    );
};

export {AppLayout};
