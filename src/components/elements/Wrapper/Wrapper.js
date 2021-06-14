import React from 'react';
import './Wrapper.css'

export default class Wrapper extends React.Component{
  constructor(props) {
    super(props);
    
    const { radius, stroke ,rating} = this.props;
    
    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }
    render() {
      const { radius, stroke, progress,ratin } = this.props;
      const strokeDashoffset = this.circumference - progress / 100 * this.circumference;
    
      return (
        <div classname='circle'>
                      <span className='rating'>{ratin*10}%</span>

        <svg
          height={radius * 2}
          width={radius * 2}
          >
          <circle
            stroke="rgb(246, 165, 49)"
            fill='#0A1014'
            strokeWidth={ stroke }
            strokeDasharray={ this.circumference + ' ' + this.circumference }
            style={ { strokeDashoffset  } }
            stroke-width={ stroke }
            r={ this.normalizedRadius }
            cx={ radius }
            cy={ radius }
            >        

            </circle>    

        </svg>

        </div>
      );
    }
}