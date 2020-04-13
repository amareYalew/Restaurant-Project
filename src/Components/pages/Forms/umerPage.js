import React, { Component } from 'react'
import UmerForm from './umerForm';
import { connect } from 'react-redux';
export class umerPage extends Component {



    render() {
        console.log(this.props)
        let fromElementArray = [];
        for (let key in this.props.umerReducer.menuAddForm) {
            fromElementArray.push({
                id: key,
                config: this.props.umerReducer.menuAddForm[key]
            })
        }
        console.log(fromElementArray)

        let form = (
            <form>

                {
                    fromElementArray.map(item => {
                        return (
                            <UmerForm
                                key={item.id}
                                elementType={item.config.elementType}
                                elementConfig={item.config.elementConfig}
                                label={item.config.label}
                                value={item.config.value}
                                onchanged={(event) => { this.props.onMenuInputHandler(event, item.id) }}
                            />
                        )
                    })
                }
                <button>Submit</button>
            </form>

        )


        return (
            <div>
                {form}
                <h1>hello</h1>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return { ...state }
}

const mapDispatchToProps = dispatch => {
    return {

        onMenuInputHandler: (event, field) => {
            event.preventDefault();
            dispatch({ type: 'FOODITEMFORM', event: event, field: field })

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(umerPage)
