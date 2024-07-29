'use client';

import React, { useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const [buttonDisabled, setButtonDisabled] = useState(false)

  const [loading, setLoading] = useState(false)

  const onLogin = async () => {
    try {
      setLoading(true)
      const response = await axios.post('/api/users/login', user)
      console.log('login success', response.data)
      router.push('/problempage')
    } catch (error: any) {
      console.log('login failed');
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    }
    else {
      setButtonDisabled(true)
    }
  }, [user])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-black-800 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold text-white mb-4">{loading ? "processing" : "login"}</h1>
      <hr className="border-gray-600 mb-6" />

      <div className="mb-4">
        <label htmlFor="email" className="block"></label>
        <input
        id="email"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        placeholder="email"
        type="text" 
        className="mt-1 block w-full bg-black text-white border border-gray-600 shadow-sm py-2 px-3 focus:outline-none focus:border-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password"></label>
        <input 
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        placeholder="password"
        type="password"
        className="mt-1 block w-full bg-black text-white border border-gray-600 shadow-sm py-2 px-3 focus:outline-none focus:border-white"
        />
      </div>

      <button onClick={onLogin}
      className="w-full bg-white text-black font-bold py-2 px-4">login</button>

      <div className="mt-6 text-center text-sm text-gray-400">
        <span className="mr-1">don&apos;t have an account?</span>
        <Link href='/signup'>
          <span className="text-white cursor-pointer">signup</span>
        </Link>
      </div>
      </div>
    </div>
  )

}