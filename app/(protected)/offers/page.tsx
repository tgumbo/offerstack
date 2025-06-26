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
import {NetworkUserCardsTeamCrewContent} from "@/app/(protected)/offers/content";

export default function NetworkUserCardsTeamCrewPage() {

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
                <NetworkUserCardsTeamCrewContent />
            </Container>
        </Fragment>
    );
}
