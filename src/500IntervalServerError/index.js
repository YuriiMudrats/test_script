// import { withRouter } from "react-router";
import React,{Component} from 'react'

import './style.css'




export default class Pnf extends Component{
     render(){
        return(
            
           <div className='error-main-container'>
           <div className='error-block'>              
            <div className='center-container'>
            <div className='some-log'></div>
            </div>
            <div className='center-container' >                
            <p className='error-text-first'>העמוד שחיפשת לא נמצא</p>
            </div>
            <div className='center-container' >
            <p className='error-text-second'>שגיאה 500</p>
            </div>
            <div className='center-container'>
            <p className='error-text-third' >internal server error</p>
            </div>
            <div className='center-container'>
            <button onClick={()=>console.log('click')} className='back-button'>טען מחדש</button>
            </div>
           </div>  
        </div>
        )
     }
}

// export default withRouter(Pnf)
