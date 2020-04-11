import React from 'react'
import {Link} from 'react-router-dom'

 const  NoMatch=()=> (
     <div>
         <h2>Opps Page not Found</h2>
         <Link to='/'>
            <button>Back Home</button> 
         </Link>
     </div>
   
  )

export default NoMatch