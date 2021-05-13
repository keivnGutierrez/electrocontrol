import React from 'react';
import ListServices from '../../components/ListServices';
import Animation from '../../components/Animation';
import foco from '../../animations/foco.json';
import TitleSection from '../../components/TitleSection';
import { SERVICES } from '../../const/Data';

import './style.css';

const Services = () => {
    return (
        <section id='services'>
            <TitleSection
                title='Servicios'
                subtitle='Somos una empresa multidisciplinaria con expertos en diferentes campos.'
            />
            <div className='container-services'>
                <div style={{ display: 'flex', alignItems: 'center', minWidth: '45vw' }}>
                    <Animation
                        animationData={foco}
                        heightDesk={400}
                    />
                </div>
                <ListServices
                    list={SERVICES}
                />
            </div>
        </section>
    );
}

export default Services;
