'use client';

import { Fragment } from 'react';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/partials/common/toolbar';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/common/container';
import {AccountBasicContent} from "@/app/(protected)/settings/billing/content";

export default function AccountBasicPage() {

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

          </Toolbar>
        </Container>
      <Container>
        <AccountBasicContent />
      </Container>
    </Fragment>
  );
}
