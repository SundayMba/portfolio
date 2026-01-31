import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import BookCall from './pages/BookCall'

function App() {
  return (
    <div className="bg-aurora min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookCall />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
