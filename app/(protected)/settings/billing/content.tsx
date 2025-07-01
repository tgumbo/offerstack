'use client';

import {Details, Invoicing, Plan} from './components';

export function AccountBasicContent() {

    return (
        <div className="grid grid-cols-1 gap-5 lg:gap-7.5">

            <div className="flex flex-col gap-5 lg:gap-7.5">
                <Plan/>
                <Details/>
                <Invoicing/>
            </div>

        </div>
    );
}
