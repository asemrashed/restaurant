import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Btn from './Btn';

function BookYourTable() {
  const [reservationDate, setReservationDate] = useState(null);
  const [totalPeople, setTotalPeople] = useState(1);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          color: '#fff',
          borderRadius: '8px',
          width: {xs:'100%', md:'635px'},
        }}
      >
        {/* Heading Section */}
        <Typography
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'red',
            marginBottom: {xs:'0px', md:'8px'},
            fontSize:{xs:'16px', md:'20px'},
            lineHeight:{xs:'26px', md:'32px'}
          }}
        >
            <img src="/icon/redRectangle.png" alt=""  style={{marginRight:"16px"}}/>
          Book Now
        </Typography>
        <Typography
          sx={{fontFamily:'Bebas Neue', fontWeight: '500', marginBottom: {xs:'2px', md:'24px'}, fontSize:{xs:'40px', md:'62px'}, lineHeight:{xs:'48px', md:'62px'},  }}
        >
          Book Your Table
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: '24px', maxWidth: '600px',fontSize:"16px" }}
        >
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
          molestie vel, ornare non id blandit netus.
        </Typography>

        {/* Form Section */}
        <Grid container spacing={3}>
          {/* Name and Email Fields */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Your Name *"
              fullWidth
              variant="outlined"
              InputLabelProps={{ style: { color: '#fff' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#fff' },
                  '&.Mui-focused fieldset': { borderColor: '#FEBF00' },
                },
                '& input': { color: '#fff' },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Your Email"
              fullWidth
              variant="outlined"
              InputLabelProps={{ style: { color: '#fff' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#fff' },
                  '&.Mui-focused fieldset': { borderColor: '#FEBF00' },
                },
                '& input': { color: '#fff' },
              }}
            />
          </Grid>

          {/* Reservation Date */}
          <Grid item xs={12} md={6}>
            <DatePicker
              label="Reservation Date"
              value={reservationDate}
              onChange={(newValue) => setReservationDate(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  InputLabelProps={{ style: { color: '#fff' } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#fff' },
                      '&.Mui-focused fieldset': { borderColor: '#FEBF00' },
                    },
                    '& input': { color: '#fff' },
                  }}
                />
              )}
              slotProps={{
                textField: {
                  sx: {
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '2px', // Match other input fields' border radius
                      border: '1px solid white', // Set default border color
                      color: 'white', // Text color
                    },
                    '& .MuiOutlinedInput-root.Mui-focused': {
                      borderColor: '#FEBF00', // Set focus border color
                    },
                    '& .MuiInputBase-input': {
                      width:{xs:'300px', md:'240px'}, // Match height with other input fields
                    },
                  },
                },
              }}
            />
          </Grid>

          {/* Total People */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: '#fff' }}>Total People</InputLabel>
              <Select
                label='Total People'
                value={totalPeople}
                onChange={(e) => setTotalPeople(e.target.value)}
                sx={{
                  color: '#fff',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#fff',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FEBF00',
                  },
                }}
              >
                {[...Array(10).keys()].map((num) => (
                  <MenuItem key={num + 1} value={num + 1}>
                    {num + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Message Field */}
          <Grid item xs={12}>
            <TextField
              label="Message"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              InputLabelProps={{ style: { color: '#fff' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#fff' },
                  '&.Mui-focused fieldset': { borderColor: '#FEBF00' },
                },
                '& textarea': { color: '#fff' },
              }}
            />
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Box sx={{ textAlign: 'left', marginTop: {xs:'10px', md:'24px'} }}>
          <Btn value="book now"/>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}

export default BookYourTable;
