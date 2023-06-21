import React from 'react'

export const metadata = {
  title: {
    absolute: 'Dashboard'
  },
  description: 'This is the dashboard page',
  robots: {
    index: false,
    nocache: true,
  }
}

type Props = {}

export default function Dashbord({}: Props) {
  return (
    <div>Dashbord</div>
  )
}