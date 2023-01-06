import React from 'react'
import { useState, useEffect } from 'react'
import Editable from './editable'
import TextField from '@mui/material/TextField'
import Edited from './edited'
import axios from 'axios'

export default function ListItem({
  value,
  index,
  cl,
  title,
  usersList,
  setUsersList,
}) {
  const [edit, setEdit] = useState(false)
  const [object, setObject] = useState({})

  useEffect(() => {
    Object.keys(object).length > 0 && console.log(object)
  }, [object])

  function handleEdit(e) {
    console.log(index)
    console.log(title)
    setEdit(!edit)
  }

  function handleChange(e) {
    setObject({ ...object, [e.target.name]: e.target.value })
  }

  function handleCancel() {
    setEdit(!edit)
  }

  async function saveChanges() {
    let updatedDocument = Object.assign(usersList[index])
    for (let [k, v] of Object.entries(object)) {
      updatedDocument[k] = v
    }
    console.log('updatedDocument', updatedDocument)
    try {
      const result = await axios.put(
        'http://localhost:3001/update',
        updatedDocument,
      )
      console.log(result)
      const list = await axios.post('http://localhost:3001/search', {})
      setUsersList(list.data)
    } catch (error) {
      console.log(error.message)
    }

    setEdit(!edit)
  }

  return (
    <li className={cl}>
      {!edit ? (
        <Editable
          value={value}
          index={index}
          handleEdit={handleEdit}
          title={title}
        ></Editable>
      ) : (
        <React.Fragment>
          <Edited
            value={value}
            title={title}
            type={title == 'dateofbirth' ? 'date' : 'text'}
            handleChange={handleChange}
            handleCancel={handleCancel}
            saveChanges={saveChanges}
          ></Edited>
        </React.Fragment>
      )}
    </li>
  )
}
