import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { Item } from 'react-bootstrap/lib/Breadcrumb';

const Comments = props => (
    <tr>
        <td>{props.comments.username}</td>
        <td>{props.comments.description}</td>
        <td>{props.comments.date.substring(0, 10)}</td>

    </tr>
)

export default class ExercisesList extends Component {
    state = {
        comments: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/comment/')
            .then(response => {
                console.log(response.data)
                this.setState({ comments: response.data })
            })
            .catch((error) => {
                console.log(error);
            })

    }
    // retuns Comment component
    commentList() {
        const mine = this.state.comments.map(currentcomment => {
          return currentcomment
        })
        return mine
    }

    render() {

        
        const commen = this.commentList();
        let displaycomment = commen.map((item, index) => {
            console.log(item)
            return (
                <div>
                <div className="form-group"  style={foodCss} >
                <strong multiple class="form-control" id="exampleFormControlSelect2">
            <p> @ {item.username} #{item.description}, On Date#:{item.date} </p>
                </strong>
            </div>
                </div>
            )
        })
        return (
            <div>{displaycomment}</div>
        )
    }
}
const foodCss = {
    borderRadius: "5px",
    boxShadow: "0px 5px 20px rgb(71,71,71)",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    background: "white",
    alignItems: "center",
    minWidth: "40%",
    text :"font-weight-bold font-italic"
}