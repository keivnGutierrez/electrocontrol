import React from 'react';
import logo from '../../img/Logo.svg';
import CircularProgress from '@material-ui/core/CircularProgress';
// import name from '';
import Typography from '@material-ui/core/Typography';
const index = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh', flexDirection: 'column' }}>
            <img src={logo} alt='logo electrocontrol' style={{ width: 220, marginBottom: '6vh',}} />
            <CircularProgress color="primary" />
            <Typography variant="overline" style={{position:'absolute', bottom:'2vh'}} display="block" gutterBottom>@electrocontrol</Typography>
        </div>
    );
}

export default index;
