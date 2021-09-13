import React, { useState, useEffect } from "react";
import axios from "axios";
import { Item } from "semantic-ui-react";
import EmployeeModal from './EmployeeModal'

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://reqres.in/api/users?per_page=4");
    setEmployees(response.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const employeeList = employees.map((employee) => {
    return (
      <Item key={employee.id} className="employee-item">
        <Item.Image
          src={employee.avatar}
          size="tiny"
          circular
          className="avatar"
        />
        <Item.Header className="name">{`${employee.first_name} ${employee.last_name}`}</Item.Header>
        <Item.Extra>
          <EmployeeModal employee={employee} />
        </Item.Extra>
      </Item>
    );
  });
  return (
    <Item.Group divided="true" id="employee-list">
      {employeeList}
    </Item.Group>
  );
};

export default EmployeeList;
