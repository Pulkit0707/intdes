import React from 'react'
import Header from './_components/Header'

function DashboardLayout({children}) {
  return (
    <div>
        <Header/>
        <div className='pt-20 px-10 md:px-20 lg:px-40xl:px-40'>
      {children}
      </div>
    </div>
  )
}

export default DashboardLayout
