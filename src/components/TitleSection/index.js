import React from 'react';
import { Typography } from '@material-ui/core';

import useTheme from '../../const/Theme';

const TitleSection = ({ title, subtitle }) => {
    const theme = useTheme();

    return (
        <>
            <Typography variant="h4" className={theme.COLOR_TITLE} component="h1" gutterBottom={true} align='center' bool='true' style={{ marginBottom: '2vh', marginTop: '8vh' }}>
                {title}
            </Typography>
            <Typography className={theme.COLOR_PARAGRAPH} style={{ width: '80%', margin: 'auto', marginBottom: '5vh' }} variant="body1" align='center'  >
                {subtitle}
            </Typography>
        </>
    )

}

export default TitleSection;