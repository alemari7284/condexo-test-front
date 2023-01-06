import React from 'react'
import Form from '../Form/form'

export default function Home({
  searchLastName,
  usersList,
  setSearchLastName,
  setUsersList,
}) {
  return (
    <Form
      searchLastName={searchLastName}
      usersList={usersList}
      setSearchLastName={setSearchLastName}
      setUsersList={setUsersList}
    />
  )
}
