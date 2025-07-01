'use client';

import {Fragment, useState} from 'react';
import {Container} from '@/components/common/container';
import {Teams} from './components';
import {
    Toolbar,
    ToolbarActions,
    ToolbarDescription,
    ToolbarHeading,
    ToolbarPageTitle,
} from '@/partials/common/toolbar';
import {Button} from '@/components/ui/button';
import UserAddDialog from "@/app/(protected)/templates/components/user-add-dialog";

export default function ProfileTeamsPage() {
    const [inviteDialogOpen, setInviteDialogOpen] = useState(false);

    return (
        <Fragment>
            <Container>
                <Toolbar>
                    <ToolbarHeading>
                        <ToolbarPageTitle/>
                        <ToolbarDescription>
                            Central Hub for Personal Customization
                        </ToolbarDescription>
                    </ToolbarHeading>
                    <ToolbarActions>
                        <Button variant="primary"
                                onClick={() => {
                                    setInviteDialogOpen(true);
                                }}>New Offer</Button>
                    </ToolbarActions>
                </Toolbar>
            </Container>

            <Container>
                <Teams/>
            </Container>

            <UserAddDialog
                open={inviteDialogOpen}
                closeDialog={() => setInviteDialogOpen(false)}
            />
        </Fragment>
    );
}
