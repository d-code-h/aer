import * as React from 'react';
import { useState } from 'react';
import clientPromise from '../lib/mongodb';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PureModal from 'react-pure-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import 'react-image-gallery/styles/css/image-gallery.css';

const theme = createTheme();
var userValue;
const userData = {};

export default function Profiles({ users, header, dept, deptMessage, port }) {
  async function handleDelete(element) {
    const button = element.target.attributes['id'].value;
    await fetch(`http://localhost:${port}/api/delete/?deleteUser=${button}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    alert(
      'User with matric number ' + button + ' successfully removed from DB'
    );
  }

  users.map((singleUser) => {
    userData[singleUser._id] = singleUser;
  });
  const [modal, setModal] = useState(false);

  function handleModal(element) {
    userValue =
      element.target.parentElement.parentElement.parentElement.attributes['id']
        .value;
    // console
    setModal(true);
  }
  return (
    <div>
      <div>
        {users.map(
          (userView) =>
            userView._id == userValue && (
              <div id="modal" key={userView._id}>
                <PureModal
                  isOpen={modal}
                  closeButton="close"
                  closeButtonPosition="bottom"
                  onClose={() => {
                    setModal(false);
                    return true;
                  }}
                >
                  <div id="modal-message">
                    <Grid item sm={6}>
                      <img src={userView.userImage} alt="User Image" />
                    </Grid>
                    <Grid item sm={6}>
                      <div id="content">
                        <h5 id="introduction">Hello Everybody, I am</h5>
                        <h2>
                          <span id="first-name">{userView.firstName}</span>{' '}
                          <span id="last-name">{userView.lastName}</span>{' '}
                          <span id="middle-name">{userView.middleName}</span>
                        </h2>
                        <div id="school">
                          <h4>School Info:</h4>
                          <h5>
                            {userView.matricNumber}{' '}
                            <span className="to-special-right">
                              {userView.studentId}
                            </span>
                          </h5>
                        </div>
                        <div id="personal">
                          <h4>Personal Info:</h4>
                          <h5>
                            <span className="name">Date of Birth: </span>
                            {userView.date}
                          </h5>
                          <h5>
                            <span className="row">
                              <span className="name">Gender: </span>
                              {userView.gender}
                            </span>
                            <span className="row">
                              <span className="to-right">
                                <span className="name">Marital Status: </span>
                                {userView.marital}
                              </span>
                            </span>
                          </h5>
                          <h5>
                            <span className="row">
                              <span className="name">Blood Group: </span>
                              {userView.blood}
                            </span>
                            <span className="row">
                              <span className="to-right">
                                <span className="name">Genotype: </span>{' '}
                                {userView.genotype}
                              </span>
                            </span>
                          </h5>
                          <h5 id="citizenship">
                            <span className="row">
                              <span className="to-left">
                                <span className="name">City: </span>
                                {userView.city}
                              </span>
                              <span className="to-right">
                                <span className="name"> State: </span>
                                {userView.state}
                              </span>
                            </span>
                            <span className="citizen-row">
                              <span className="name"> Country: </span>
                              {userView.country}
                            </span>
                          </h5>
                          <h5 id="address">
                            <span>
                              <span className="name">Address: </span>
                              {userView.address}
                            </span>
                          </h5>
                        </div>
                        <div id="social">
                          <h4>Social Info:</h4>
                          <h5>
                            <span className="name">NickName: </span>
                            {userView.nickName}
                          </h5>
                          <h5>
                            <span className="name">Contact Info: </span>
                            <br />
                            <span className="contact">
                              <FontAwesomeIcon icon={faEnvelope} />{' '}
                              {userView.email}
                              <br />
                            </span>
                            <span className="contact">
                              <FontAwesomeIcon icon={faPhoneAlt} />{' '}
                              {userView.phoneNumber}
                            </span>
                          </h5>
                          <h5>
                            <span className="name">Facebook Profile: </span>
                            {userView.facebookId}
                          </h5>
                          <h5>
                            <span className="name">My hobbies: </span>
                            {userView.hobbies}
                          </h5>
                        </div>
                      </div>
                    </Grid>
                  </div>
                </PureModal>
              </div>
            )
        )}
      </div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid id="header-container" container spacing={3}>
          <div id="header">
            <div id="header-content">
              <h1>{header}</h1>
              <p>{deptMessage}</p>
              <a href="#us">Check Us Out</a>
            </div>
          </div>
        </Grid>

        <main>
          {/* Hero unit */}
          <Container id="us">
            {/* End hero unit */}
            <Grid container spacing={3}>
              {users.map((user) => (
                <Grid id={user._id} item key={user._id} xs={6} sm={4} md={3}>
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginTop: '20%',
                    }}
                  >
                    <CardMedia
                      sx={{ height: '350px' }}
                      component="img"
                      image={user.userImage}
                      alt="random"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <span id="first-name">{user.firstName}</span>{' '}
                        <span id="last-name">{user.lastName}</span>
                      </Typography>
                      <Typography
                        id="matricNumber"
                        gutterBottom
                        variant="h6"
                        component="h2"
                      >
                        {user.matricNumber}
                      </Typography>
                      <Typography
                        id="phoneNumber"
                        gutterBottom
                        variant="h6"
                        component="h2"
                      >
                        {user.phoneNumber}
                      </Typography>
                    </CardContent>

                    <CardActions id="view">
                      <Button id="view" size="small" onClick={handleModal}>
                        View
                      </Button>
                      <span id="button-delete">
                        <Button
                          id={user.matricNumber}
                          size="small"
                          onClick={handleDelete}
                        >
                          Delete
                        </Button>
                      </span>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            {header}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            An Assignment on Student Bio data.
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            {dept} {new Date().getFullYear()}/{new Date().getFullYear() + 1}
            {'.'}
          </Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = await client.db(process.env.DEPT);
  const res = await db.collection('users').find({}).toArray();
  const users = JSON.parse(JSON.stringify(res));
  return {
    props: {
      users: users,
      header: process.env.DEPTNAME,
      dept: process.env.DEPT,
      deptMessage: process.env.DEPTMESSAGE,
      port: process.env.PORT,
    },
  };
}
