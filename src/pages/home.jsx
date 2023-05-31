import { googleLogout } from "@react-oauth/google";
import React, { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    document.title = "Homepage || Trim";
  });

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <h1>Homepage</h1>
      <button
        className="bg-danger_border px-[12px] py-[5px] rounded-[8px]"
        onClick={logout}
      >
        Sign out
      </button>
    </div>
  );
}

export default HomePage;
