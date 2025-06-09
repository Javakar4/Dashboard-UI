import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
// import FilterBar from './components/FilterBar'
import JobList from './components/Joblist'
import Header from './components/Header'

function App() {


  return (
    <>
      {/* <Navbar /> */}
      {/* <FilterBar /> */}
      <Header />
      <JobList />
    </>
  )
}

export default App
