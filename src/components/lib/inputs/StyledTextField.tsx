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
            '& fieldset': {
                borderColor: '#2F463E',
                borderWidth: '0.1',
            },
            '&:hover fieldset': {
                borderColor: '#2F463E',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#B88E2F',
            },
            '& input': {
                color: '#2F463E', // Input text color
                fontWeight: 'bold',
                fontSize: '13px', // Set text size to 12px
                alignItems:"center"
            },
        },
        '& .MuiInputLabel-root': {
            color: '#2F463E', // Label color
            fontWeight: 'bold',
            fontSize: '12px', // Set label text size to 12px
            '&.Mui-focused': {
                color: '#2F463E',
                fontWeight: 'bold',
            },
        },
        '& .MuiInputLabel-shrink': {
            color: '#2F463E',
            fontWeight: 'bold',
        },
    };
    
    return (
        type !== 'password' ? (
            <TextField
                size="small"
                variant="outlined"
                type={type === "password" && showPassword ? 'text' : type}
                sx={{ ...defaultSx, ...sx }}
                {...otherProps}
            />
        ) : (
            <FormControl variant="outlined" sx={{ ...defaultSx, ...sx }}>
                <InputLabel htmlFor="outlined-adornment-password">
                    {props?.label ?? "Password"}
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    style={{justifyItems:"fu"}}
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
                                {showPassword ? <VisibilityOff fontSize='small'  /> : <Visibility fontSize='small' />}
                            </IconButton>
                        </InputAdornment>
                    }
                    sx={{ ...defaultSx, ...sx }}
                    {...otherProps}
                />
            </FormControl>
        )
    );
    
};

export default StyledTextField;
