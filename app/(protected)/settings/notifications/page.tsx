'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/partials/common/toolbar';
import { useSettings } from '@/providers/settings-provider';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/common/container';
import { AccountNotificationsContent } from './content';

export default function AccountNotificationsPage() {
  const { settings } = useSettings();

  return (
    <Fragment>
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>
                Central Hub for Personal Customization
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <Button variant="outline">
                <Link href="#">Privacy Settings</Link>
              </Button>
            </ToolbarActions>
          </Toolbar>
        </Container>

      <Container>
        <AccountNotificationsContent />
      </Container>
    </Fragment>
  );
}
