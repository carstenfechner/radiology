import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import Layout from './components/Layout'

import Library from './pages/Library'
import Quiz from './pages/Quiz'
import Search from './pages/Search'
import Settings from './pages/Settings'

export default function App() {
  return (
    <Router>
      <SignedOut>
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
          <SignInButton mode="modal">Sign In / Register</SignInButton>
        </div>
      </SignedOut>

      <SignedIn>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/library" />} />
            <Route path="/library" element={<Library />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/search" element={<Search />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </SignedIn>
    </Router>
  )
}
