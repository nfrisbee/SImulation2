import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    updateNameInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    updateAddressInput = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    updateCityInput = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    updateStateInput = (event) => {
        this.setState({
          state: event.target.value
        })
      }

      updateZipInput = (event) => {
        this.setState({
          zip: event.target.value
        })
      }



      getHouseInfo = () => {
        axios.post(`/api/houseinfo`).then(response => {
            console.log(response)
            this.setState({
                houseList: response.data
            })
        })
    }


    render() { 
        return ( 
            <div>Wizard
                <Link><button className="cancel">Cancel</button></Link>
            </div>
         );
    }
}
 
export default Wizard;