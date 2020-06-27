import React, { Component } from "react";

class Flexi extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderForm = () => {
        const data = this.props.config.items;
        const formElements = data.map((item, index) => {
            let key = index;
            let name = item.name;
            let label = item.label;
            let type = item.type === "TextField" ? "text" : "dropdown";

            return (
                <div className="form-group" key={key}>
                    <label className="">
                        {label}{": "}
                    </label>
                    {
                        type === "text" ? <input type={type} name={name} className="form-control" onChange={(e) => this.handleOnChange(e, key)} /> : 
                        <select name={name} onChange={(e) => this.handleOnChange(e, key)} className="form-control">
                            <option value="">--select--</option>
                            {item.values.map((val) => <option key={val} value={val}>{val}</option>)}
                        </select>                        
                    }
                    
                </div>
            )
        })
        return formElements;
    }

    handleOnChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }

    render() {
        return (
                <form onSubmit={(e) => this.props.onSubmit(e, this.state)}>
                    {this.renderForm()}
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
        )
    }
}

export default Flexi;