import React, { Component } from "react";

class ComponenteClasse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clock: 1000,
            cup: 'water'
        }
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({ cup: 'tea'})
        },2000)
       
    }

    alterarCopo = () => {
        this.setState({ 
            cup: 'soda'
        })
    }
    render() {
        const { clock, cup } = this.state;
        return(
            <div>
                <h1>Clock: {clock}</h1>
                <button onClick={() => this.alterarCopo()}><h1>{cup}</h1></button>
            </div>
        )
    }
}

export default ComponenteClasse