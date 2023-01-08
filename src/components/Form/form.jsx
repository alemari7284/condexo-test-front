import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Select from '@mui/material/Select'
import SearchBar from '../Search/searchbar'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import moment from 'moment/moment'
import { useNavigate } from 'react-router-dom'

export default function Form({
  searchLastName,
  setSearchLastName,
  setUsersList,
}) {
  const [getUsersClicked, setGetUsersClicked] = useState(false)
  let navigate = useNavigate()

  useEffect(() => {
    getUsersClicked &&
      document
        .getElementById('searchbar')
        .scrollIntoView({ behavior: 'smooth' })
  }, [getUsersClicked])

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
    residenza: yup.string().required(),
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
    setTimeout(() => {
      let button = document.getElementsByClassName('signupbutton')[0]
      button.classList.remove('animate')
    }, 1000)
  }

  const onSubmit = async (event) => {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        hometown,
        statocivile,
        taxcode,
        job,
        residenza,
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
        residenza,
      })
      let button = document.getElementsByClassName('signupbutton')[0]
      button.classList.add('animate')
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
      navigate('/getusers')
    } catch (error) {
      console.log(error.message)
      return error
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
        <Grid container spacing={1}>
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
            <FormControl fullWidth>
              <InputLabel id="statocivile">Civil status</InputLabel>
              <Select
                labelId="statocivile"
                id="statocivile"
                label="Civil status"
                fullWidth
                displayEmpty
                defaultValue={''}
                {...register('statocivile')}
              >
                {opts.map((o) => {
                  return <MenuItem value={o}>{o}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Grid>
          <p className={'error'}>{errors.statocivile?.message}</p>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="residenza"
              label="Living in"
              type="text"
              id="residenza"
              {...register('residenza')}
            />
          </Grid>
          <p className={'error'}>{errors.residenza?.message}</p>
        </Grid>
        <Grid container style={{ marginTop: '25px' }}>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="signupbutton"
            >
              Sign up
            </Button>
            <Button
              style={{ marginTop: '10px' }}
              fullWidth
              variant="contained"
              color="success"
              onClick={() => {
                setGetUsersClicked(!getUsersClicked)
              }}
            >
              Get User
            </Button>
          </Grid>
        </Grid>
      </form>

      {getUsersClicked && (
        <SearchBar getUsers={getUsers} setSearchLastName={setSearchLastName} />
      )}
    </div>
  )
}
