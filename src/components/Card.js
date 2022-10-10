import React from 'react'

const Card = ({card}) => {
    return (
        <div>
            <div class="block rounded-lg shadow-lg bg-white w-80 text-center">
                <div class="py-3 px-6 border-gray-300 font-medium flex justify-start">
                    {card.name}
                </div>
                <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Special title treatment</h5>
                    <p class={`text-base mb-4 font-medium text-7xl`} style={{color: card.color}}>
                        0
                    </p>
                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">RTM</button>
                </div>
                <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                    2 days ago
                </div>
            </div>
        </div>

    )
}

export default Card