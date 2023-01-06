import React from 'react'
import List from '../List/list'

export default function GetUsers({ usersList, setUsersList }) {
  return (
    <div>
      {usersList.length > 0 ? (
        <>
          <h1 style={{ textAlign: 'center' }}>Users found</h1>
          <List usersList={usersList} setUsersList={setUsersList} />
        </>
      ) : (
        <h1>No users found</h1>
      )}
    </div>
  )
}
