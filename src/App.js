import Form from './components/Form/form'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/home'
import GetUsers from './components/GetUsers/getUsers'
import { useState, useEffect } from 'react'

/*
 COSE RIMASTE:
 1 - Migliorare la responsiveness
 2 - Aggiungere l'animazione
 3 - Pulire il codice (così fa schifo)
*/

function App() {
  const [searchLastName, setSearchLastName] = useState('')
  const [usersList, setUsersList] = useState([])

  useEffect(() => {
    console.log('usersList', usersList)
  }, [usersList])

  useEffect(() => {
    console.log('searchLastName', searchLastName)
  }, [searchLastName])

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
