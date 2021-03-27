import React from 'react';
import style from '../../styles/layout/main';

const Main = (props) => {
    const classes = style();
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <props.component />
        </main>
    );
}

export default Main;