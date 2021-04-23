import { services } from '../components/Services/services';

const servicesReducer = (state = services, action) => {
    switch(action.type) {
        case 'GET_SERVICES':
            return action.services;
        default:
            return state;
    };
};

export default servicesReducer;