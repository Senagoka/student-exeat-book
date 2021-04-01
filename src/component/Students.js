import { useContext } from "react";
import { StudentsContext } from "./StudentsContext";

function Students() {
  const { students, dispatch } = useContext(StudentsContext);

  return (
    <div className="sena">
      {students.map((student) => (
        <div className="card">
          <div className="cat">
            <h2>{student.name}</h2>
            <h2>{student.level}</h2>
            <h2>{student.date}</h2>
          </div>

          <button
            style={{
              background: "red", borderRadius: "20px 20px 20px 20px" 
            }}
            onClick={() =>
              dispatch({ type: "delete", indexNo: student.indexNo })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
export default Students;
