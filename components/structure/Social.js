import * as React from 'react';
import {
  Box,
  Button,
  Chip,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Stack,
  Select,
  TextField,
  useTheme,
} from '@mui/material/styles';
import 'react-datepicker/dist/react-datepicker.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Music',
  'Dancing',
  'Reading',
  'Travelling',
  'Gisting',
  'Acting',
  'Football',
  'Walking',
  'Table Tennis',
  'Movie',
  'Chatting',
  'Internet Surfing',
  'Partying',
  'Snooker',
  'Swimming',
  'Sleeping',
];

function getStyles(name, hobbies, theme) {
  return {
    fontWeight:
      hobbies.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function AddressForm() {
  // Social Checkbox
  const theme = useTheme();
  const [hobbies, sethobbies] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    sethobbies(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
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
        <Grid id="error" item xs={12} sm={12}>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="error">
              Error
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="nickName"
            name="nickName"
            label="Nickname"
            fullWidth
            autoComplete="nick-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="email"
            type="email"
            name="email"
            label="Email Address "
            fullWidth
            autoComplete="email-address"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="phoneNumber"
            type="number"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            autoComplete="phone-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="facebookId"
            name="facebookId"
            label="Facebook Id"
            fullWidth
            autoComplete="facebook-id"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ m: '2rem 3rem 1rem 3rem', minWidth: '25rem' }}>
            <InputLabel id="demo-multiple-chip-label">Hobbies</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={hobbies}
              onChange={handleChange}
              input={
                <OutlinedInput id="select-multiple-chip" label="Hobbies" />
              }
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, hobbies, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
