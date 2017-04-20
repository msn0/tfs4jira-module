import React from 'react';
import style from './loader.pcss';

export function Loader () {
    return (
        <img className={ style.loader }
             src="https://portal.smartdooranddelivery.com/wp-content/themes/SDD-Child-Theme/images/loader.svg" />
    );
}
