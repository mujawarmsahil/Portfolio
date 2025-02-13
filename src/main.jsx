import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route , RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import './index.css'
import Profile from './Components/Profile.jsx'
import Handles from './Components/Handles.jsx'
import Projects from './Components/Projects.jsx'
import Education from './Components/Education.jsx'
import Contact from './Components/Contact.jsx'
import Skills from './Components/Skills.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Profile/>}/>
      <Route path="handles" element={<Handles/>}/>
      <Route path="projects" element={<Projects/>}/>
      <Route path="education" element={<Education/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="skill" element={<Skills/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
