import React from 'react'
import { useState, useEffect } from 'react'
import ListItem from './listItem'

export default function List({ usersList, setUsersList }) {
  return (
    <div style={{ textAlign: 'left' }}>
      {usersList?.length > 0 &&
        usersList.map((user, i) => {
          const {
            firstName,
            lastName,
            email,
            dateofbirth,
            hometown,
            statocivile,
            taxcode,
            job,
          } = user
          return (
            <div>
              <h3 style={{ backgroundColor: 'lightblue', borderRadius: '5px' }}>
                #{i + 1}
              </h3>
              <ul
                style={{
                  listStyleType: 'disclosure-closed',
                  textAlign: 'left',
                }}
                key={i}
                id={i}
              >
                <React.Fragment>
                  <ListItem
                    value={firstName}
                    index={i}
                    cl={'editable'}
                    title={'firstName'}
                    usersList={usersList}
                    setUsersList={setUsersList}
                  ></ListItem>
                  <ListItem
                    value={lastName}
                    index={i}
                    cl={'editable'}
                    title={'lastName'}
                    usersList={usersList}
                    setUsersList={setUsersList}
                  ></ListItem>
                  <ListItem
                    value={email}
                    index={i}
                    cl={'editable'}
                    title={'email'}
                    usersList={usersList}
                    setUsersList={setUsersList}
                  ></ListItem>
                  <ListItem
                    value={dateofbirth}
                    index={i}
                    cl={'editable'}
                    title={'dateofbirth'}
                    usersList={usersList}
                    setUsersList={setUsersList}
                  ></ListItem>
                  <ListItem
                    value={hometown}
                    index={i}
                    cl={'editable'}
                    title={'hometown'}
                    usersList={usersList}
                    setUsersList={setUsersList}
                  ></ListItem>
                  <ListItem
                    value={statocivile}
                    index={i}
                    cl={'editable'}
                    title={'statocivile'}
                    usersList={usersList}
                    setUsersList={setUsersList}
                  ></ListItem>
                  <ListItem
                    value={taxcode}
                    index={i}
                    cl={'editable'}
                    title={'taxcode'}
                    usersList={usersList}
                    setUsersList={setUsersList}
                  ></ListItem>
                  <ListItem
                    value={job}
                    index={i}
                    cl={'editable'}
                    title={'job'}
                    usersList={usersList}
                    setUsersList={setUsersList}
                  ></ListItem>
                </React.Fragment>
              </ul>
            </div>
          )
        })}
    </div>
  )
}
