'use client'
// import { getSession } from '@/store/slices/userSlice';
import { store } from '@/store/store';
import { useEffect } from 'react';

export function AuthSession({ children }: { children: React.ReactNode }) {

  // update session & set token
  // useEffect(() => {
  //   'use service'
  //   store.dispatch(getSession());
  // }, []);
  
  return (
    <AuthSession>{children}</AuthSession>
  );
}