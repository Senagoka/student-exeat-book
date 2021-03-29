import { useContext } from "react";
import { StudentsContext } from "./StudentsContext";

function Students() {
  const { students, dispatch } = useContext(StudentsContext);

  return (
    <div className="sena">
      {students.map((student) => (
        <div >
          <div className="cat">
            <h2>{student.name}</h2>
            <h2>{student.level}</h2>
            <h2>{student.date}</h2>
          </div>

          <button
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
