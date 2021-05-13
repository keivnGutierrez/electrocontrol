import React, { useContext } from 'react';
import { Switch, FormControlLabel } from '@material-ui/core';
import ThemeContext from "../../context/ThemeContext";
import TitleSection from '../../components/TitleSection';
import service from '../../img/service.svg';

import './style.css';

const Index = () => {

    const { themeDark, setTheme } = useContext(ThemeContext)

    // let color='black';
    const [color,setcolor] =React.useState('black')
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
    });
    const handleChange = (event) => {
        if (themeDark === true) {
            document.body.style = "background: white;";
            setcolor('black');
        
        } else {
            setcolor('white');
            document.body.style = "background: #02020f;";
        }
        setTheme(!themeDark);
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <div >
            <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                <FormControlLabel
                    style={{ marginRight: '10vw', color:color }}
                    control={
                        <Switch
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                            size='medium'
                            color="secondary"
                        />
                    }
                    label="NOCHE"
                />
            </div>
            <TitleSection
                title='Electrocontrol'
                subtitle=' Mantenimiento Electromecánico Industrial,
                Reparación integral de motores Eléctricos (Embobinado),
                Instalaciones Eléctricas residenciales, comerciales e Industriales,
                Automatización e instrumentación.'
            />
            <img src={service} className='img-service' alt='services electrocontrol ' />
        </div>
    );
}

export default Index;
