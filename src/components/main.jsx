import React, {Component} from 'react';
import styles from './styling.module.css';
import Subcontent from './subcontent'
import Advertisement from './advertisement'

class Main extends Component {
    render() {
        return (
        <div className={ styles.main} > 
            {/* <div className= {styles.flex}>
                <Subcontent />
                <Subcontent />
                <Subcontent />
            </div>
            <div>
                <Advertisement />
            </div> */}
        </div>
        )
    }
}

export default Main;