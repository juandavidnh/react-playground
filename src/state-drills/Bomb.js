import React from 'react';

class Bomb extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            count: 0,
            text: '',
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            let currentTime = this.state.count;
            let currentText = this.state.text;
            if(currentTime===7){
                currentText='BOOM!!!!';
                clearInterval(this.interval);
            }else if(currentTime%2===0){
                currentText='tick';
                currentTime++
            }else{
                currentText='tock';
                currentTime++
            }
            this.setState({
                count: currentTime,
                text: currentText
            })
        }, 1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        return(
            <div>
                <p>{this.state.text}</p>
            </div>
        )
    }
}

export default Bomb;