import * as React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Link,
  Toolbar,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import Personal from '../components/structure/Personal';
import Social from '../components/structure/Social';
import School from '../components/structure/School';

const steps = ['Personal', 'Social', 'School'];
var user = {},
  userHobbies = [];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Personal />;
    case 1:
      return <Social />;
    case 2:
      return <School />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Upload({ dept, port, deptName }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = async () => {
    if (activeStep == 0) {
      let firstName = document.getElementById('firstName').value.trim(),
        lastName = document.getElementById('lastName').value.trim(),
        address = document.getElementById('address').value.trim(),
        city = document.getElementById('city').value.trim(),
        state = document.getElementById('state').value.trim(),
        country = document.getElementById('country').value.trim();
      if (
        firstName == '' ||
        lastName == '' ||
        address == '' ||
        city == '' ||
        state == '' ||
        country == ''
      ) {
        setActiveStep(activeStep);
        document.getElementById('error').style.display = 'block';
      } else {
        let middleName = document.getElementById('middleName').value.trim(),
          date = document.getElementById('date').value.trim(),
          gender = document
            .getElementsByClassName(
              'MuiSelect-nativeInput css-yf8vq0-MuiSelect-nativeInput'
            )[0]
            .value.trim(),
          marital = document
            .getElementsByClassName(
              'MuiSelect-nativeInput css-yf8vq0-MuiSelect-nativeInput'
            )[1]
            .value.trim(),
          blood = document
            .getElementsByClassName(
              'MuiSelect-nativeInput css-yf8vq0-MuiSelect-nativeInput'
            )[2]
            .value.trim(),
          genotype = document
            .getElementsByClassName(
              'MuiSelect-nativeInput css-yf8vq0-MuiSelect-nativeInput'
            )[3]
            .value.trim();
        user['firstName'] = firstName;
        user['lastName'] = lastName;
        user['middleName'] = middleName;
        user['address'] = address;
        user['date'] = date;
        user['gender'] = gender;
        user['marital'] = marital;
        user['blood'] = blood;
        user['genotype'] = genotype;
        user['city'] = city;
        user['state'] = state;
        user['country'] = country;
        setActiveStep(activeStep + 1);
      }
    } else if (activeStep == 1) {
      let nickName = document.getElementById('nickName').value.trim(),
        email = document.getElementById('email').value.trim(),
        phoneNumber = document.getElementById('phoneNumber').value.trim();
      if (
        nickName == '' ||
        email.endsWith('@gmail.com') != true ||
        phoneNumber == ''
      ) {
        setActiveStep(activeStep);
        document.getElementById('error').style.display = 'block';
      } else {
        let facebookId = document.getElementById('facebookId').value.trim(),
          hobbies = document.getElementsByClassName(
            'MuiChip-label MuiChip-labelMedium css-6od3lo-MuiChip-label'
          );
        for (let hobby = 0; hobby <= hobbies.length - 1; hobby++) {
          userHobbies.push(hobbies[hobby].innerHTML.trim());
        }

        user['nickName'] = nickName;
        user['email'] = email;
        user['phoneNumber'] = phoneNumber;
        user['facebookId'] = facebookId;
        user['hobbies'] = userHobbies;
        setActiveStep(activeStep + 1);
      }
    } else if (activeStep == 2) {
      let studentId = document.getElementById('studentId').value.trim(),
        matricNumber = document.getElementById('matricNumber').value.trim(),
        userImage = document.getElementsByTagName('img')[0].src.trim();
      if (
        studentId == '' ||
        matricNumber == '' ||
        userImage ==
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDw8PDxAPEA8PDw8PDw8PFQ8QDw8NFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIHA//EACIQAQEBAAIBAwUBAAAAAAAAAAABEUHw0YGRsVFhcaHBEv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDqIIAioAAAAAigILUAAAFQAABUUAEBdVAFVDQUQBqKgCqgDUa1iLAb9xlAeQqAIoCAAAAIqAfUDAAAVFQAAAFBFRQAgAACiKCiANaIA0ustAqADCKgAACKAgAAAAJQAAUAEFQAFBBTQIAAaAAAKIoCooEaZlAaVlQZABAABUARQEAARQEUAIAAAAAAigBAAE1QQAFEUBUNBo1AF7wIAoAIAAAAAAACCgIAAAAAAAAeogKAAhpQPCy/hIee/IKJigiooGqgCiANAAUEAAgAAAAKgACKABgILUAAAIEAEJe8AqKAgAKIApiALBFADvCA2AAACGKAgqYAigIKAiooIKYCQVAAUEFQAAAAAAEFQAAAWAGiANgAAAAAItAEVAVFQFQADBQQAAAAwAEUBBcLAQVAAAQVAFTFBMF9gGgAAAAAEUAAAoAIoAIoCYoYAiqCAYCUq0BAXPnARGkoIKgAYd5BFMLABe8oDQgAABqoAAAQAAABUAUTVAAAAACpoKtY739NWgXweWePZZfyBcXZ9/6lXewBKbAACgCAL6AgAgCiKAIoCoAogCpoAAApENBQQGkQBdBAKU7gBKrPCgaaAL/o3735QAEwAAA0QBQAAAVKALAAFQBRAAs4ABQAxAA1UAUAAAEJeAAAAQAXEgAAAAA//9k='
      ) {
        setActiveStep(activeStep);
        document.getElementById('error').style.display = 'block';
      } else {
        user['studentId'] = studentId;
        user['matricNumber'] = matricNumber;
        user['userImage'] = userImage;
        const result = await fetch(
          `http://localhost:${port}/api/upload/?firstName=${user['firstName']}&lastName=${user['lastName']}&middleName=${user['middleName']}&address=${user['address']}&date=${user['date']}&gender=${user['gender']}&marital=${user['marital']}&blood=${user['blood']}&genotype=${user['genotype']}&city=${user['city']}&state=${user['state']}&country=${user['country']}&nickName=${user['nickName']}&email=${user['email']}&phoneNumber=${user['phoneNumber']}&facebookId=${user['facebookId']}&hobbies=${user['hobbies']}&studentId=${user['studentId']}&matricNumber=${user['matricNumber']}&userImage=${user['userImage']}`
        );
        setActiveStep(activeStep + 1);
      }
      // }
    } else {
      alert('error');
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <h2>{deptName}</h2>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Upload Your Data
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h4" gutterBottom>
                  Successful!.
                </Typography>
                <Typography variant="subtitle1">
                  Your information has been successfully uploaded. Thank You for
                  your patience.
                </Typography>
                <br />
                <Typography variant="subtitle2" gutterBottom>
                  You can check the home page to see your information{' '}
                  <Link href="/home">here.</Link>
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 7, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 7, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Upload' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          {dept} {new Date().getFullYear()}/{new Date().getFullYear() + 1}
          {'.'}
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      dept: process.env.DEPT,
      port: process.env.PORT,
      deptName: process.env.DEPTNAME,
    },
  };
}
