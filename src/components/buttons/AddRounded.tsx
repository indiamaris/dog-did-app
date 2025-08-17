const AddRounded = () => {
  return (
   <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
  );
};

export default AddRounded;
export const Route = createFileRoute('/add-rounded')({
  component: AddRounded,
});