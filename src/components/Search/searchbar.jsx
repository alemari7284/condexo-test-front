import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar({ setSearchLastName, getUsers }) {
  return (
    <div id="searchbar">
      <Grid container spacing={1}>
        <Grid style={{ textAlign: 'center' }} item xs={12}>
          <h4>SEARCH USER</h4>
          <TextField
            required
            fullWidth
            id="searchLastName"
            label="Last Name"
            name="searchLastName"
            type={'text'}
            onChange={(e) => setSearchLastName(e.target.value)}
          />
          <Button className="searchBar" onClick={getUsers}>
            <span className="searchSpan">Search</span>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
