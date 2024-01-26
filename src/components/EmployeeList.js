import React, { useEffect, useState } from "react";
import EmpService from "../service/EmpService";

const EmployeeList = () => {
  const [emp, setEmp] = useState([]);

  useEffect(()=>{
     
        EmpService.getAll().then((response)=>{
            setEmp(response.data)
            console.log(response.data);
        }).catch(error=>{console.log(error);
        });
  },[])

  return (
    <div className="container">
      <h2 className="text-center">Employee details</h2>
      <table className="table table-bordered table-striped">
            <thead>
                <tr>
                <th>emp-id</th>
                <th>emp-name</th>
                <th>emp-lastName</th>
                <th>emp email</th>
                </tr>
            </thead>
            <tbody>
                {emp.map((employee) => (
                    <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.empName}</td>
                    <td>{employee.empLastName}</td>
                    <td>{employee.email}</td>
                    </tr>
                ))}
            </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
