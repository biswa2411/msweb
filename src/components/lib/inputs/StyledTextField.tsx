import React from 'react';
import TextField from '@mui/material/TextField';
import { SxProps, Theme } from '@mui/system';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';

// Define the custom TextField component
const StyledTextField = (props: any) => {
    const { sx, type, ...otherProps } = props;
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const defaultSx: SxProps<Theme> = {
        '& .MuiOutlinedInput-root': {
            // backgroundColor: '#FFF3E3', // Background color of the input field
            '& fieldset': {
                borderColor: '#2F463E',
                borderWidth: '0.1', // Default border color
            },
            '&:hover fieldset': {
                borderColor: '#2F463E', // Border color on hover
            },
            '&.Mui-focused fieldset': {
                borderColor: '#B88E2F', // Border color when focused
            },
            '& input': {
                color: '#2F463E', // Input text color
                fontWeight: 'bold',
                fontSize: "18px"
            },
        },
        '& .MuiInputLabel-root': {
            color: '#2F463E', // Label color when input is blank
            fontWeight: 'bold',
            '&.Mui-focused': {
                color: '#2F463E', // Label color when focused
                fontWeight: 'bold',

            },
        },
        '& .MuiInputLabel-shrink': {
            // fontSize: '30px', // Label font size when shrink
            color: "#1E342d",

            fontWeight: 'bold', // Label font weight when shrink
        },

    };

    return (
        type !== 'password' ? <TextField

            size={"small"}
            variant="outlined"

            type={type === "password" && showPassword ? 'text' : type}
            sx={{ ...defaultSx, ...sx }} // Combine default styles with any additional styles passed in
            {...otherProps} // Spread other props to allow customizability
        /> : <FormControl variant="outlined" sx={{ ...defaultSx, ...sx }}>
            <InputLabel htmlFor="outlined-adornment-password">{props?.label ?? "Password"}</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label={
                                showPassword ? 'hide the password' : 'display the password'
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }

                sx={{ ...defaultSx, ...sx }} // Combine default styles with any additional styles passed in
                {...otherProps}
            />
        </FormControl>
    );
};

export default StyledTextField;
