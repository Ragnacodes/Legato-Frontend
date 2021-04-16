import React from 'react';
import Typography from '@material-ui/core/Typography';
import EmptyBoxSVG from '../../styles/assets/empty-box.svg';

const NoItem = ({ name }) => {
    return (
        <div className="centered-container">
            <img
                src={EmptyBoxSVG}
                width="400px"
                height="400px"
                alt={`No ${name} Found.`} 
            />
            <Typography
                align="center"
                variant="overline"
                gutterBottom={true}
            >
                No Item
            </Typography>
            <Typography
                align="center"
                variant="caption"
            >
                You haven't created any {name}.
            </Typography>
        </div>
    );
};

export default NoItem;