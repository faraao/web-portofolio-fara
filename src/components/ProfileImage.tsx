import React from 'react';

export const ProfileImage = () => (
  <img 
    src="https://ais-dev-z6m4gww2ppp57nv65h7irx-227574289085.asia-east1.run.app/api/attachments/profile.png" 
    alt="Fariida Qurrota Aini" 
    className="w-full h-full object-cover transition-all duration-700"
    referrerPolicy="no-referrer"
    onError={(e) => {
      e.currentTarget.onerror = null; // Prevent infinite loop if fallback image also fails
      e.currentTarget.src = "/images/fara.png";
    }}
  />
);