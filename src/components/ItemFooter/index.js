import React from 'react';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const ItemFooter = ({mail,phone}) => {
    
    const url=phone?`https://api.whatsapp.com/send?phone=5212221753621&text=Me gustaría saber mas sobre sus servicios`:`mailto:${mail}?subject=Información sobre sus servicos.`;
    return (
        <Button
            variant='text'
            color="primary"
            href={url}
            endIcon={<SendIcon color='secondary' />}
        >
            {phone?phone:window.innerWidth <281 ? 'Email':mail}
        </Button>
    )
}

export default ItemFooter;