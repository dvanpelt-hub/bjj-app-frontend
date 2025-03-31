import React, { useState } from 'react';
import { Drawer, Button, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const showDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

   // maps menu keys to route paths
  const menuRoutes = {
    '1': '/',
    '2': '/search-coaches',
    '3': '/about',
    '4': '/contact',
  };

  const handleMenuClick = ({ key }) => {
    const route = menuRoutes[key];
    if (route) {
      navigate(route);
    }
    closeDrawer();
  };

  return (
    <div className="mobile-menu">
      <Button 
        type="text" 
        icon={<MenuOutlined />} 
        onClick={showDrawer} 
        style={{ fontSize: '18px', color: 'white' }}
      />

      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        open={open}
      >
        <Menu 
          mode="inline" 
          onClick={handleMenuClick}
          items={[
            { key: '1', label: 'Home' },
            { key: '2', label: 'Coaches' },
            { key: '3', label: 'About' },
            { key: '4', label: 'Contact' },
          ]}
        />
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;
