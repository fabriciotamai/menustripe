import React,{useRef, useState, useContext, useEffect } from 'react';

import {motion} from 'framer-motion';

import { useDimensions} from './dimensions';
import {Context} from './provider';
 
let lastOptionId = 0 ;


export function DropdownOption({ name, content: Content, backgroundHeight}){
   const idRef = useRef(++lastOptionId);
   const id = idRef.current;

   const[ optionHook, optionDimensions] = useDimensions();
   const [ registered, setRegistered] = useState(false);


   const {

       registerOpion,
       updateOptionProps,
       deleteOptionById,
       setTargetId,
       targetId,


   } = useContext(Context);

   useEffect(()=>{
       if(!registered && optionDimensions){
           const WareppedContent = () => {
               const contentRef = useRef();
        
            useEffect(()=>{
                const contentDimensions = contentRef.current.getBoundingClientrect();
                updateOptionProps(id, {contentDimensions})
            },[])

            return(
                <div ref={contentRef}>
                    <Content/>
                </div>
            )

           


            return(
                <div>
                    <Content/>
                </div>
            )
           }
       }
  


   },[]);

    return(
    <motion.button className="dropdown-option">{name}</motion.button>
    );
}