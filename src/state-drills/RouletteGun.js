import React from 'react';

class RouletteGun extends React.Component{
    static defaultProps={
        bulletInChamber: 8,
    }

    constructor(props){
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false,
        }
    }

    handlePullTrigger = () => {
        this.setState({
            spinningTheChamber: true,
        }
        )
        this.timeout = setTimeout(()=>{
            this.setState({
                chamber: Math.ceil(Math.random() * 8),
                spinningTheChamber: false,
            })
        },2000)
    } 

    componentWillUnmount(){
        clearTimeout(this.timeout)
    }

    render(){
        return(
            <div>
                <p>{(this.state.spinningTheChamber===true)?'spinning the chamber and pulling the trigger! ...':(this.state.chamber===this.props.bulletInChamber?'BANG!!!!':"you're safe!")}</p>
                <button onClick={this.handlePullTrigger}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;