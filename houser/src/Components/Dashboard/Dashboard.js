import React, { Component }  from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div>I don't know what I'm doing
                <House />
                <Link to="/wizard"><button className="add-new-property">Add New Property</button></Link>
            </div>
         );
    }
}
 
export default Dashboard;
