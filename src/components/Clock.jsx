import React from "react"; 
import './clock.css';

class Clock extends React.Component{
    timerId = 0

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            day: true
        };
        console.log('constructor called!');
    }

    tick() {
        this.setState({
            date: new Date(),
            day:this.state.date <= 17
        });
    }

    componentDidMount(){
        console.log('componentDidMount called!');
        this.timerId = setInterval(() => {
            this.tick()
        }, 1000);

    }

    render(){
        console.log('render called!')
        return (
            <div className={`clock ${ !this.state.day? 'night': '' }`}>
                <h1>Hola Mundo!!! </h1>
                <h2>it is {this.state.date.toLocaleTimeString()} ⏰ </h2>
                
            </div>

        );
    }


    componentDidUpdate() {
        console.log('componentDidUpdate called!!');
        if(this.state.day){
            console.log('Buenos días ☀️')
        }else{
            console.log(' Buenas Noches ')
        }
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }


};

export default Clock;