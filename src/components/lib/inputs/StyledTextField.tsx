import React from 'react';
import TextField from '@mui/material/TextField';
import { SxProps, Theme } from '@mui/system';

// Define the custom TextField component
const StyledTextField = (props: any) => {
    const { sx, ...otherProps } = props;

    const defaultSx: SxProps<Theme> = {
        '& .MuiOutlinedInput-root': {
            backgroundColor: '#2F463E', // Background color of the input field
            '& fieldset': {
                borderColor: '#FFF3E3',
                borderWidth: '0.1', // Default border color
            },
            '&:hover fieldset': {
                borderColor: '#FFF3E3', // Border color on hover
            },
            '&.Mui-focused fieldset': {
                borderColor: '#B88E2F', // Border color when focused
            },
            '& input': {
                color: '#FFF3E3', // Input text color
            },
        },
        '& .MuiInputLabel-root': {
            color: '#FFF3E3', // Label color when input is blank
            
            '&.Mui-focused': {
                color: '#B88E2F', // Label color when focused
                // fontSize: '20px', // Label font size
                fontWeight: 'bold',
            },
        },
        // '& .MuiInputLabel-shrink': {
        //     fontSize: '30px', // Label font size when shrink
        //     fontWeight: 'bold', // Label font weight when shrink
        //   },
      
    };

    return (
        <TextField
            variant="outlined"
            sx={{ ...defaultSx, ...sx }} // Combine default styles with any additional styles passed in
            {...otherProps} // Spread other props to allow customizability
        />
    );
};

export default StyledTextField;
