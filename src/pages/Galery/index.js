import React from 'react';
import TitleSection from '../../components/TitleSection';
import ListImg from '../../components/ListImg';
import { PHOTOS } from '../../const/Data';

import './style.css'

const Galery = () => {
    return (
        <section id='galery'>
            <TitleSection
                title='Galería de trabajos'
                subtitle='Trabajos con excelentes normas de calidad y siempre pensado en nuestros clientes'
            />
            <ListImg jobs={PHOTOS} />
        </section>
    );
}

export default Galery;
