import { useState } from "react";
import "./App.css";
import AddStudent from "./component/AddStudent";
import Students from "./component/Students";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  const [toggle, setToggle] = useState(false);

  function showform() {
    setToggle(!toggle);
  }

  return (
    <div className="App">
      <Header showform={showform} toggle={toggle} />
      {toggle && <AddStudent />}

      <h1>Records Keeper</h1>
      <Students />
      <Footer />
    </div>
  );
}

export default App;
