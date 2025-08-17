import CustomButton from './button';

export default function DeleteButton({ onclick }) {
  return <CustomButton onclick={onclick} label="Delete" color="warning" />;
}
