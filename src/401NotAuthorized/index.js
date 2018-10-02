// import { withRouter } from "react-router";
import React,{Component} from 'react'

import  './style.css'




export default class NotAuth extends Component{
     render(){
        return(
            <div className='error-main-container'>
               <div className='error-block'>              
                <div className='center-container'>
                <div className='some-log'></div>
                </div>
                <div className='center-container' >                
                <p className='error-text-first'>הגעת לעמוד חסום</p>
                </div>
                <div className='center-container' >
                <p className='error-text-second'>שגיאה  403</p>
                </div>
                <div className='center-container'>
                <p className='error-text-third' >Not Authorized</p>
                </div>
                <div className='center-container'>
                <button onClick={()=>console.log('click')} className='back-button'>טען מחדש</button>
                </div>
               </div>  
            </div>
        )
     }
}

// export default withRouter(NotAuth)

