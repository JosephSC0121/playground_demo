import SideBar from '../components/Sidebar'
import BottomActionsCard from '../components/Card'
import React from 'react'
function MainPage(): JSX.Element {
  return (
    <div className="bg-primary flex flex-col h-screen">
      <SideBar />
      <BottomActionsCard />
    </div>
  )
}
export default MainPage
