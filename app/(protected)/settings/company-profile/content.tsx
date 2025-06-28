'use client';

import {
  Branding,
  GeneralInfo,
} from './components';

export function AccountCompanyProfileContent() {

  return (
    <div className="grid grid-cols-1 gap-5 lg:gap-7.5">

        <div className="flex flex-col gap-5 lg:gap-7.5">
          <GeneralInfo />
          <Branding />
        </div>
    
    </div>
  );
}
