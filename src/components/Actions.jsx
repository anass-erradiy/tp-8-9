export default function Actions(props) {
  const { handleCherch, handleFilter, initialiser } = props;
  return (
    <div>
      <input type="button" value="Rechercher" onClick={handleCherch} />
      <input type="button" value="Filtrer" onClick={handleFilter} />
      <input type="button" value="Initialiser" onClick={initialiser} />
    </div>
  );
}
