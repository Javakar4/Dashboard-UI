import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, TextField, Select, MenuItem,
  Button, InputLabel, FormControl, Grid, Box, Typography
} from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const borderedInputStyle = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    fontFamily: 'Satoshi',
    height: '45px',                 // ↓ reduced height
    '& input': {
      padding: '10px 12px',         // ↓ reduce inner padding
    },
    '& fieldset': {
      borderColor: '#BCBCBC',
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: '#222222',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#222222',
    },
  },
  '& .MuiOutlinedInput-input': {
    fontFamily: 'Satoshi',
  },
};


const borderedSelectStyle = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    fontSize: '14px',
    height: '48px',
    fontFamily: 'Satoshi',
    paddingRight: '32px',
    '& .MuiSelect-select': {
      padding: '10px 12px',
      display: 'flex',
      alignItems: 'center',
    },
    '& .MuiSelect-select em': {
      fontStyle: 'normal', // or 'italic'
      color: '#A9A9A9',
    },
    '& fieldset': {
      borderColor: '#BCBCBC',
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: '#222222',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#222222',
    },
  },
};



const JobDialog = ({ open, handleClose }) => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    salaryMin: '',
    salaryMax: '',
    deadline: '',
    description: ''
  });

  const handleChange = (field) => (event) => {
    setJobDetails({ ...jobDetails, [field]: event.target.value });
  };

  const handleSubmit = async () => {
  try {
    const response = await fetch('http://localhost:4000/api/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jobDetails),
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert('Error: ' + errorData.error);
      return;
    }

    const result = await response.json();
    alert('Success: ' + result.message);
    handleClose(); // close dialog or reset form
  } catch (error) {
    alert('Network error');
    console.error(error);
  }
};


  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          width: '848px',
          height: '779px',
          borderRadius: '16px',
          backgroundColor: '#FFFFFF',
          fontFamily:'Satoshi',
          boxShadow: '0px 0px 24px 0px #A9A9A940',
          padding: '10px',
        }
      }}
    >
      <DialogTitle fontFamily={'Satoshi'}>
        <Typography fontWeight="700" fontSize="24px" textAlign="center" fontFamily={'Satoshi'}>
          Create Job Openings
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box component="form" sx={{ mt: 2 }}>
          {/* Row 1: Job Title and Company Name */}
          <Grid container spacing={2} sx={{mb: 2 }}>
            <Grid item size={6}>
              <InputLabel sx={{ fontWeight: '600' ,fontFamily:'Satoshi' }}>Job Title</InputLabel>
              <TextField
                placeholder="e.g. Full Stack Developer"
                fullWidth
                variant="outlined"
                value={jobDetails.title}
                onChange={handleChange('title')}
                sx={borderedInputStyle}
              />
            </Grid>
            <Grid item size={6}>
              <InputLabel sx={{ fontWeight: '600' ,fontFamily:'Satoshi' }}>Company Name</InputLabel>
              <TextField
                placeholder="e.g. Amazon"
                fullWidth
                variant="outlined"
                value={jobDetails.company}
                onChange={handleChange('company')}
                sx={borderedInputStyle}
              />
            </Grid>
          </Grid>

          {/* Row 2: Location and Job Type */}
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item size={6}>
              <InputLabel sx={{ fontWeight: '600' ,fontFamily:'Satoshi' }}>Location</InputLabel>
              <FormControl fullWidth variant="outlined" sx={borderedSelectStyle}>
                <Select
                  value={jobDetails.location}
                  onChange={handleChange('location')}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Select location' }}
                >
                  <MenuItem value="">
                    <em>Select Location</em>
                  </MenuItem>
                  <MenuItem value="Chennai">Chennai</MenuItem>
                  <MenuItem value="Bangalore">Bangalore</MenuItem>
                  <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item size={6}>
              <InputLabel sx={{ fontWeight: '600' ,fontFamily:'Satoshi' }}>Job Type</InputLabel>
              <FormControl fullWidth variant="outlined" sx={borderedSelectStyle}>
                <Select
                  value={jobDetails.type}
                  onChange={handleChange('type')}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Select job type' }}
                >
                  <MenuItem value="">
                    <em>Select Job Type</em>
                  </MenuItem >
                  <MenuItem value="Full Time">Full Time</MenuItem>
                  <MenuItem value="Part Time">Part Time</MenuItem>
                  <MenuItem value="Contract">Contract</MenuItem>
                  <MenuItem value="Internship">Internship</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* Row 3: Salary Range and Application Deadline */}
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item size={6}>
              <InputLabel sx={{ fontWeight: '600' ,fontFamily:'Satoshi' }}>Salary Range</InputLabel>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  placeholder="⇅ ₹0"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={jobDetails.salaryMin}
                  onChange={handleChange('salaryMin')}
                  sx={{
    ...borderedInputStyle,
    '& input::placeholder': {
      fontSize: '16px',
      color: '#A9A9A9',
    },
    // This is key for MUI v5 (and often necessary to override internal styles)
    '& .MuiInputBase-input::placeholder': {
      fontSize: '14px',
    },
  }}
                />
                <TextField
                  placeholder="⇅ ₹100,000"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={jobDetails.salaryMax}
                  onChange={handleChange('salaryMax')}
                  sx={{
    ...borderedInputStyle,
    '& input::placeholder': {
      fontSize: '14px',
      color: '#A9A9A9',
    },
    // This is key for MUI v5 (and often necessary to override internal styles)
    '& .MuiInputBase-input::placeholder': {
      fontSize: '14px',
    },
  }}
                />
              </Box>
            </Grid>
            <Grid item size={6}>
              <InputLabel sx={{ fontWeight: '600' ,fontFamily:'Satoshi' }}>Application Deadline</InputLabel>
              <TextField
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={jobDetails.deadline}
                onChange={handleChange('deadline')}
                sx={{
    ...borderedInputStyle,
    '& input::placeholder': {
      fontSize: '1px',
      color: '#BCBCBC',
    },
    // This is key for MUI v5 (and often necessary to override internal styles)
    '& .MuiInputBase-input::placeholder': {
      fontSize: '14px',
    },
  }}
                inputProps={{
                  placeholder: '', // explicitly remove placeholder
                }}
              />

            </Grid>
          </Grid>

          {/* Row 4: Job Description */}
          <InputLabel sx={{ fontWeight: '600' ,fontFamily:'Satoshi' }}>Job Description</InputLabel>
          <TextField
  placeholder="Enter detailed job description here..."
  multiline
  rows={6}
  fullWidth
  variant="outlined"
  value={jobDetails.description}
  onChange={handleChange('description')}
  sx={{
    ...borderedInputStyle,
    mb: 2,
    mt: 1,
    '& .MuiOutlinedInput-root': {
      ...borderedInputStyle['& .MuiOutlinedInput-root'],
      minHeight: '180px', // 🟢 Increase height
      alignItems: 'start', // ensure text starts at the top
      '& textarea': {
        fontFamily: 'Satoshi',
        fontSize: '16px',
        padding: '7px',
        lineHeight: '1.6',
      },
    },
  }}
