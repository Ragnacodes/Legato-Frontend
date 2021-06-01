import { useEffect } from 'react';
import { connect } from 'react-redux';
import { startAddConnection } from '../../actions/connections';


const Redirect = ({addConnection}) => {
    useEffect(() => {
        const url = window.location.href;
        let token_type = url.substring(url.lastIndexOf("redirect/")+9, url.lastIndexOf("?code"));
        const data = {}
        if(token_type === 'discord')
        {
            data['guildId'] = switchCase('discord', url);
            token_type = 'discords';
        }
        else {
            data['token'] = switchCase(token_type, url);
        }
        const connection = {
            name: "my " + token_type, 
            data : data,
            type: token_type
        }
        console.log(connection);
        addConnection(connection).then(()=>{ 
            window.location.href = "http://localhost:3000/connections";
        });
    },[addConnection]);

    return null;
}

const switchCase = (type, url) => {
    switch (type) {
        case 'github':
            return url.substring(url.lastIndexOf("?code=") + 6, url.lastIndexOf("&state"));
        case 'spotify':
            return url.substring(url.lastIndexOf("?code=") + 6, url.lastIndexOf("&state"));
        case 'discord':
            return url.substring(url.lastIndexOf("guild_id=") + 9, url.lastIndexOf("&permissions"));
        default:
            return url.substring(url.indexOf("code=")+5);
    };
}

const mapDispatchToProps = (dispatch) => ({
    addConnection: (type, data) => dispatch(startAddConnection(type, data)),
  });

export default connect(null, mapDispatchToProps)(Redirect);