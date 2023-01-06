import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

export default function SearchBar({ setSearchLastName, getUsers }) {
  return (
    <div id="searchbar">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h4>CERCA LO STRONZO</h4>
          <TextField
            required
            fullWidth
            id="searchLastName"
            label="Last Name"
            name="searchLastName"
            type={'text'}
            onChange={(e) => setSearchLastName(e.target.value)}
          />
          <button onClick={getUsers}>Search</button>
        </Grid>
      </Grid>
    </div>
  )
}
