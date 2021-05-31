import React from 'react';
import CustomSidebarItem from '../ToolboxSidebarItem';
import SidebarServiceIcon from '../../../ServiceIcons/SidebarServiceIcon';

const SidebarItem = () => {
  return (
    <CustomSidebarItem
      icon={<SidebarServiceIcon service="repeater" />}
      subService="repeater"
    />
  );
};

export default SidebarItem;
