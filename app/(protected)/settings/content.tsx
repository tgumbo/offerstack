'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import {
  Bell,
  FileText,
  IdCard,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IOptionsItems, Options } from './components';

export function AccountGetStartedContent() {
  const items: IOptionsItems = [
    {
      icon: IdCard,
      title: 'Company Profile',
      desc: "We're open to partnerships, guest posts, promo banners and more.",
      path: '/settings/company-profile',
    },
    {
      icon: ShieldCheck,
      title: 'Login & Security',
      desc: 'Safeguarding your information with strong authentication measures.',
      path: '/settings/security',
    },
    {
      icon: FileText,
      title: 'Billing & Payments',
      desc: 'Simplify payments today with secure, user-friendly transaction processes.',
      path: 'settings/billing',
    },
    {
      icon: Bell,
      title: 'Notifications',
      desc: 'Keep updated with important notices and event reminders.',
      path: '/settings/notifications',
    },
    {
      icon: Users,
      title: 'Members, Teams & Roles',
      desc: 'Efficient management of members, teams, and roles.',
      path: '/settings/team',
    },
  ];

  return (
    <Fragment>
      <Options items={items} dropdown={true} />
      <div className="flex grow justify-center pt-5 lg:pt-7.5">
        <Button mode="link" underlined="dashed" asChild>
          <Link href="/dashboard">Back to Dashboard</Link>
        </Button>
      </div>
    </Fragment>
  );
}
