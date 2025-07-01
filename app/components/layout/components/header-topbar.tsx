'use client';

import {UserDropdownMenu} from '@/partials/topbar/user-dropdown-menu';

const HeaderTopbar = () => {

    return (
        <div className="flex items-center flex-wrap gap-2 lg:gap-3.5">
            <div className="flex items-center gap-2.5 lg:gap-3.5">
                <div className="flex flex-col items-end pt-0.5">

                </div>

            </div>


            <UserDropdownMenu
                trigger={
                    <div
                        className="cursor-pointer size-[34px] rounded-full inline-flex items-center justify-center relative text-lg font-medium border border-input bg-muted">
                        S
                    </div>
                }
            />
        </div>
    )
};

export {HeaderTopbar};
