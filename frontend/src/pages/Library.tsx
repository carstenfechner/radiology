// src/pages/Library.tsx
import { useUser } from '@clerk/clerk-react'

export default function Library() {
  const { isSignedIn, user } = useUser()

  if (!isSignedIn) {
    return <div>Access Denied</div> // or redirect
  }

  return <div>Radiology</div>
}
