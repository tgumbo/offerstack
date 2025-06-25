'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {MENU_MEGA} from '@/config/menu.config';
import {cn} from '@/lib/utils';
import {useMenu} from '@/hooks/use-menu';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';

export function MegaMenu() {
    const pathname = usePathname();
    const {isActive, hasActiveChild} = useMenu(pathname);
    const homeItem = MENU_MEGA[0];
    const offerItem = MENU_MEGA[1];
    const templateItem = MENU_MEGA[2];
    const settingsItem = MENU_MEGA[3];

    const linkClass = `
    text-sm text-secondary-foreground font-medium rounded-none px-0 border-b border-transparent
    hover:text-primary hover:bg-transparent 
    focus:text-primary focus:bg-transparent 
    data-[active=true]:text-mono data-[active=true]:bg-transparent data-[active=true]:border-mono
    data-[state=open]:text-mono data-[state=open]:bg-transparent
  `;

    return (
        <NavigationMenu>
            <NavigationMenuList className="gap-7.5">
                {/* Home Item */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link
                            href={homeItem.path || '/'}
                            className={cn(linkClass)}
                            data-active={isActive(homeItem.path) || undefined}
                        >
                            {homeItem.title}
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Offers Item */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link
                            href={offerItem.path || '/'}
                            className={cn(linkClass)}
                            data-active={isActive(offerItem.path) || undefined}
                        >
                            {offerItem.title}
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Templates Item */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link
                            href={templateItem.path || '/'}
                            className={cn(linkClass)}
                            data-active={isActive(templateItem.path) || undefined}
                        >
                            {templateItem.title}
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Settings Item */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link
                            href={settingsItem.path || '/'}
                            className={cn(linkClass)}
                            data-active={isActive(settingsItem.path) || undefined}
                        >
                            {settingsItem.title}
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>


            </NavigationMenuList>
        </NavigationMenu>
    );
}
