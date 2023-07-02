export default function Tableau(props) {
  const { filtredEleves } = props;
  return (
    <table style={{ width: "70%", margin: "auto", marginTop: "20px" }}>
      <tr>
        <th>Code</th>
        <th>Nom</th>
        <th>Age</th>
        <th>Groupe</th>
      </tr>
      {filtredEleves
        ? filtredEleves.map((ele, index) => {
            return (
              <tr key={index}>
                <td>{ele.Code}</td>
                <td>{ele.nom}</td>
                <td>{ele.age}</td>
                <td>{ele.groupe}</td>
              </tr>
            );
          })
        : null}
    </table>
  );
}
