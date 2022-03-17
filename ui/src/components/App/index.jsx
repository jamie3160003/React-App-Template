import React from 'react';
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import routes from '../../configs/routes';
import 'antd/dist/antd.css';

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
