import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase_setup/firebase';

const AppointmentList = ({ patientEmail }) => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const appointmentCollection = collection(firestore, 'appointment');
            const user = JSON.parse(localStorage.getItem('user'))
            const q = query(appointmentCollection, where('email', '==', user.email));
            const querySnapshot = await getDocs(q);

            const appointmentData = [];
            querySnapshot.forEach((doc) => {
                appointmentData.push({ id: doc.id, ...doc.data() });
            });

            setAppointments(appointmentData);
        };

        fetchData();
    }, [patientEmail]);

    return (
        <div>
            <h2>Your ppointment</h2>
            <table className="appointmentlist">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Doctor</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment.id}>
                            <td>{appointment.name}</td>
                            <td>{appointment.email}</td>
                            <td>{appointment.mobile}</td>
                            <td>{appointment.doctor}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentList;
