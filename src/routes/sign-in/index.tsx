import { createFileRoute } from '@tanstack/react-router';
import PageShell from '../../components/layout/pageShell/PageShell';
import ButtonCustom from '../../components/inputs/buttons/ButtonCustom';

const SignIn = () => {
  return (
      <PageShell title={"Sign In"} footerItens={[<ButtonCustom variant='add' onclick={console.log('added')} />]}>
        <h1>Sign In form here</h1>
      </PageShell>

  );
};

export default SignIn;

export const Route = createFileRoute('/sign-in/')({
  component: SignIn,
});
