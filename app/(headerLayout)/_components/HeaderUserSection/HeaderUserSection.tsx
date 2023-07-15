"use client";

import steam from "@/steamAuth";
import axios from "axios";

const HeaderUserSection = () => {
  // TODO: Login;

  const onClick = () => {
    axios.get('api/steam-login');
  };

  return (
    <div onClick={onClick} className="rounded-full w-12 h-12 bg-red-700" />
  );
};

export default HeaderUserSection;
