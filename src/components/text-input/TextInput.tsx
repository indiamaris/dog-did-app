import TextField from '@mui/material/TextField';

export default function TextInput({ value, onChange, width }) {
  return (
    <TextField
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      value={value}
      onChange={onChange}
      sx={{ width, padding: 0 }}
    />
  );
}
