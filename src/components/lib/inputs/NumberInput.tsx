import * as React from 'react';
import { Unstable_NumberInput as BaseNumberInput, NumberInputProps } from '@mui/base'; // Updated import
import { styled } from '@mui/system';
import { Remove as RemoveIcon, Add as AddIcon } from '@mui/icons-material';

// Move colors to a separate constants file if used across components
const COLORS = {
  golden: { 500: '#B88E2F' },
  grey: {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  }
} as const;

// Common styles that can be reused
const commonStyles = {
  fontFamily: "'IBM Plex Sans', sans-serif",
  transition: 'all 120ms cubic-bezier(0.4, 0, 0.2, 1)',
  focusVisible: { outline: 0 }
};

const StyledInputRoot = styled('div')(({ theme }) => ({
  ...commonStyles,
  fontWeight: 400,
  color: theme.palette.mode === 'dark' ? COLORS.grey[300] : COLORS.grey[500],
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledInput = styled('input')(({ theme }) => ({
  ...commonStyles,
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1.375,
  color: theme.palette.mode === 'dark' ? COLORS.grey[300] : COLORS.grey[900],
  background: theme.palette.mode === 'dark' ? COLORS.grey[900] : '#fff',
  border: `1px solid ${theme.palette.mode === 'dark' ? COLORS.grey[700] : COLORS.grey[200]}`,
  boxShadow: `0px 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'}`,
  borderRadius: 8,
  margin: '0 8px',
  padding: '10px 12px',
  minWidth: 0,
  width: '4rem',
  textAlign: 'center',
  
  '&:hover, &:focus': {
    borderColor: COLORS.golden[500],
  },
  
  '&:focus': {
    boxShadow: `0 0 0 3px ${COLORS.golden[500]}`,
  }
}));

const StyledButton = styled('button')(({ theme }) => ({
  ...commonStyles,
  fontSize: '0.875rem',
  lineHeight: 1.5,
  border: '1px solid',
  borderRadius: 999,
  borderColor: theme.palette.mode === 'dark' ? COLORS.grey[800] : COLORS.grey[200],
  background: theme.palette.mode === 'dark' ? COLORS.grey[900] : COLORS.grey[50],
  color: theme.palette.mode === 'dark' ? COLORS.grey[200] : COLORS.grey[900],
  width: 32,
  height: 32,
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',

  '&:hover': {
    cursor: 'pointer',
    background: COLORS.golden[500],
    borderColor: COLORS.golden[500],
    color: COLORS.grey[50],
  },

  '&.increment': {
    order: 1,
  }
}));

export const NumberInput = React.forwardRef<HTMLDivElement, NumberInputProps>((props, ref) => (
  <BaseNumberInput
    slots={{
      root: StyledInputRoot,
      input: StyledInput,
      incrementButton: StyledButton,
      decrementButton: StyledButton,
    }}
    slotProps={{
      incrementButton: {
        children: <AddIcon fontSize="small" />,
        className: 'increment',
      },
      decrementButton: {
        children: <RemoveIcon fontSize="small" />,
      },
    }}
    {...props}
    ref={ref}
  />
));

NumberInput.displayName = 'NumberInput';