import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // check any blank field,
    if (!name || !email || !reservationDate || !message) {
      alert("Please fill in all fields.");
      return;
    }
    // collecting data
    const alertMessage = `
      Name: ${name}
      Email: ${email}
      Reservation Date: ${reservationDate}
      Total People: ${totalPeople}
      Message: ${message}
    `;
    alert(alertMessage);

    // all input clear but not working as I want.
    setName('');
    setEmail('');
    setReservationDate(null);
    setTotalPeople(1);
    setMessage('');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          borderRadius: '8px',
          width: {xs:'100%', md:'635px'},
        }}
      >
        {/* Form Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Your Name *"
              fullWidth
              variant="outlined"
              InputLabelProps={{ style: { color: '#fff' } }}
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
                      borderRadius: '2px',
                      border: '1px solid white',
                      color: 'white', 
                    },
                    '& .MuiOutlinedInput-root.Mui-focused': {
                      borderColor: '#FEBF00', 
                    },
                    '& .MuiInputBase-input': {
                      width:{xs:'72dvw', sm:'74dvw', md:'240px'}, 
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
              onChange={(e) => setMessage(e.target.value)}
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
          <Btn value="book now" onClick={handleSubmit}/>  {/* Btn component */}
        </Box>
      </Box>
    </LocalizationProvider>
  );
}

export default BookYourTable;
