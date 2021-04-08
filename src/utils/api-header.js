const header = () => {
    const token = JSON.parse(localStorage.getItem('state')).auth.uid;
    return {
        headers: {
            'Authorization': token
        }
    };
};

export default header;