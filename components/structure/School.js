import * as React from 'react';
import Image from 'next/image';
import { Button, Grid, Stack, TextField } from '@mui/material';
import 'react-datepicker/dist/react-datepicker.css';
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget';

export default function School() {
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
        <Grid id="defaultImage" item xs={12} sm={6}>
          <Image
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDw8PDxAPEA8PDw8PDw8PFQ8QDw8NFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIHA//EACIQAQEBAAIBAwUBAAAAAAAAAAABEUHw0YGRsVFhcaHBEv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDqIIAioAAAAAigILUAAAFQAABUUAEBdVAFVDQUQBqKgCqgDUa1iLAb9xlAeQqAIoCAAAAIqAfUDAAAVFQAAAFBFRQAgAACiKCiANaIA0ustAqADCKgAACKAgAAAAJQAAUAEFQAFBBTQIAAaAAAKIoCooEaZlAaVlQZABAABUARQEAARQEUAIAAAAAAigBAAE1QQAFEUBUNBo1AF7wIAoAIAAAAAAACCgIAAAAAAAAeogKAAhpQPCy/hIee/IKJigiooGqgCiANAAUEAAgAAAAKgACKABgILUAAAIEAEJe8AqKAgAKIApiALBFADvCA2AAACGKAgqYAigIKAiooIKYCQVAAUEFQAAAAAAEFQAAAWAGiANgAAAAAItAEVAVFQFQADBQQAAAAwAEUBBcLAQVAAAQVAFTFBMF9gGgAAAAAEUAAAoAIoAIoCYoYAiqCAYCUq0BAXPnARGkoIKgAYd5BFMLABe8oDQgAABqoAAAQAAABUAUTVAAAAACpoKtY739NWgXweWePZZfyBcXZ9/6lXewBKbAACgCAL6AgAgCiKAIoCoAogCpoAAApENBQQGkQBdBAKU7gBKrPCgaaAL/o3735QAEwAAA0QBQAAAVKALAAFQBRAAs4ABQAxAA1UAUAAAEJeAAAAQAXEgAAAAA//9k="
            alt="Uploaded Image"
            width="300px"
          />
        </Grid>
        <Grid id="user_image" item xs={12} sm={3}>
          <WidgetLoader />
          <Widget
            sources={['local', 'camera']}
            resourceType={'image'}
            cloudName={'david1'}
            uploadPreset={'yhxaw4ez'}
            buttonText={'Choose Photo *'}
            style={{
              color: 'white',
              border: 'none',
              width: '150px',
              backgroundColor: '#1976d2',
              borderRadius: '8px',
              height: '30px',
            }}
            folder={'AER'} // set cloudinary folder name to send file
            cropping={false} // set ability to crop images -> default = true
            onSuccess={(response) => {
              var userImage = response['info'].secure_url;
              document.getElementsByTagName('img')[0].src = userImage;
            }} // add success callback -> returns result
            onFailure={(err) => {
              console.log(err);
            }} // add failure callback -> returns 'response.error' + 'response.result'
            logging={false} // logs will be provided for success and failure messages,
            // set to false for production -> default = true
            customPublicId={'sample'} // set a specific custom public_id.
            // To use the file name as the public_id use 'use_filename={true}' parameter
            eager={'w_400,h_300,c_pad|w_260,h_200,c_crop'} // add eager transformations -> deafult = null
            use_filename={false} // tell Cloudinary to use the original name of the uploaded
            // file as its public ID -> default = true,
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            id="studentId"
            name="studentId"
            label="Student ID"
            fullWidth
            autoComplete="student-id"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="matricNumber"
            name="matricNumber"
            label="Matric Number"
            fullWidth
            autoComplete="matric-number"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
