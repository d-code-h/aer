import * as React from 'react';
import { useState } from 'react';
import {
  Button,
  FormControl,
  Grid,
  TextField,
  InputLabel,
  MenuItem,
  Stack,
  Select,
} from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Personal() {
  const [startDate, setStartDate] = useState(new Date('06 05 2000'));
  const [gender, setGender] = React.useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const [marital, setMarital] = React.useState('');

  const handleMaritalChange = (event) => {
    setMarital(event.target.value);
  };
  const [blood, setBlood] = React.useState('');

  const handleBloodChange = (event) => {
    setBlood(event.target.value);
  };
  const [genotype, setGenotype] = React.useState('');

  const handleGenotypeChange = (event) => {
    setGenotype(event.target.value);
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid id="error" item xs={12} sm={12}>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="error">
              <h3>ERROR: </h3>
              <p>Fill up all required(*) fields.</p>
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="first-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="first-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="middleName"
            name="middleName"
            label="Middle name"
            fullWidth
            autoComplete="middle-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address line "
            fullWidth
            autoComplete="address"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl
            sx={{
              m: '2.5rem 0 0 0',
              minWidth: 100,
            }}
          >
            <DatePicker
              id="date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </FormControl>
        </Grid>
        <Grid sx={{ textAlign: 'center' }} item xs={12} sm={6}>
          <Grid sx={{ display: 'flex' }} item xs={12} sm={12}>
            <Grid item xs={12} sm={6}>
              <FormControl id="gender" sx={{ m: '1rem 0rem', width: '7rem' }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={gender}
                  required
                  onChange={handleGenderChange}
                  autoWidth
                  label="Gender"
                >
                  <MenuItem value={'Male'}>Male</MenuItem>
                  <MenuItem value={'Female'}>Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <br />
            <Grid item xs={12} sm={6}>
              <FormControl
                id="marital"
                sx={{ m: '1rem 0rem', minWidth: '7rem' }}
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Marital Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={marital}
                  onChange={handleMaritalChange}
                  autoWidth
                  label="Marital Status"
                >
                  <MenuItem value={'Single'}>Single</MenuItem>
                  <MenuItem value={'Married'}>Married</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid sx={{ display: 'flex' }} item xs={12} sm={12}>
            <Grid item xs={6} sm={6}>
              <FormControl id="blood" sx={{ m: '1rem 0rem', width: '7rem' }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Blood Group
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={blood}
                  required
                  onChange={handleBloodChange}
                  autoWidth
                  label="Blood Group"
                >
                  <MenuItem value="0 Positve">0+</MenuItem>
                  <MenuItem value="0 Negative">0-</MenuItem>
                  <MenuItem value="A Positve">A+</MenuItem>
                  <MenuItem value="A Negative">A-</MenuItem>
                  <MenuItem value="B Positive">B+</MenuItem>
                  <MenuItem value="B Negative">B-</MenuItem>
                  <MenuItem value="AB Positive">AB+</MenuItem>
                  <MenuItem value="AB Negative">AB-</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6}>
              <FormControl id="genotype" sx={{ m: '1rem 0rem', width: '7rem' }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Genotype
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={genotype}
                  onChange={handleGenotypeChange}
                  autoWidth
                  label="Genotype"
                >
                  <MenuItem value={'AA'}>AA</MenuItem>
                  <MenuItem value={'AS'}>AS</MenuItem>
                  <MenuItem value={'SS'}>SS</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="city"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="state"
            name="state"
            label="State of Origin"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="country"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
