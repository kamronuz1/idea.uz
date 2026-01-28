import React from 'react'
import Header from './components/header'
import './index.css';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className=' bg-stone-100'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
