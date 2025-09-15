import './App.css'
import SiteNavbar from './components/SiteNavbar'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import FSApp from './pages/FSApp'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <SiteNavbar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fsapp" element={<FSApp />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
