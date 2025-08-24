const Card = ({name,line}) => {
  return (
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Typography>{name}</Typography>
        <Typography>{line}</Typography>
        </Grid>
        </Box>
  )
};

export default Card;
