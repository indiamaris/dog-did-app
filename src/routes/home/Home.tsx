
import { createFileRoute } from '@tanstack/react-router';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;


export const Route = createFileRoute('/home/Home')({
  component: Home,
});


