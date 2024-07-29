"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Problem } from "@/utils/types/problem";
import { problems } from "@/utils/problems";

type TopbarProps = {
  problemPage?: boolean;
};

const Topbar = ({ problemPage }: any) => {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("logout success");
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const handleProfileClick = () => {
    router.push("/profile");
  };

  return (
    <div className="bg-black text-white px-4 py-2 flex justify-between items-center border">
      <div className="flex items-center">
        <span className="text-xl font-bold">tescode</span>
      </div>

      <div className="flex items-center space-x-4">
        <button
          className="flex items-center font-bold"
          onClick={handleProfileClick}
        >
          <span>profile</span>
        </button>

        <button className="font-bold" onClick={logout}>
          signout
        </button>
      </div>
    </div>
  );
};

export default Topbar;
