import React from 'react'


function PasswdAuth({ isTrue }) {
    if (!isTrue) return null
    return (
        <div className='bg-red-400 p-[10px]'>
            <h1>Passwords Do not Match</h1>
          </div>
        )
}

export default PasswdAuth;