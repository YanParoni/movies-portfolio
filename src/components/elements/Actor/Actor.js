import React, { Component } from 'react';
import { imageUrl, backImageSize, poster } from '../../../configs';


export default class Actor extends Component {
  render(){
    const {  actor } = this.props;
    const posterAct = 'w185';

    return(

      <div className=" flex  ">

      {actor.map( el=>
      <div className='rounded-full  rounded-full m-4' key={el.id} >
        <img
          classname="flex box-border "
          src={
            el.profile_path
              ? `${imageUrl}${posterAct}${el.profile_path}`
              : './images/no_image.jpg'
          }
          alt="actor/actress-photo"
        />
        <span className="actor-name">{el.name}</span>
        <span className="actor-character">Plays {el.character}</span>
      </div>)}
      </div>

    )
  }
}