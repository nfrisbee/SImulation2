import React, { Component }  from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            houseList: [
                {
                    id: 1,
                    name: 'test'
                }
            ]
        }
    }

    getHouses = () => {
        return this.state.houseList.map(house => {
            return (
                <House 
                    name={house.name}
                />
            
            )
        }) 
    }


    render() { 
        return ( 
            <div>
                {this.getHouses()}
                <Link to="/wizard"><button className="add-new-property">Add New Property</button></Link>
            </div>
         );
    }
}
 
export default Dashboard;
