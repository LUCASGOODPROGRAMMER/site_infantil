import { Outlet } from "react-router-dom"

import BarNavigation from "../components/BarNavigation"



const Home = () => {
  return (
    <div className="container">
        <BarNavigation />
        <Outlet/>
    </div>
  )
}

export default Home