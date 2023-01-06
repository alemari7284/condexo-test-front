import React from 'react'
import Button from '@mui/material/Button'

export default function Editable({ value, index, handleEdit, title }) {
  return (
    <React.Fragment>
      <span style={{ fontWeight: 'bold', marginRight: '12px' }}>{title}:</span>
      {value}
      <Button
        onClick={(e) => {
          handleEdit(e, index, title)
        }}
        className={'editButton'}
        variant="outlined"
      >
        edit
      </Button>
    </React.Fragment>
  )
}
