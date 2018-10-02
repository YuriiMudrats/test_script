import { withRouter } from "react-router";
import React,{Component} from 'react'

import './style.css'



class Pnf extends Component{
     render(){
        return(
            <div className='error-main-container'>
                <div className='some-log'></div>
                <p className='error-text-first'>העמוד שחיפשת לא נמצא</p>
                <p className='error-text-second'>שגיאה 404</p>
                <p className='error-text-third' >Page not found</p>
                <button>טען מחדש</button>
          </div>
        )
     }
}
//טען מחדש button name

export default withRouter(Pnf)

