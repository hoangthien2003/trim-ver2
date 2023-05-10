import React from "react";

function CardLayout({ children }) {
  return (
    <div className="h-screen bg-background flex items-center justify-center">
      <div
        className="px-[7em] pt-[2.7em] pb-[2em] bg-white rounded-[18px] shadow-xl
      flex items-center flex-col"
      >
        {children}
      </div>
    </div>
  );
}

export default CardLayout;
