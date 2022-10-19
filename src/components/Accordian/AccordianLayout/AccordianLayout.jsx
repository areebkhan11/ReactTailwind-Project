import React from 'react';
import { MdKeyboardArrowUp,MdKeyboardArrowDown } from "react-icons/md";
const AccordionLayout = ({title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => {
    if(activeIndex !== index) 
    { 
      setActiveIndex(index)
    }
    else
      {
        setActiveIndex(null)
      }
  };
  return (
    <>
     <div onClick={() => handleSetIndex(index)} className='flex w-3/4 justify-between p-2 mt-2 rounded bg-white-400 border-x-2 border-y-2 border-black-400 dark:border-black-400'>
            <div className='flex'>
                <div className='text-black-500 dark:text-black-400 font-bold'>{title}</div>
            </div>
            <div className="flex items-center justify-center">
            {
                (activeIndex === index) 
                ? <MdKeyboardArrowUp className='w-8 h-8' />
                : <MdKeyboardArrowDown className='w-8 h-8' />
                }
            </div>
        </div>
        {(activeIndex === index) && (
          <div className="flex items-left justify-left">
            <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6">
              {children}
            </div>
            </div>
        )}
</>
  );
};

export default AccordionLayout;