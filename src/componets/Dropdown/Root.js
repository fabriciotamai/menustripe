import React,{useState, useMemo, useContext, useEffect} from 'react';

import { motion } from 'framer-motion';


import { Context } from './provider';

import {DropdownSection} from './Section';

const refDuration = 0.22;


    export function DropdownRoot(){

        const { options, cachedId, getOptionById, targetId } = useContext(Context);

    const cachedOption = useMemo(() => getOptionById(cachedId), [
        cachedId,
        getOptionById,
      ]);

  

    let [ width, height, x ] = [0, 0 ,0];

    
    if (cachedOption) {
        const { optionCenterX, contentDimensions } = cachedOption;
    
        width = contentDimensions?.width;
        height = contentDimensions?.height;
        x = optionCenterX - width / 2;
      }

     
    const [ hovering, setHovering] = useState(false);
    
    
    const isActive = targetId !== null || hovering;

  const [hasInteracted, setHasInteracted] = useState(false);
  const isFirstInteraction = isActive && !hasInteracted;

  if(isFirstInteraction) {
      setTimeout(() => { 
          if(!hasInteracted) setHasInteracted(true);

      }, 15 );
    }
      
     useEffect(()=>{
         if(isActive) return;

         let timeout  = setTimeout(
             () => setHasInteracted(false),
             refDuration * 1000 * 0.9,
         )

         return ( ) =>  clearTimeout(timeout);
        
     },[isActive]);

    
  

  return (
      <div style={{perspective: 2000 }}>
          <motion.div 
        clssName="dropdown-root"
        animate={{
            opacity: isActive ? 1 :0,
            rotateX: isActive ? 0: -50,
            }}
        transition={{
            opacity:{duration : refDuration, delay : 0.05}, 
            rotateX:{duration : refDuration, delay : 0.05}, 


        }}
         >
            <motion.div
                className="dropdown-container"
                animate={{
                    x,
            width,
            height,
            pointerEvents: isActive ? 'unset' : 'none',
                }}
                transition={{
                    ease: 'easeOut',
                    x : isFirstInteraction ? { duration : 0 } : refDuration,
                    width : { duration : isFirstInteraction ? 0 : refDuration *  0.93},
                    height : { duration : isFirstInteraction ? 0 : refDuration *  0.93},
                    pointerEvents : { delay : 0.5} ,
                }}
              onHoverStart={() => setHovering(true)}
              onHoverEnd={() => setHovering(false)}
            >
                <motion.div
                    animate={{
                        x: -x
                    }}
                    transition={{ 
                        x:isFirstInteraction ? { duration : 0 } : undefined,
                    }}
                    >{options.map((item)=> (
                        <DropdownSection key={item.id} option={item}/>
                    ))}
             </motion.div>
             <DropdownArrow isFirstInteraction={isFirstInteraction} />

            </motion.div>
        </motion.div>
          

      </div>

  )
  

    return(
        <motion.div 
        clssName="dropdown-root"
        animate={{
            opacity: isActive ? 1 :0,
            }}
        transition={{
            opacity:{duration : refDuration, delay : 0.05}, 

        }}
         >
            <motion.div
                className="dropdown-container"
                animate={{
                    x,
            width,
            height,
            pointerEvents: isActive ? 'unset' : 'none',
                }}
                transition={{
                    ease: 'easeOut',
                    x : isFirstInteraction ? { duration : 0 } : refDuration,
                    width : { duration : isFirstInteraction ? 0 : refDuration *  0.93},
                    height : { duration : isFirstInteraction ? 0 : refDuration *  0.93},
                    pointerEvents : { delay : 0.5} ,
                }}
              onHoverStart={() => setHovering(true)}
              onHoverEnd={() => setHovering(false)}
            >
                <DropdownBackground/>
                <motion.div
                    animate={{
                        x: -x
                    }}
                    transition={{ 
                        x:isFirstInteraction ? { duration : 0 } : undefined,
                    }}
                    >{options.map((item)=> (
                        <DropdownSection key={item.id} option={item}/>
                    ))}
             </motion.div>
             <DropdownArrow isFirstInteraction={isFirstInteraction} />

            </motion.div>
        </motion.div>
    )
 
}

    function DropdownArrow({isFirstInteraction}){
        const { cachedId, getOptionById } = useContext(Context);

        const cachedOption = useMemo (()=> getOptionById(cachedId),[
            cachedId,
            getOptionById,
        ])

        const x = cachedOption ? cachedOption.optionCenterX : 0 ;
        return (
        <motion.div
        className="dropdown-arrow"
        initial={{
            opacity: 0,
        }}
        animate={{x,
        pointerEvents : 'none' , 
        opacity: x > 0 ? 1 : 0,
}}
        transition={{
            ease:'easeOut',
            x:{ duration  : isFirstInteraction ? 0: refDuration}
        }}
 />
   )

}

    export function DropdownBackground(){
        const { cachedId, getOptionById } = useContext(Context);

        const cachedOption = useMemo(()=> getOptionById(cachedId),[
            cachedId,
            getOptionById,
        ]);

        const backgroundHeight = cachedOption?.backgroundHeight || 0;

        
        return(
            <motion.div
            className="dropdown-background"
            animate={{
                heigth:backgroundHeight,
            }}
                transition={{
                    ease:'easeOut',
                    duration:refDuration,

                
            }}
            />

        )

    } 