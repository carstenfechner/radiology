// src/pages/Settings.tsx
import { useUser } from '@clerk/clerk-react'

export default function Settings() {
  const { isSignedIn, user } = useUser()

  if (!isSignedIn) {
    return <div>Access Denied</div> // or redirect
  }

  return <div>Settings</div>
}