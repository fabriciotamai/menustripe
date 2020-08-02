import React,{useContext} from 'react';

import {motion} from 'framer-motion';

import {Context}  from './provider';

export function DropdownSection ({option}){

    const { updateOptionProps, cachedId } = useContext(Context);

    const { id, optionDimensions,optionCenterX, contentDimensions} = option;

    const contentWidth = contentDimensions?.width || 0;
    const x = optionCenterX - contentWidth /2 ;

    const isActive = cachedId === id;

    return(
        <motion.div
         className="dropdown-section"
            initial={{
                x,
            }}
            animate={{
            x,
            opacity:isActive ? 1 : 0,
            }}
            >
            <option.WrappedContent/>

        </motion.div>
    )

}