import React, { useEffect, useState } from 'react';
import { Menu, Layout } from 'antd';
import Appointment from '../../components/Appointment';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

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
        <Menu mode="inline" defaultOpenKeys={['physicians']}>
          <SubMenu key="physicians" title="PHYSICIANS">
            {physicians.map((d) => (
              <Menu.Item key={d.id} onClick={() => setSelectedPhysician(d)}>
                {d.name}
              </Menu.Item>
            ))}
          </SubMenu>
        </Menu>
      </Sider>
      <Content>{selectedPhysician && <Appointment physician={selectedPhysician} />}</Content>
    </Layout>
  );
}

export default Home;
