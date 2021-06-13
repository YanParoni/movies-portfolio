import { convertMoney, timeConvert } from '../../../converters';
import React, { Component } from 'react';

export default class MovieInfoConv extends Component {
  render(){
    const { time, budget, revenue } = this.props
    return(
      <div className='movieinfoconv'>
        <div className='movieinfoconv-content'>
        <div className='movie-layout'>
          <span className='movieinfo-info'>
          Running Time: { timeConvert(time) }
          </span>
        </div>
        <div className='movie-layout'>
          <span className='movieinfo-info'>
            Budget: { convertMoney(budget) }
          </span>
        </div>
        <span className='movieinfo-info'>
          Revenue : { convertMoney(revenue) }
        </span>
        </div>
      </div>
    )
  }
}