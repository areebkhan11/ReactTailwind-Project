import React, { useState } from 'react';
import AccordianLayout from './AccordianLayout/AccordianLayout';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null); 
  return (
    <div className='flex flex-col justify-left items-left' >
    <AccordianLayout 
            title="TASK (to be assigned to user) "
            index={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
      Task(to be assigned to user)   
    </AccordianLayout>

    <AccordianLayout 
            title="OUTCOME (Response of Activity Performed)"
            index={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
      This is Accordion 2 Content    
    </AccordianLayout>
</div>
  );
};

export default Accordion;