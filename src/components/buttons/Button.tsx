import Button from '@mui/material/Button';

export default function CustomButton({ onclick, label, color }) {
  return (
    <Button variant="contained" color={color || 'info'} onClick={onclick}>
      {label}
    </Button>
  );
}
