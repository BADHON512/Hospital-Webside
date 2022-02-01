import React from 'react';

const Badhon = ({all}) => {
    return (
        <div>
         <table class="table caption-top">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">Patients (Name) </th>
      <th scope="col">rog name</th>
      <th scope="col">Age</th>
      <th scope="col">Mobile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{all.name}</th>
      <td className='text-danger'>{all.service}</td>
      <td>{all.Age}</td>
      <td>{all.mobileNumber}</td>
    </tr>
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
        </div>
    );
};

export default Badhon;