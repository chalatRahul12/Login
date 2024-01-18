import React from 'react'
import {Field} from 'formik'

function FeildComponent({type,name,placeholder }) {
    return (
        <>
            <Field className='border-2 border-slate-100 border-solid bg-slate-100 p-[10px] rounded-md shadow-md'  type={type} name={name} placeholder={ placeholder} />
            </>
        )
}

export default FeildComponent;