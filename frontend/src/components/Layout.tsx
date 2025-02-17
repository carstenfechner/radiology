// src/components/Layout.tsx
import { Link } from 'react-router-dom'
import { UserButton } from '@clerk/clerk-react'
import './layout.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-wrapper">
      {/* Navigation */}
      <nav className="navbar">
        <Link to="/library" className="nav-link">Library</Link>
        <Link to="/quiz" className="nav-link">Quiz</Link>
        <Link to="/search" className="nav-link">Search</Link>
        <Link to="/settings" className="nav-link">Settings</Link>
        <UserButton />
      </nav>

      {/* Page Content */}
      <main className="main-content">
        {children}
      </main>
    </div>
  )
}
