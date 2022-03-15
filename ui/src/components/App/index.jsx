import React from 'react';
import { Layout } from 'antd';
import { Routes, Route, Link } from 'react-router-dom';
import routes from '../../configs/routes';
import 'antd/dist/antd.css';

const { Content, Header } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/page-a">PageA</Link>
      </Header>
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
