import { withRouter } from "react-router";
import React,{Component} from 'react'

import './style.css'




class Pnf extends Component{
     render(){
        return(
            <div className='error-main-container'>
                <div className='some-log'></div>
                <p className='error-text-first'>העמוד שחיפשת לא נמצא</p>
                <p className='error-text-second'>שגיאה 500</p>
                <p className='error-text-third' >internal server error</p>
                <button><label className='button-text'>טען מחדש</label></button>
          </div>
        )
     }
}

export default withRouter(Pnf)
