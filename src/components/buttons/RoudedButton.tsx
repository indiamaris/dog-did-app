import CustomButton from "./button";

export default function RoundedButton({ onclick }) {
  return (
    <CustomButton
      onclick={onclick}
      label="Add"
      color="primary"
      variant="rounded"
      style={{
        borderRadius: "50%",
        width: 48,
        height: 48,
        minWidth: 48,
        minHeight: 48,
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
}
