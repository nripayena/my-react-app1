import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer/Footer'
export default function Layout() {
  return (
     <>
      <div className="bg-fixed bg-cover bg-center h-full flex flex-col min-h-screen " style={{ backgroundImage: 'url(public/StyleBg/bg3.jpg)'}}>
         <Header/>
         <main className="flex-grow">
            <Outlet /> {/* Nested routes will be rendered here */}
         </main>

         <Footer />
      </div>
     </>
  )
}
