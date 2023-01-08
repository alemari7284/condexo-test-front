import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/home'
import GetUsers from './components/GetUsers/getUsers'
import { useState, useEffect } from 'react'

function App() {
  const [searchLastName, setSearchLastName] = useState('')
  const [usersList, setUsersList] = useState([])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            searchLastName={searchLastName}
            usersList={usersList}
            setSearchLastName={setSearchLastName}
            setUsersList={setUsersList}
          />
        }
      />
      <Route
        path="/getusers"
        element={<GetUsers usersList={usersList} setUsersList={setUsersList} />}
      />
    </Routes>
  )
}

export default App
