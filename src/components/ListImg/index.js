import React from 'react';

const ListImg = ({ jobs }) => {

    return (
        <>
            <div className='container-img' >
                {
                    jobs.map((job) => (<img key={job} src={job} className='img-item' alt={job} />))
                }
            </div>
        </>
    )
}
export default ListImg;