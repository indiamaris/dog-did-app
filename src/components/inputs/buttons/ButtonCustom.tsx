import Button from '@mui/material/Button';

export default function ButtonCustom({ onclick,color, variant,label }) {
  label = variant === 'add' ? 'Add' : variant === 'delete' ? 'Delete' : label || 'Button';
  color = variant === 'add' ? 'success' : variant === 'delete' ? 'error' : color;

  return (
    <Button variant={`contained`} color={color || 'info'} onClick={onclick} >
      {label}
    </Button>
  );
}
