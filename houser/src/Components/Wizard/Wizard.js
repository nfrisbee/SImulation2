import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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




    render() { 
        return ( 
            <div>Wizard
                <Link><button className="cancel">Cancel</button></Link>
            </div>
         );
    }
}
 
export default Wizard;