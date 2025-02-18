// src/pages/Quiz.tsx
import { useUser } from '@clerk/clerk-react'

export default function Quiz() {
  const { isSignedIn, user } = useUser()

  if (!isSignedIn) {
    return <div>Access Denied</div> // or redirect
  }

  return <div>Quiz</div>
}