import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const App = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="../assets/images/bjj_pics/" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);
export default App;