import React from 'react'

export default function Editable({ value, index, handleEdit, title }) {
  return (
    <React.Fragment>
      {value}
      <button
        onClick={(e) => {
          handleEdit(e, index, title)
        }}
        className={'editButton'}
      >
        edit
      </button>
    </React.Fragment>
  )
}
