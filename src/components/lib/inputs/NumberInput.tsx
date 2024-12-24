import * as React from 'react';
import { styled } from '@mui/system';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

interface CustomNumberInputProps {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number | undefined) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
  'aria-label'?: string;
}

export const NumberInput = React.forwardRef(function CustomNumberInput(
  props: CustomNumberInputProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const { value: controlledValue, defaultValue = 0, onChange, min, max, disabled, ...other } = props;
  const [internalValue, setInternalValue] = React.useState<number>(defaultValue);
  
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (newValue: number) => {
    if (min !== undefined && newValue < min) return;
    if (max !== undefined && newValue > max) return;
    
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  return (
    <StyledInputRoot ref={ref} {...other}>
      <StyledButton 
        onClick={() => handleChange(value - 1)}
        disabled={disabled || (min !== undefined && value <= min)}
        type="button"
      >
        <RemoveIcon fontSize="small" />
      </StyledButton>
      
      <StyledInput
        type="number"
        value={value}
        onChange={(e) => handleChange(Number(e.target.value))}
        disabled={disabled}
        min={min}
        max={max}
      />
      
      <StyledButton 
        onClick={() => handleChange(value + 1)}
        disabled={disabled || (max !== undefined && value >= max)}
        type="button"
        className="increment"
      >
        <AddIcon fontSize="small" />
      </StyledButton>
    </StyledInputRoot>
  );
});

// export default function QuantityInput() {
//   return <NumberInput aria-label="Quantity Input" min={1} max={99} />;
// }

const golden = {
  500: '#B88E2F'
}

const grey = {
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
};

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`,
);

const StyledInput = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
  };
  border-radius: 8px;
  margin: 0 8px;
  padding: 10px 12px;
  outline: 0;
  min-width: 0;
  width: 4rem;
  text-align: center;

  &:hover {
    border-color: ${golden[500]};
  }

  &:focus {
    border-color: ${golden[500]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? golden[500] : golden[500]};
  }

  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  border: 1px solid;
  border-radius: 999px;
  border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  width: 32px;
  height: 32px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? golden[500] : golden[500]};
    border-color: ${theme.palette.mode === 'dark' ? golden[500] : golden[500]};
    color: ${grey[50]};
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`,
);
