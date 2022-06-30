import axios from "axios";
import { useState } from "react";
export const Employee = () => {
  const [employees, setEmployees] = useState<string[]>([]);

  const getEmployees = () => {
    axios
      .get("employees/")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        if (error.response.status === 403) {
          alert("Your access is not allowed.");
        }
      });
  };

  const getTotalEmployees = () => {
    axios
      .get("employees/total-employees")
      .then((response) => {
        alert(`The total employees: ${response.data}`);
      })
      .catch((error) => {
        if (error.response.statusCode === 401) {
          alert("Unauthorized");
        }
      });
  };

  return (
    <div>
      <button className="button is-success" onClick={getEmployees}>
        Get Employees
      </button>
      <button className="button" onClick={getTotalEmployees}>
        Get Total Employees
      </button>
      <ol>
        {employees.map((d: string, index: number) => {
          return <li key={index}>{d}</li>;
        })}
      </ol>
    </div>
  );
};
