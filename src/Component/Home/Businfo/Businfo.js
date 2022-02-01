import React from 'react';
import './Businfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Businfo = ({ buinfo }) => {
    console.log(buinfo)
    return (
        <div className='col-md-4 text-white '>
            <div className={`d-flex info-gg justify-content-center align-items-center  uinfo-${buinfo.background}`}>
                <div>
                    <FontAwesomeIcon className="fo-icon" icon={buinfo.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h4>{buinfo.title}</h4>
                    <small>{buinfo.description}</small>

                </div>
            </div>

        </div>
    );
};

export default Businfo;