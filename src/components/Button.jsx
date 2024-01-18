import React from 'react'


function ButtonComponent({text,type,func  }) {

    return (
        <button onClick={func } className="text-white bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  " type={type} >{text}</button>
        )
}

export default ButtonComponent