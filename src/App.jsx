import { Typography } from '@mui/material'
import './App.css'
import Layout from './layout/Layout'
import Main from './pages/Main'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'

function App() {


  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
