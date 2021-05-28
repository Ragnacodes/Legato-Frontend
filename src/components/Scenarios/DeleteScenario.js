import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startRemoveScenario } from '../../actions/scenarios';
import { Tooltip, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import YesNoModal from '../YesNoModal';

const DeleteScenario = ({ id, name }) => {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();

    const handleRemoveScenario = () => {
        dispatch(startRemoveScenario(id));
    };

    return (
        <React.Fragment>
            <Tooltip
                title="Delete scenario."
                placement="top"
            >
                <IconButton
                    color="secondary"
                    onClick={() => setVisible(true)}
                >
                    <Delete
                        fontSize="small" 
                    />
                </IconButton>
            </Tooltip>
            <YesNoModal
                text={`Delete ${name} ?`}
                visible={visible}
                setVisible={setVisible}
                handleYes={handleRemoveScenario}
                handleNo={() => {}} 
            />
        </React.Fragment>
    );
};

export default DeleteScenario;