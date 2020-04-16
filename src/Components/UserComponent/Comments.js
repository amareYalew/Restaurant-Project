import React, { Component } from 'react'
import axios from 'axios';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateComments extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            description: "",
            date: new Date(),
        }
    }

    commentfunc = ()=>{
        axios.get('http://localhost:5000/comment')
            .then(response => {
                console.log(response.data[0].description)
                if (response.data) {
                    this.setState({
                        ...this.state,
                        // users: response.data.map(user => user.username),
                        description: response.data[0].description
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
        }
    


    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const comments = {
            username: this.state.username,
            description: this.state.description,
            date: this.state.date
        }

        console.log(comments);
        axios.post('http://localhost:5000/comment/add', comments)
            .then(res => console.log(res.data));
        //window.location = '/';
    }


    render() {
        return (
            <div>
                <h4> Please leave a comment! </h4>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Your name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <textarea type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>

                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Post Comment" className="btn btn-primary" />
                    </div>
                   
                </form> 
               
            </div>
        )
    }
}






