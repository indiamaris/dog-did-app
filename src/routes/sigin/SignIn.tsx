import { createFileRoute } from '@tanstack/react-router';

const SignIn = () => {
  return (
    <div>
      <h1>Sign In here</h1>
    </div>
  );
};

export default SignIn;

export const Route = createFileRoute('/sigin/SignIn')({
  component: SignIn,
});
