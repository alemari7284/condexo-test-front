import React from 'react'
import { TextField } from '@mui/material'

export default function Edited({
  id,
  title,
  value,
  type,
  handleChange,
  saveChanges,
  handleCancel,
}) {
  return (
    <div>
      <TextField
        id={title}
        label={title}
        name={title}
        type={type}
        InputLabelProps={{ shrink: true }}
        defaultValue={value}
        onChange={handleChange}
      />
      <button onClick={saveChanges}>Save changes</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  )
}
