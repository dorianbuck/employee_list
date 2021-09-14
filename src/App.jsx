import React from "react";
import EmployeeList from './components/EmployeeList'
import { Container, Header } from "semantic-ui-react";

const App = () => {
  return (
    <Container>
      <Header size="large" id="header">
        Employee List
      </Header>
      <EmployeeList />
    </Container>
  );
};

export default App;




// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   const [employees, setEmployees] = useState([]);

//   const fetchData = async () => {
//     const response = await axios.get("https://reqres.in/api/users?per_page=4");
//     setEmployees(response.data.data);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const employeeList = employees.map((employee) => {
//     return (
//       <li>
//         {`${employee.first_name} ${employee.last_name}`}
//         {`${employee.email}`}<img src={`${employee.avatar}`} />
//       </li>
//     );
//   });
//   return (
//     <div>
//       <h1 data-testid="header">Employee Management</h1>
//       <div data-testid="employee-list">{employeeList}</div>
//     </div>
//   );
// };

// export default App;
