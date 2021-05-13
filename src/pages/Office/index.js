import React from 'react';
import Mapp from '../../components/Map';
import TitleSection from '../../components/TitleSection';

const Office = () => {
    return (
        <section id='office' >
            <TitleSection
                title='Oficinas'
                subtitle='Nos encontramos en Barrio de Analco
                Puebla, Pue.'
            />
            <Mapp />
        </section>
    );
}

export default Office;
