import React from 'react';
import { Typography} from '@material-ui/core';
import useTheme from '../../const/Theme';
import ItemFooter from '../ItemFooter';

const Footer = () => {
    const theme = useTheme();

    return (
        <footer style={{ marginTop: '95vh' }}>
            <div style={{display:'flex',flexDirection:'column' }}>
                {/* <ItemFooter mail='direccionproyectoselectricos@gmail.com'/>  */}
                <ItemFooter mail='ventaselectrocontrol@gmail.com'/>                
                <ItemFooter phone='246 1753621'/>                
            </div>
            <Typography className={theme.COLOR_PARAGRAPH} variant='overline' align='center' component='h6' >COPYRIGHT ©2021 ALL RIGHTS RESERVED</Typography>
        </footer>
    )

}

export default Footer;