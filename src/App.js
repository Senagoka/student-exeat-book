
import './App.css';
import AddStudent from "./component/AddStudent";
import Students from "./component/Students";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <AddStudent />
      <h1>Records Keeper</h1>
      <Students />
      <Footer />
    </div>
  );
}

export default App;
