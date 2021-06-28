import React from 'react';
import Header from './Header';
import AddressMap from './Map';


class Contact extends React.Component {


    render() {
        return (
            <div className="contact">
                <div>
                    <Header />
                    <h2>Elérhetőség</h2>
                    <p>Címünk:</p>
                    <p>Telefon:</p>
                    <div className="map">
                        <AddressMap />
                    </div>
                    

                </div>
            </div>
        );
    }
}

export default Contact;

  