import React from "react";

const Requirements = () => {
  return (
    <>
      <h2>1. Create a HRIS (Human Resource Integration Service) as a class</h2>
      <h3>Requirements</h3>
      <ul>
        <li>
          <strong>Constructor:</strong> [name, apiKey]
        </li>
        <li>
          <strong>toString():</strong> Should return name of HRIS & API key
        </li>
        <li>
          <strong>getEmployees():</strong> Should return a list of employees {`{id, name, position}`}
        </li>
      </ul>

      <h2>2a. Create a component that displays all employees in a list from the HRIS instance.</h2>
      <h3>Requirements</h3>
      <ul>
        <li>
          <strong>List of employees</strong>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bob</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Susan</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>

      <h2>2b. While Employees are loading, a loader component should be displayed</h2>
      <h3>Requirements</h3>
      <ul>
        <li>Turn getEmployees() to be asnychronous</li>
        <li>
          <strong style={{ marginRight: 8 }}>Loader Component:</strong>
          Loading...
        </li>
      </ul>

      <h2>3. For each Employee, add a "Print info" button that logs out information about the employee</h2>

      <h2>4. Clean up!</h2>
      <h3>Requirements</h3>
      <ul>
        <li>Use ONE `.map` within the return function of your Employee to render Employee data</li>
        <li>Any other improvements? </li>
      </ul>

      <h3>Bonus</h3>
      <ul>
        <li>
          <strong>Search</strong> Implement searching for employees by position via a dropdown (Use any library you'd
          like)
        </li>
        <li>
          <strong>Cache:</strong> Cache getEmployees() the first time & use that result for subsequent API calls
        </li>
        <li>
          <strong>Hooks:</strong> Refactor your components to use React Hooks
        </li>
        <li>
          <strong>HOC</strong> Create a Higher order Component that gives the child Component props about
          `window.innerWidth` with a resize listener
        </li>
      </ul>
    </>
  );
};

export default Requirements;
