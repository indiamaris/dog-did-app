import { createFileRoute } from "@tanstack/react-router";

export const AddPack = () => {
  return (
    <div>
      <h1>Add Pack</h1>
    </div>
  );
}



export const Route = createFileRoute('/packs/addPack/AddPack')({
  component: AddPack,
});
