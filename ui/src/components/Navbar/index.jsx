import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Typography } from 'antd';

const { SubMenu } = Menu;
const { Title } = Typography;

function Navbar({ physicians, setSelectedPhysician }) {
  return (
    <Menu mode="inline" defaultOpenKeys={['physicians']} style={{ height: '100vh' }}>
      <Title style={{ textAlign: 'center', marginTop: 20 }}>Notable</Title>
      <SubMenu key="physicians" title="PHYSICIANS">
        {physicians.map((d) => (
          <Menu.Item key={d.id} onClick={() => setSelectedPhysician(d)}>
            {d.name}
          </Menu.Item>
        ))}
      </SubMenu>
    </Menu>
  );
}

Navbar.propTypes = {
  setSelectedPhysician: PropTypes.func.isRequired,
  physicians: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
};

export default Navbar;
