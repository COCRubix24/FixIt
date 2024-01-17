import { useState } from 'react'
import './Dashboard.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Main />
    </div>
  )
}

export default Dashboard;