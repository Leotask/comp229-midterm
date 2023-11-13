import React from 'react';

const doctors = [
  { id: 1, lastName: 'Smith', firstName: 'John', specialty: 'Cardiology', contact: '123-456-7890' },
  { id: 2, lastName: 'Johnson', firstName: 'Emily', specialty: 'Dermatology', contact: '234-567-8901' },
  { id: 3, lastName: 'Williams', firstName: 'Michael', specialty: 'Orthopedics', contact: '345-678-9012' },
  { id: 4, lastName: 'Brown', firstName: 'Sophia', specialty: 'Pediatrics', contact: '456-789-0123' },
  { id: 5, lastName: 'Jones', firstName: 'Matthew', specialty: 'Neurology', contact: '567-890-1234' },
  { id: 6, lastName: 'Miller', firstName: 'Olivia', specialty: 'Ophthalmology', contact: '678-901-2345' },
  { id: 7, lastName: 'Davis', firstName: 'Daniel', specialty: 'Gastroenterology', contact: '789-012-3456' },
  { id: 8, lastName: 'Garcia', firstName: 'Emma', specialty: 'Endocrinology', contact: '890-123-4567' },
  { id: 9, lastName: 'Rodriguez', firstName: 'Liam', specialty: 'Urology', contact: '901-234-5678' },
  { id: 10, lastName: 'Martinez', firstName: 'Ava', specialty: 'Rheumatology', contact: '012-345-6789' },
];
const DoctorListTable = () => {
  return (
    <table class='doctorlist'>
      <thead>
        <tr>
          <th>ID</th>
          <th>LastName</th>
          <th>FirstName</th>
          <th>Specialty</th>
          <th>Contact</th>

        </tr>
      </thead>
      <tbody>
        {doctors.map((doctor) => (
          <tr key={doctor.id}>
            <td>{doctor.id}</td>
            <td>{doctor.lastName}</td>
            <td>{doctor.firstName}</td>
            <td>{doctor.specialty}</td>
            <td>{doctor.contact}</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DoctorListTable;
