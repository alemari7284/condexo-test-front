import React from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'

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
    <div className="edited">
      <TextField
        id={title}
        label={title}
        name={title}
        type={type}
        InputLabelProps={{ shrink: true }}
        defaultValue={value}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={saveChanges}>
        Save changes
      </Button>
      <Button variant="outlined" onClick={handleCancel}>
        Cancel
      </Button>
    </div>
  )
}
