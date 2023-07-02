export default function Form(props) {
  const {
    code,
    setCode,
    nom,
    setNom,
    age,
    setAge,
    grp,
    setGrp,
    eleves
  } = props;
  return (
    <div>
      <h1>Nombre d'eleves : {eleves.length}</h1>
      Code :{" "}
      <input
        type="number"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <br /> <br />
      Nom :{" "}
      <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
      <br /> <br />
      Age :{" "}
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />{" "}
      <br /> <br />
      Group :{" "}
      <input
        type="text"
        value={grp}
        onChange={(e) => setGrp(e.target.value)}
      />{" "}
      <br /> <br />
    </div>
  );
}
