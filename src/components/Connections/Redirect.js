import { useEffect } from 'react';
import { connect } from 'react-redux';
import { startAddConnection } from '../../actions/connections';


const Redirect = ({addConnection}) => {
    useEffect(() => {
        const url = window.location.href;
        const token_type = url.substring(url.lastIndexOf("redirect/")+9, url.lastIndexOf("?code"));
        console.log(token_type);
        const temp = switchCase(token_type, url);
        if (temp === 'wrong') {
            window.location.href = "http://localhost:3000/connections";
        };
        const connection = {
            name: "my " + token_type, 
            data : {token: temp[1]},
            type: temp[0]
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
            return ['githubs', url.substring(url.lastIndexOf("?code=") + 6, url.indexOf("&state"))];
        case 'spotify':
            return ['spotifies',  url.substring(url.lastIndexOf("?code=") + 6, url.indexOf("&state"))];
        case 'discord':
            return ['discords', url.substring(url.lastIndexOf("?code=") + 6, url.indexOf("&"))];
        case 'gmail':
            return ['gmails', url.substring(url.lastIndexOf("?code=") + 6, url.indexOf("&"))];
        default:
            return 'wrong';
    };
}

const mapDispatchToProps = (dispatch) => ({
    addConnection: (type, data) => dispatch(startAddConnection(type, data)),
  });

export default connect(null, mapDispatchToProps)(Redirect);