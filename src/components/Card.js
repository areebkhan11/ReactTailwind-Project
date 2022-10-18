import React from 'react'

const Card = ({children}) => {
    return (
        <div>
            <div class="block rounded-lg shadow-lg bg-white w-80 text-center ">
                {children}
            </div>
        </div>

    )
}

export default Card