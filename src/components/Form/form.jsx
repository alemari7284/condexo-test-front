import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { useState, useEffect } from 'react'
import AnimatedButton from '../AnimatedButton/animatedButton'
import Select from '@mui/material/Select'
import SearchBar from '../Search/searchbar'
import List from '../List/list'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import moment from 'moment/moment'

export default function SignUp() {
  const [getUsersClicked, setGetUsersClicked] = useState(false)
  const [searchLastName, setSearchLastName] = useState('')
  const [usersList, setUsersList] = useState([])

  useEffect(() => {
    getUsersClicked && document.getElementById('searchbar').scrollIntoView()
  }, [getUsersClicked])

  useEffect(() => {
    console.log('usersList', usersList)
  }, [usersList])

  const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    confirmpassword: yup
      .string()
      .required()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
    dateofbirth: yup.string().required(),
    hometown: yup.string().required(),
    taxcode: yup.string().min(16).required(),
    job: yup.string().required(),
    statocivile: yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  function reset() {
    const collection = document.getElementsByTagName('input')
    for (let el of collection) {
      el.value = ''
    }
  }

  const onSubmit = async (event) => {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        // dateofbirth,
        hometown,
        statocivile,
        taxcode,
        job,
      } = event

      let { dateofbirth } = event

      dateofbirth = moment(dateofbirth).format('D-MM-YYYY')

      await axios.post('http://localhost:3001/signup', {
        firstName,
        lastName,
        email,
        password,
        dateofbirth,
        hometown,
        statocivile,
        taxcode,
        job,
      })
      reset()
    } catch (error) {
      console.log(error.message)
    }
  }

  const opts = ['Celibe', 'Nubile', 'Sposato/a', 'Divorziato/a', 'Vedovo/a']

  async function getUsers() {
    try {
      const list = await axios.post('http://localhost:3001/search', {
        searchLastName,
      })
      setUsersList(list.data)
    } catch (error) {
      console.log(error.message)
    }
    reset()
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '2rem',
        maxWidth: '30rem',
      }}
    >
      <h1>Form di registrazione</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1} style={{ justifyContent: 'center' }}>
          <Grid item xs={12}>
            <TextField
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              type={'text'}
              {...register('firstName')}
            />
          </Grid>
          <p className="error">{errors.firstName?.message}</p>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              type={'text'}
              {...register('lastName')}
            />
          </Grid>
          <p className={'error'}>{errors.lastName?.message}</p>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type={'email'}
              {...register('email')}
            />
          </Grid>
          <p className={'error'}>{errors.email?.message}</p>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              {...register('password')}
            />
          </Grid>
          <p className={'error'}>{errors.password?.message}</p>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="confirmpassword"
              label="Confirm Password"
              type="password"
              id="comfirmpassword"
              {...register('confirmpassword')}
            />
          </Grid>
          <p className={'error'}>{errors.confirmpassword?.message}</p>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="dateofbirth"
              label="Date of Birth"
              type="date"
              id="dateofbirth"
              InputLabelProps={{ shrink: true }}
              {...register('dateofbirth')}
            />
          </Grid>
          <p className={'error'}>{errors.dateofbirth?.message}</p>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="hometown"
              label="Hometown"
              type="text"
              id="hometown"
              {...register('hometown')}
            />
          </Grid>
          <p className={'error'}>{errors.hometown?.message}</p>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="taxcode"
              label="Tax Code"
              type="text"
              id="taxcode"
              {...register('taxcode')}
            />
          </Grid>
          <p className={'error'}>{errors.taxcode?.message}</p>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="job"
              label="Job"
              type="text"
              id="job"
              {...register('job')}
            />
          </Grid>
          <p className={'error'}>{errors.job?.message}</p>
          <Grid item xs={12}>
            {/* <TextField
              required
              fullWidth
              name="statocivile"
              label="Stato Civile"
              type="text"
              id="statocivile"
              {...register('statocivile')}
            /> */}
            <InputLabel id="statocivile">Stato civile</InputLabel>
            <Select
              labelId="statocivile"
              id="statocivile"
              label="Stato civile"
              {...register('statocivile')}
            >
              <MenuItem value={''}>Seleziona</MenuItem>
              {opts.map((o) => {
                return <MenuItem value={o}>{o}</MenuItem>
              })}
            </Select>
          </Grid>
          <p className={'error'}>{errors.statocivile?.message}</p>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="residenza"
              label="Residenza"
              type="text"
              id="residenza"
              {...register('residenza')}
            />
          </Grid>
          <p className={'error'}>{errors.residenza?.message}</p>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              size={'small'}
              className="submit"
            >
              Sign Up
            </Button> */}
            <button
              // className="btn"
              type="submit"
              onClick={(e) => e.target.classList.add('animating')}
            >
              Sign up
            </button>
          </Grid>
        </Grid>
      </form>
      <button
        onClick={() => {
          setGetUsersClicked(!getUsersClicked)
        }}
      >
        Get User
      </button>
      {getUsersClicked && (
        <SearchBar getUsers={getUsers} setSearchLastName={setSearchLastName} />
      )}
      {usersList.length > 0 && (
        <List usersList={usersList} setUsersList={setUsersList} />
      )}
    </div>
  )
}