/>


          {/* Row 5: Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="outlined"
              endIcon={<KeyboardDoubleArrowDownIcon />}
              fontFamily={'Satoshi'}
              sx={{
                mt: 2,
                borderColor: '#222222',
                color: 'black',
                width: '150px',
                fontWeight: 'bold',
                borderRadius: '10px',
                fontFamily: 'Satoshi',
                textTransform: 'capitalize',
                boxShadow: '0px 0px 4px 0px #00000040',
                '&:hover': {
                    backgroundColor: '#00AAFF',
                    color: 'white',
                    borderColor: '#00AAFF',
                    boxShadow: '0px 0px 4px 0px #00000040',
                    
                },
              }}
            >
              Save Draft
            </Button>
            <Button
              variant="outlined"
              color="#00AAFF"
              endIcon={<KeyboardDoubleArrowRightIcon />}
              sx={{
                mt: 2,
                borderColor: '2px solid #00AAFF',
                boxSizing: 'border-box',
                color: 'white',
                backgroundColor: '#00AAFF',
                width: '150px',
                fontWeight: 'bold',
                borderRadius: '10px',
                fontFamily: 'Satoshi',
                textTransform: 'capitalize',
                boxShadow: '0px 0px 4px 0px #00000040',
                '&:hover': {
                    backgroundColor: 'white',
                    color: 'black',
                    borderColor: '1px solid #222222',
                    boxShadow: '0px 0px 4px 0px #00000040',
                    
                },
              }}
              onClick={handleSubmit}
            >
              Publish
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default JobDialog;
