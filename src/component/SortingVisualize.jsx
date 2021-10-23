import React, { Component } from 'react'
import './SortingVisualizer.css';
import {getBubbleSort} from '../algorithms/bubbleSort';
import {getSelectionSort} from '../algorithms/selectionSort';
import { getInsertionSort } from '../algorithms/insertionSort';


//animation speed 
const animationSpeed = 0.1;

class SortingVisualize extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }
    componentDidMount() {
        this.resetArray();
    }

    
    resetArray() {
        const temp = [];
        for (let i=0; i<360; i++) {
            temp.push(randomNumber(5, 600));
        }
        this.setState({array: temp});
    }

//Bubble sort animation code!
    doBubbleSort() {
        const animation = getBubbleSort(this.state.array);
        for (let i=0; i<animation.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bars');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animation[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'turquoise';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * animationSpeed);
            }else {
                setTimeout(() => {
                    const [barOneIdx, height1, barTwoIdx, height2] = animation[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${height1}px`;
                    barTwoStyle.height = `${height2}px`;
                },i * animationSpeed);
            }
        }
        
    }

//Selection sort animation code!
    doSelectionSort() {
        const animation = getSelectionSort(this.state.array);
        let flag = 1;
        for (let i=0; i<animation.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bars');
            if(!(animation[i].length !== 1)) {
                const [barOneIdx] = animation[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                let color;
                if(flag === 1) {
                    color = 'red';
                    flag = 0;
                }else {
                    color = 'turquoise';
                    flag = 1;
                }
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                },i * animationSpeed);
            }
            else {
                setTimeout(() => {
                    const [barOneIdx, height1, barTwoIdx, height2] = animation[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${height2}px`;
                    barTwoStyle.height = `${height1}px`;
                }, i * animationSpeed);
            }
        }
    }
    

//Insertion sort animation code!
    // doInsertionSort() {
    //     const animation = getInsertionSort(this.state.array);
    //     let flag = 1;
    //     for(let i=0; i<animation.length; i++) {
    //         const arrayBars = document.getElementsByClassName('array-bars');
    //         if(!(animation[i].length !== 2)) {
    //             const [barOneIdx, barTwoIdx] = animation[i];
    //             const barOneStyle = arrayBars[barOneIdx].style;
    //             const barTwoStyle = arrayBars[barTwoIdx].style;
    //             let color;
    //             if(flag === 1) {
    //                 color = 'red';
    //                 flag = 0;
    //             }else {
    //                 color = 'turquoise';
    //                 flag = 1;
    //             }
    //             setTimeout(() => {
    //                 barOneStyle.backgroundColor = color;
    //                 barTwoStyle.backgroundColor = color;
    //             },i * animationSpeed);
    //         }
    //         else {
    //             setTimeout(() => {
    //                 const [barOneIdx, height1, barTwoIdx, height2] = animation[i];
    //                 const barOneStyle = arrayBars[barOneIdx].style;
    //                 const barTwoStyle = arrayBars[barTwoIdx].style;
    //                 barTwoStyle.height = `${height1}px`;
    //                 barOneStyle.height = `${height1}px`;
    //             }, i * animationSpeed);
    //         }
    //     }   
    // }


    render() {
        return (
            <>  
               <div className='array-container'>
                    <div className='array-bar-container'>
                        {this.state.array.map((value, idx) =>(
                        <div 
                            className='array-bars'
                            key={idx}
                            style={{height: `${value}px`}}
                        ></div>
                        ))}
                        <div className='buttons'>
                            <button id='btn1' className='btn' onClick={() => this.resetArray()}>NewArray</button>
                            <button id='btn4' className='btn' onClick={() => window.location.reload()}>refresh</button>
                            <button id='btn2' className='btn' onClick={() => this.doBubbleSort()}>bubble sort</button>
                            <button id='btn3' className='btn' onClick={() => this.doSelectionSort()}>selection sort</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

//Random number generation function!
function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
export default SortingVisualize;