import React from 'react';

export const ProfileImage = () => (
  <img 
    src="https://ais-dev-z6m4gww2ppp57nv65h7irx-227574289085.asia-east1.run.app/api/attachments/profile.png" 
    alt="Fariida Qurrota Aini" 
    className="w-full h-full object-cover transition-all duration-700"
    referrerPolicy="no-referrer"
    onError={(e) => {
      // Fallback to picsum if attachment fails
      (e.target as HTMLImageElement).src = "https://picsum.photos/seed/fariida/800/1000";
    }}
  />
);
