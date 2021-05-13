import React from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PowerIcon from '@material-ui/icons/Power';
import {
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@material-ui/core/';
import useTheme from "../../const/Theme";
import './style.css';

const ListServices = ({ list }) => {
    const theme = useTheme()
    return (
        <List style={{ margin: 'auto' }}>
            {list.map((text) =>
            (
                <ListItem key={text} style={{ display: 'block' }}>
                    <div className='flex'>
                        <ListItemAvatar>
                            <PowerIcon color='primary' />
                        </ListItemAvatar>
                        <ListItemText
                            className={theme.COLOR_PARAGRAPH}
                            primary={text}
                        />
                    </div>
                    <div className='flex-end' >
                        <Button
                            variant="outlined"
                            color="primary"
                            href={`https://api.whatsapp.com/send?phone=5212221753621&text=Me gustaría hacer una cotización de ${text}`}
                            endIcon={<WhatsAppIcon />}
                        >
                            Cotización
                        </Button>
                    </div>
                </ListItem>
            )
            )}
        </List>
    );
}

export default ListServices;
