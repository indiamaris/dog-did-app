import CustomButton from "./button";

export default function AddButton({onclick}) {
  return (
    <CustomButton
      onclick={onclick}
      label="Add"
      color="primary"
    />
  );
}
