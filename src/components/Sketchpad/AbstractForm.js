import React from 'react';
import { connect } from 'react-redux';
import { editElement } from '../../actions/sketchpad';
import GithubForm from './Forms/GithubForm';
import SpotifyForm from './Forms/SpotifyForm';
import SSHForm from './Forms/SSHForm';
import TelegramForm from './Forms/TelegramForm';
import WebhookForm from './Forms/WebhookForm';

const AbstractForm = (props) => {
    switch (props.type) {
        case 'github':
            return <GithubForm {...props} />;
        case 'spotify':
            return <SpotifyForm {...props} />;
        case 'ssh':
            return <SSHForm {...props} />;
        case 'telegram':
            return <TelegramForm {...props} />;
        case 'webhook':
            return <WebhookForm {...props} />;
        default:
            return null;
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        editElement: (type, data) => dispatch(editElement(type, data))
    }
}

export default connect(null, mapDispatchToProps)(AbstractForm);