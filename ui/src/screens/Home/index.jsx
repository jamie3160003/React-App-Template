import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import Appointment from '../../components/Appointment';
import Navbar from '../../components/Navbar';

const { Sider, Content } = Layout;

function Home() {
  const [physicians, setPhysicians] = useState([]);
  const [selectedPhysician, setSelectedPhysician] = useState();

  useEffect(() => {
    const fetchPhysicans = async () => {
      const res = await fetch('/api/physicians');
      const data = await res.json();
      setPhysicians(data);
    };
    fetchPhysicans();
  }, []);

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider>
        <Navbar physicians={physicians} setSelectedPhysician={setSelectedPhysician} />
      </Sider>
      <Content>{selectedPhysician && <Appointment physician={selectedPhysician} />}</Content>
    </Layout>
  );
}

export default Home;
