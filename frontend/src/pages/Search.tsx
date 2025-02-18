// src/pages/Search.tsx
import { useUser } from '@clerk/clerk-react'

export default function Search() {
  const { isSignedIn, user } = useUser()

  if (!isSignedIn) {
    return <div>Access Denied</div> // or redirect
  }

  return <div>Search</div>
}