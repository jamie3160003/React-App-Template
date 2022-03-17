import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Typography } from 'antd';

const { Title } = Typography;

const columns = [
  {
    title: '#',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Time',
    dataIndex: 'time',
  },
  {
    title: 'Kind',
    dataIndex: 'kind',
  },
];
function Appointment({ physician }) {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const fetchAppointments = async (id) => {
      const res = await fetch(`/api/appointments?physicianId=${id}`);
      const data = await res.json();
      setAppointments(data);
    };
    if (physician) {
      fetchAppointments(physician.id);
    }
  }, [physician, setAppointments]);
  return (
    <div style={{ margin: 25 }}>
      <div style={{ margin: '20px 40px' }}>
        <Title>
          Dr. {physician.firstName} {physician.lastName}
        </Title>
        <Title level={3}>{physician.email}</Title>
      </div>
      <Table columns={columns} dataSource={appointments} />
    </div>
  );
}

Appointment.propTypes = {
  physician: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default Appointment;
