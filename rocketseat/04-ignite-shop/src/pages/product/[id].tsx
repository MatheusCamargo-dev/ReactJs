import { useRouter } from 'next/router'
import React from 'react'

export default function product() {
  const { query } = useRouter();
  return (
    <div>product { query.id}</div>
  )
}
