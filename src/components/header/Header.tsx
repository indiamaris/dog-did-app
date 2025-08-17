import { useParams } from '@tanstack/react-router';

export default function Header() {
  const params = useParams();

  return (
    <header>
      <h1>My App</h1>
      <div>Parâmetro da rota: {JSON.stringify(params)}</div>
    </header>
  );
}
