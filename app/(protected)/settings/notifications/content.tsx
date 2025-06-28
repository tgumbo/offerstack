
import { Channels,  OtherNotifications } from './components';

export function AccountNotificationsContent() {

  return (
    <div className="grid grid-cols-1 gap-5 lg:gap-7.5">

        <div className="flex flex-col gap-5 lg:gap-7.5">
          <Channels />
          <OtherNotifications />
    
      </div>

    </div>
  );
}
