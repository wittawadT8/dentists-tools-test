import { ROUTER } from '@/utils/constant'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: {
    absolute: "About us",
  },
  description: "This is the about",
  keywords: ['Next.js', 'React', 'JavaScript'],
  alternates: {
    canonical: ROUTER.ABOUT_US,
    languages: {
      'th-TH': `/th${ROUTER.ABOUT_US}`,
      'de-DE': '/de-DE',
    }
  },
  openGraph: {
    images: '/og-image.png',
  },

}


export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const paths = await res.json();

  return {
    paths,
    fallback: false,
  };
}

type Props = {}

export default function page({}: Props) {
  return (
    <div>page</div>
  )
}