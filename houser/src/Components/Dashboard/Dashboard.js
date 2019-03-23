import React, { Component }  from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            houseList: []
        }
    }


    componentDidMount(){
        this.getHouses()
    }


    getHouses = () => {
        axios.get(`/api/houselist`).then(response => {
            console.log(response)
            this.setState({
                houseList: response.data
            })
        })
    }




    render() { 
        const mappedHouses = this.state.houseList.map((house, index) => {
            return <House house={house} />
        })


        return ( 
            <div>
                {mappedHouses}
                <Link to="/wizard"><button className="add-new-property">Add New Property</button></Link>
            </div>
         );
    }
}
 
export default Dashboard;
