import React, {Component} from 'react'
import './MoarParallax.css'

class MoarParallax extends Component{
    render(){
        return (
            <div className="MoarParallax">
    
                <div className="para_container">
                    <div className="para_obj">1</div>
                    <div className="para_obj">2</div>
                </div>

                <div className="para_container">
                    <div className="para_obj">3</div>
                    <div className="para_obj">4</div>
                </div>
                
                <div className="para_container">
                    <div className="para_obj">5</div>
                    <div className="para_obj">6</div>
                </div>
    
            </div>
        )
    }
}

export default MoarParallax