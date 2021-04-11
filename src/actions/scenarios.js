import { v4 as uuid } from 'uuid';
import axios from 'axios';

export const loadScenarios = async () => {
    axios.get("http://localhost:8080/api/users/arman/scenarios",
     {headers: {"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFybWFuIiwiZXhwIjoxNjE3OTExODg4fQ.V7BR--E0tR2j-qIwlyBhDW2wOFG4K89nh6_O6HmGTIc"}})
     .then(res => {
         console.log("saaskla");
         console.log(res);
         return {
            type: 'LOAD_SCENARIOS',
            scenarios: []
        }
     }).catch(err => {
        console.log("in error");
         console.log(err);
         return {
            type: 'LOAD_SCENARIOS',
            scenarios: []
         }
     });
}

export const addScenario = ({
    name = '',
    isActive = false,
    interval = 0,
    nodes = []
}) => {
    return {
        type: 'ADD_SCENARIO',
        scenario: {
            id: uuid(),
            name,
            isActive,
            interval,
            nodes
        }
    };
};

export const removeScenario = (id) => {
    return {
        type: 'REMOVE_SCENARIO',
        id
    };
}

export const editScenario = (id, updates) => {
    return {
        type: 'EDIT_SCENARIO',
        id,
        updates
    };
};