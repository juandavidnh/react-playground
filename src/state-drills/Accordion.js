import React from 'react';
import './Accordion.css'

class Accordion extends React.Component{
    static defaultProps = {
        sections: [],
    }

    state = {
        currentButtonIndex: 0,
    }

    handleClickButton(index){
        this.setState({
            currentButtonIndex: index,
        })
    }

    renderContent(section, index){
        if(this.state.currentButtonIndex===index){
            return (
                <p className="section-content-style">{section.content}</p>
            )
        }
    }

    renderListButtons(){
        return this.props.sections.map((section, index) => (
            <div  key={index}>
                <li className="section-title-style"><button onClick={() => this.handleClickButton(index)}>{section.title}</button></li>
                {this.renderContent(section, index)}
            </div>
        ))
    }

    render(){
        return (    
            <ul className="accordion-list-style">
                {!!this.props.sections.length && this.renderListButtons()}
            </ul>
        )
    }
}


export default Accordion;