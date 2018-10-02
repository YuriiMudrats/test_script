import { withRouter } from "react-router";
import React,{Component} from 'react'

import  './style.css'




class NotAuth extends Component{
     render(){
        return(
            <div className='error-main-container'>
               <div className='error-block'>
               <div className='center-cont'>
                <div className='some-log'></div>
                </div>
                <p className='error-text-first'>הגעת לעמוד חסום</p>
                <p className='error-text-second'>שגיאה  403</p>
                <p className='error-text-third' >Not Authorized</p>
                <button className='back-button'>טען מחדש</button>
               </div>  
            </div>
        )
     }
}

export default withRouter(NotAuth)

