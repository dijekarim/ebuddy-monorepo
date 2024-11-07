"use client"

import { useAuth } from '@/components/context/authContext';
import MainPage from '@/components/main/MainPage';
import ButtonAppBar from '@/components/shared/AppBar';
import { auth } from '@/config/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Home = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [user, router])

  // Render home page content
  if (!user) return null; // Prevent rendering during redirect

  return (
    <>
      <ButtonAppBar />
      <MainPage />
    </>
  );
}

export default Home;