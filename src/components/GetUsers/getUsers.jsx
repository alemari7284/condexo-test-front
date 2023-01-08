import React from 'react'
import List from '../List/list'

export default function GetUsers({ usersList, setUsersList }) {
  return (
    <div>
      {usersList.length > 0 ? (
        <div className="resultsList">
          <h1 className="resultTitle">Users found</h1>
          <List usersList={usersList} setUsersList={setUsersList} />
        </div>
      ) : (
        <h1 className="resultTitle">No users found</h1>
      )}
    </div>
  )
}
