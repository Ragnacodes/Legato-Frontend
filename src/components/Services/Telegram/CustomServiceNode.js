import React from 'react';
import CustomNode from '../CustomNode';
import TelegramIcon from '../../../styles/assets/services/telegram_256.png';

const CustomServiceNode = (props) => {
    const shape = (
        <div className="node telegram sidebar-icon service-icon--telegram">
            <img src={TelegramIcon} alt="telegram-logo" />
        </div>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;