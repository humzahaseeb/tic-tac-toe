import React from 'react';
import Square from './Square';

const initialState = ["", "", "", "", "", "", "", "", ""];

const Board = () => {
  return (

      <div className='app-header'>
        <h1 className='heading-text'>
            <span style={{color:'yellowgreen'}}>Tic</span>
            <span style={{color:'palevioletred'}}>Tac</span>
            <span style={{color: '#E27D60'}}>Toe</span>
        </h1>

        <div className='row jc-center'>
            <Square className='b-bottom-right' state=''/>
            <Square className='b-bottom-right' state=''/>
            <Square className='b-bottom' state=''/>
        </div>

        <div className='row jc-center'>
            <Square className='b-bottom-right' state=''/>
            <Square className='b-bottom-right' state=''/>
            <Square className='b-bottom' state=''/>
        </div>

        <div className='row jc-center'>
            <Square className='b-right' state=''/>
            <Square className='b-right' state=''/>
            <Square className='' state=''/>
        </div>

        <button className='clear-button'>Reset</button>
        <p className='fc-aqua fw-600'>By Humza</p>
    </div>
  );
};

export default Board;
