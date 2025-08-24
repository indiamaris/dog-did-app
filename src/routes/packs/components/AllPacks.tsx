const AllPacks = ({packs}) => {
  return (
    <div>
     {packs.map((pack) => (
          <div key={pack.id}>
            <h2>{pack.name}</h2>
            <p>Owners: {pack.Onwers.join(', ')}</p>
            <p>Pets:</p>      
          </div>
        ))}
    </div>
  );
}

export default AllPacks;