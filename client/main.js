import './style.css';
// import javascriptLogo from './javascript.svg';
// import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">

//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;
document.addEventListener('DOMContentLoaded', () => {
  const employeeList = document.getElementById('employee-list');

  fetch('/api/employees')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
      return response.json();
    })
    .then((employees) => {
      employees.forEach((employee) => {
        const listItem = document.createElement('li');
        listItem.textContent = employee.employeeName; // Adjust based on your data structure
        employeeList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error('Error fetching employees:', error);
    });
});

// document.querySelector('#app').innerHTML = `
//   <div>
// <h1>A Fancy Table</h1>

// <table id="customers">
//   <tr>
//     <th>_id</th>
//     <th>Employee Name</th>
//     <th>SN</th>
//     <th>Address</th>
//     <th>Employee Id</th>
//     <th>Mobile Nunmer</th>
//     <th>Email Id</th>
//     <th>Password</th>
//   </tr>
//   <tr>
//     <th>Company</th>
//     <th>Contact</th>
//     <th>Country</th>
//     <th>Company</th>
//     <th>Contact</th>
//     <th>Country</th>
//     <th>Country</th>

//   </tr>
//   <tr>
//     <td>Alfreds Futterkiste</td>
//     <td>Maria Anders</td>
//     <td>Germany</td>
//     <td>Alfreds Futterkiste</td>
//     <td>Maria Anders</td>
//     <td>Germany</td>
//     <td>Country</td>

//   </tr>
//   <tr>
//     <td>Berglunds snabbköp</td>
//     <td>Christina Berglund</td>
//     <td>Sweden</td>
//     <td>Berglunds snabbköp</td>
//     <td>Christina Berglund</td>
//     <td>Sweden</td>
//     <td>Country</td>

//   </tr>
//   <tr>
//     <td>Centro comercial Moctezuma</td>
//     <td>Francisco Chang</td>
//     <td>Mexico</td>
//     <td>Centro comercial Moctezuma</td>
//     <td>Francisco Chang</td>
//     <td>Mexico</td>
//     <td>Country</td>

//   </tr>
//   <tr>
//     <td>Ernst Handel</td>
//     <td>Roland Mendel</td>
//     <td>Austria</td>
//     <td>Ernst Handel</td>
//     <td>Roland Mendel</td>
//     <td>Austria</td>
//     <td>Country</td>

//   </tr>
// </table>

//   </div>
// `;

// setupCounter(document.querySelector('#counter'));
