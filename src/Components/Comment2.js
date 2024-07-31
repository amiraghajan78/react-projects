import React, { Component } from 'react'

import { FcLike } from "react-icons/fc";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

export default class Comment2 extends Component {
  render() {
    return (
      <>
        <div className='member_cart'>
            <section className='avatar_container'>
                <div className='avatar_border position-center'>
                    <div className='avatar_bg position-center'>
                        <img src={this.props.avatar} alt='' className='avatar_image position-center' />
                    </div>
                </div>
            </section>
            <section className='info_container'>
                <div className='info_1'>
                    <h4>{this.props.name}</h4>
                    <span>{this.props.job}</span>
                    <span>From Class Component</span>
                </div>
                <div className='info_2'>
                    <div className='flex-center'><i><FcLike /></i><span>15</span></div>
                    <div className='flex-center'><i><BiLike /></i><span>10</span></div>
                    <div className='flex-center'><i><BiDislike /></i><span>5</span></div>
                </div>
            </section>
        </div>
      </>
    )
  }
}
