import React from 'react';

class HelloWorld extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            who: 'world',
        }
    }

    handleButtonWorld = () => {
        this.setState({ who: 'world' })
    }

    handleButtonFriend = () => {
        this.setState({ who: 'friend' })
    }

    handleButtonReact = () => {
        this.setState({ who: 'react' })
    }

    render(){
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.handleButtonWorld}>World</button>
                <button onClick={this.handleButtonFriend}>Friend</button>
                <button onClick={this.handleButtonReact}>React</button>
            </div>
        )
    }
}

export default HelloWorld;