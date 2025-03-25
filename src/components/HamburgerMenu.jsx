import React, { useState } from 'react';
import { Drawer, Button, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

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
          onClick={closeDrawer}
          items={[
            { key: '1', label: 'Home' },
            { key: '2', label: 'About' },
            { key: '3', label: 'Services' },
            { key: '4', label: 'Contact' },
          ]}
        />
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;
