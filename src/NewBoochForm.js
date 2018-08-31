import React, { Component } from "react";

export default class NewBoochForm extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            task : ""
        };
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state)
        this.props.handleSubmit(this.state.task)
        e.target.reset();
        this.props.history.push("/boochs"); //comes from props that we've passed down
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });    
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}> 
                <label htmlFor="task"> Booch Form </label>
                <input type="text" name="task" id="task"   onChange={this.handleChange}/>
                <button> Add dat Booch! </button>
            </form>
        )
    }
}
