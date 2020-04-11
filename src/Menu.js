import React, { Component } from 'react'
import * as actionTypes from './store/actions/action'
import { connect } from 'react-redux';
import * as actionCreators from '../src/store/actions/action'

class Home extends Component {

    componentDidMount = () => {
        this.props.onGetFood();
    }

    render() {
        console.log(this.props.menuItems)
        return (
            <div >
                <ul>
                    {
                        this.props.menuItems ? this.props.menuItems.map((recipe, index) => {
                            return (
                                <article onClick={() => { this.props.onPostFood (this.props.id)}}>
                                    <div key={index} style={recipecss}>
                                        {/* {JSON.strin gify(recipe)} */}
                                        <li>{recipe.recipe.label}</li>
                                        <img src={recipe.recipe.image}style={imgcss}></img>
                                        {recipe.recipe.yield}
                                    </div>
                                </article>)
                            
                        }) : null

                    }
                </ul>

            </div>

        )
    }
}
const mapStateToProps = state => {
    console.log(state)
    return {
        ...state
    }
}

const mapDiapatchToProps = dispatch => {
    return {

        onGetFood: () => dispatch(actionCreators.fetchFoodAsync()),
        onPostFood:(id) =>dispatch(actionCreators.fetchPostFood(id))
    }
}
export default connect(mapStateToProps, mapDiapatchToProps)(Home);

const recipecss = {   
    borderRadius: "5px",
    boxShadow: "0px 5px 20px rgb(71,71,71)",
    margin:"10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    background: "white",
    alignItems: "center",
    minWidth: "40%"
}
const imgcss = {
    borderRadius: "100%",
    width: "100px",
    hight :"100px"
}