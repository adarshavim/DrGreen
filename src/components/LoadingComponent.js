import React from 'react';
import { Heart } from 'react-spinners-css';

export const Loading = () => {
    return(
            <div className="spinner">
            <Heart color="#be97e8" size={200} />
            </div>
    );
};