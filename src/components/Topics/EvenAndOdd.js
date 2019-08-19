import React, {Component} from 'react';

export default class EvenAndOdd extends Component {
    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    solve(userInput) {
        let oddNums = [];
        let evenNums = [];
        let arr = [...userInput];
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] % 2 === 0) {
                evenNums.push( parseInt(arr[i], 10) );
            } else {
                oddNums.push( parseInt(arr[i], 10) );
            }
        }
        this.setState({ evenArray: evenNums, oddArray: oddNums });

        console.log(oddNums, this.state.oddArray);
        // console.log(evenArray, this.state.evenArray);
    }

    render() {
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens And Odds</h4>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) } ></input>
                <button className="confirmationButton" onClick={() => this.solve(this.state.userInput)} >Split</button>
                <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
                <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
            </div>
        )
    }
}