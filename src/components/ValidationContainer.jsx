import React from 'react'
import FeildComponent from './FeildComponent'
import ErrorText from './ErrorText'
const ValidationContainer = ({errors,touched,name,type,placeholder}) => {
     

  return (
    <div className='relative mb-4'>
   <FeildComponent type={type} name={name} placeholder={placeholder} />
        {  

        errors[name] && touched[name] ? (
                            <ErrorText text={errors[name]} />
                        ) : null

                        
        }
    </div>
  )
}

export default ValidationContainer