import React from "react"
import NavBar from "../components/Navbar";

const DefaultLayout = ({children}) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default DefaultLayout
