import React from 'react';
import { connect } from 'react-redux';
import SidebarItem from '../Sketchpad/Sidebar/SidebarItem';

const CustomSidebarItem = ({ icon, serviceName, services }) => {
    const triggers = services[serviceName].filter(service => service.type === 'trigger');
    const actions = services[serviceName].filter(service => service.type === 'action');

    return (
        <SidebarItem
            icon={icon}
            service={serviceName}
            triggers={triggers}
            actions={actions}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        services: state.services
    };
};

export default connect(mapStateToProps)(CustomSidebarItem);