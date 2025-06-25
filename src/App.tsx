import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tutorials from './pages/Tutorials'
import Plans from './pages/Plans'
import Nutrition from './pages/Nutrition'
import Equipment from './pages/Equipment'
import About from './pages/About'
import Privacy from './pages/Privacy'
import ArticleDetail from './pages/ArticleDetail'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
