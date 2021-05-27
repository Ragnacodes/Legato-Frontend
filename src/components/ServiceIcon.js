import React from 'react';
import clsx from 'clsx';

const Icon = ({service, size, className}) => {
    const res = size==='small'? 64 : 256;
    const imageName = `${service}_${res}`;
    const getImage = (image) => {
        return require('../styles/assets/services/' + image + '.png').default
    }
    return (
        <div className={clsx(className, `icon-component service-icon--${service}`)}>
        <img src={getImage(imageName)} alt={`${service}-logo`} draggable={false} />
        </div>  
    )
};

export default Icon;