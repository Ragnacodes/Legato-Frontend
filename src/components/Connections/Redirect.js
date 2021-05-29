import { useEffect } from 'react';
import { connect } from 'react-redux';
import { startAddConnection } from '../../actions/connections';


const Redirect = ({addConnection}) => {
    useEffect(() => {
        const url = window.location.href;
        const token_type = url.slice(url.indexOf("redirect/")+9, url.indexOf("/?code"));
        const connection = {
            name: "my " + token_type, 
            data : {token: switchCase(token_type, url)},
            type: token_type
        }
        addConnection(connection).then(()=>{ 
            // window.location.href = "http://localhost:3000/connections"
        });
    },[addConnection]);

    return null;
}

const switchCase = (type, url) => {
    switch (type) {
        case 'github':
            return url.substring(url.lastIndexOf("?code=") + 6, url.lastIndexOf("&state"));
        default:
            return url.substring(url.indexOf("code=")+5);
    };
}

const mapDispatchToProps = (dispatch) => ({
    addConnection: (type, data) => dispatch(startAddConnection(type, data)),
  });

export default connect(null, mapDispatchToProps)(Redirect);