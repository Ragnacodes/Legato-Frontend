import { useEffect } from 'react';
import { connect } from 'react-redux';
import { startAddConnection } from '../../actions/connections';
import { host } from '../../utils/host';

const Redirect = ({addConnection}) => {
    useEffect(() => {
        const url = window.location.href;
        const token_type = url.substring(url.lastIndexOf("redirect/")+9, url.lastIndexOf("?code"));
        const connection = switchCase(token_type, url);
        if (connection === 'wrong') {
            window.location.href = `${host}/connections`;
        }
        else {
            addConnection(connection).then(()=>{ 
                window.location.href = `${host}/connections`;
            });
        };
    },[addConnection]);

    return null;
}

const switchCase = (type, url) => {
    switch (type) {
        case 'github':
            return {
                name: 'my github',
                type: 'githubs',
                data: { token: url.substring(url.lastIndexOf("?code=") + 6, url.indexOf("&state"))},
            };

        case 'spotify':
            return {
                name: 'my spotify',
                type: 'spotifies',
                data: { token: url.substring(url.lastIndexOf("?code=") + 6, url.indexOf("&state"))},
            };
        
        case 'discord':
            return {
                name: "my discord",
                data:{ guildId: url.substring(url.lastIndexOf("guild_id=") + 9, url.lastIndexOf("&permissions"))},
                type: 'discords'
            };

        case 'gmail':
            return {
                type: 'gmails',
                data: { token: url.substring(url.lastIndexOf("?code=") + 6, url.indexOf("&")) },
                name: 'my gmail'
            };

        default:
            return 'wrong';
    };
}

const mapDispatchToProps = (dispatch) => ({
    addConnection: (type, data) => dispatch(startAddConnection(type, data)),
  });

export default connect(null, mapDispatchToProps)(Redirect);