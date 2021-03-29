import { useState, useContext } from "react";
import { StudentsContext } from "./StudentsContext";

function AddStudent() {
  const { dispatch } = useContext(StudentsContext);
  const [name, setName] = useState();
  const [level, setLevel] = useState();
  const [date, setDate] = useState();
  const [indexNo, setIndexNo] = useState();

  const onsubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADDSTUDENTS", payload: { name, level, date, indexNo } });
  };
  return (
    <form onSubmit={onsubmit}>
      <input
        type="text"
        placeholder="student name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="student level"
        onChange={(e) => setLevel(e.target.value)}
      />
      <input
        type="date"
        placeholder="addmission date"
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="index number"
        onChange={(e) => setIndexNo(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
export default AddStudent;
