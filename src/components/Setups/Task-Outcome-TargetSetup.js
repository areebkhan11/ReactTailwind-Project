import React from 'react'
import Accordion from '../Accordian/Accordian'
import SetupNavBar from '../custom-elements/SetupNavbar'

const TaskOutcome = () => {
    return (
        <div>
            <SetupNavBar />
            <div className='flex justify-start mt-7 mb-4 bg-[#039be5] p-1 text-white text-2xl'>
                <h3>Task/Outcome/Target Setup</h3>
            </div>
            <Accordion/>
        </div>
    )
}

export default TaskOutcome