import React from 'react'
import Nav from './components/Nav'

import Blogs from './components/Blogs'
import BlogDetail from './components/BlogDetail'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Footer  from './components/Footer'
import './App.css'
const App = () => {
  return (
    <div>
      <Nav />
      
      <Router>
          <Routes>
              <Route exact path="/" element={<Blogs />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path="/blogdetail/:id" element={<BlogDetail />} />
          </Routes>
   

      </Router>
      <Footer />
    </div>
  )
}

export default App