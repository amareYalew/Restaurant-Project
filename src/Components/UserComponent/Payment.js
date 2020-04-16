import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import 'react-credit-cards/lib/styles.scss'

export default class PaymentForm extends React.Component {
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    signUpHandler = () => {
    this.props.history.push('/')
    }
    render() {
        return (
            <div container>

                <div id="PaymentForm">

                    <div >
                        <h2>Payment Form </h2>
                        <Cards
                        cvc={this.state.cvc}
                        expiry={this.state.expiry}
                        focus={this.state.focus}
                        name={this.state.name}
                        number={this.state.number}
                    />
                        <form onSubmit={(event) => { this.signUpHandler() }} className="FormFields">
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="title">Your Name </label>
                                <input type="text" id="titleId" className="FormField__Input" name="title" required />
                            </div>

                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="image">Card Number</label>
                                <input type="" id="image" name="avater" accept='number'
                                  />
                            </div>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="image">Price</label>
                                <input type="number" id="image" name="avater" accept='number'
                                   required />
                            </div>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="Image">Address </label>
                                <input type="text" id="DescriptionId" className="FormField__Input" name="Description"  />
                            </div>

                            <div className="FormField">

                                <button type="submit" className="FormField__Button mr-20">Submit</button>

                            </div>
                        </form>
                    </div>
                 

                    <div>

                        <div>
                            <p></p>
                        </div>

                    </div>



                </div>
            </div>);
    }
}