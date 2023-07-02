import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Tableau from "./components/Tableau";
import Actions from "./components/Actions";
import Form from "./components/Form";
export default function App() {
  const [eleves, setEleves] = useState([]);
  const [code, setCode] = useState("");
  const [nom, setNom] = useState("");
  const [age, setAge] = useState("");
  const [grp, setGrp] = useState("");
  const [filtredEleves, setFiltredEleves] = useState();
  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/262dd85c-d7d2-4cda-a5b5-9fa76e9dd071")
      .then((res) => setEleves(res.data.emplyes));
  }, []);
  useEffect(() => {
    setFiltredEleves(eleves);
  }, [eleves]);

  const handleCherch = () => {
    if (!code) {
      alert("vueiller saisez le code a chercher !");
      return;
    }
    const eleve = eleves.find((elv) => elv.Code === Number(code));
    if (!eleve) {
      setCode("");
      setNom("");
      setAge("");
      setGrp("");
      return;
    }
    setNom(eleve.nom);
    setAge(eleve.age);
    setGrp(eleve.groupe);
  };
  const handleFilter = () => {
    if (!grp) {
      alert("vueiller saisez le groupe a filtrer par !");
      return;
    }
    setFiltredEleves([...eleves.filter((ele) => ele.groupe === grp)]);
  };
  const initialiser = () => {
    setCode("");
    setNom("");
    setAge("");
    setGrp("");
    setFiltredEleves(eleves);
  };

  return (
    <div className="App">
      <Form
        code={code}
        setCode={setCode}
        nom={nom}
        setNom={setNom}
        age={age}
        setAge={setAge}
        grp={grp}
        setGrp={setGrp}
        eleves={eleves}
      />
      <Actions
        handleCherch={handleCherch}
        handleFilter={handleFilter}
        initialiser={initialiser}
      />
      <Tableau filtredEleves={filtredEleves} />
    </div>
  );
}
