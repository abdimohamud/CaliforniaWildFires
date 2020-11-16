import React from 'react'
import { Icon } from '@iconify/react';
import locationIcon from '@iconify-icons/topcoat/location';

const LocationPin = ({text}) => {
    return (
        <div>
            <div className="pin">
                <Icon icon={locationIcon} className="pin-icon" />
                <p className="pin-text">{text}</p>
            </div>       
        </div>
    )
}

export default LocationPin


