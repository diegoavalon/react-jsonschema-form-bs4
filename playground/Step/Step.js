import React, { Component } from "react";

class Step extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <section className="segment wrapper">
                <div className="segment__headline w-3-5 pb-xxl">
                    <h1 className="text-display mb-base">{this.props.title}</h1>
                    <h2 className="h2 font-normal">{this.props.subtitle}</h2>
                </div>
        
                {this.props.children}
                
            </section>
        )
    }
}

export default Step;
