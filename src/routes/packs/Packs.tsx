import { createFileRoute } from '@tanstack/react-router';
import  ShowPacks  from './components/ShowPacks';
import { AddPack } from './components/AddPack';

const mockPacks =[
  { id: 1, name: 'Pack 1', Onwers: ['Onwers for Pack 1'], pets:[{  
    id:23,
      "name": "string",
      "breed": "string",
      "peso": "string",
      "birthDate": "string",
      "alergies": ["string","string"],
      isSick: false,

    }] },

  { id: 2, name: 'Pack 2', Onwers: ['Onwers for Pack 2'], pets:[{  
    id:21,
    "name": "string",
      "breed": "string",
      "peso": "string",
      "birthDate": "string",
      "alergies": ["string","string"],
      isSick: true,
    }]
  }

];

const Packs = () => {
  return (
    <div>
      <h1>Packs</h1>
  <ShowPacks packs={mockPacks} />
      <AddPack />
   

    </div>
  );
};

export default Packs;

export const Route = createFileRoute('/packs/Packs')({
  component: Packs,
});
