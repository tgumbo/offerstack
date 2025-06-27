'use client';

import { Fragment } from 'react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Container } from '@/components/common/container';
import { Teams } from './components';
import {
    Toolbar,
    ToolbarActions,
    ToolbarDescription,
    ToolbarHeading,
    ToolbarPageTitle,
} from '@/partials/common/toolbar';
import { Button } from '@/components/ui/button';

export default function ProfileTeamsPage() {
  const image = (
    <img
      src={toAbsoluteUrl('/media/avatars/300-1.png')}
      className="rounded-full border-3 border-green-500 h-[100px] shrink-0"
      alt="image"
    />
  );

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
                            <Button variant="primary">New Offer</Button>
                        </ToolbarActions>
                    </Toolbar>
                </Container>
                
      <Container>
        <Teams />
      </Container>
    </Fragment>
  );
}
