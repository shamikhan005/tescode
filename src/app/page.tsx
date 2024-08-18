"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleCreateAccount = () => {
    router.push("/signup");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold">tescode</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-400 font-bold">
              enhance your problem-solving abilities with tescode
            </p>
            <div className="mt-8 space-x-4">
              <button
                className="bg-white text-black px-6 py-3  font-bold border-black"
                onClick={handleLogin}
              >
                login
              </button>
              <button
                className="bg-black text-white px-6 py-3  font-bold border"
                onClick={handleCreateAccount}
              >
                create account
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="image1.png"
              alt="image"
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-1/2 transform -translate-y-1/2 right-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
