import React, { Component } from 'react'

import Comment2 from './Comment2'

export default class UsersComment2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [
        {id: 1, name: "Amir Aghajanzadeh", avatar: "img/user-profile-image-1.png", job: "Full Stack Developer"},
        {id: 2, name: "Vali Aghajani", avatar: "img/user-profile-image-5.png", job: "Front End Developer"},
        {id: 3, name: "Mehri Alizadeh", avatar: "img/user-profile-image-7.png", job: "Web Designer"},
        {id: 4, name: "Erfan Hoseini", avatar: "img/user-profile-image-9.png", job: "Back End Developer"},
      ]
    }
    this.setInformation = this.setInformation.bind(this)
  }
  setInformation(commentId) {
    return this.state.comments.id === commentId;
  };
  render() {
    return (
      <div className='third_task_container flex-center'>
        {/* <Comment2 />
        <Comment2 />
        <Comment2 />
        <Comment2 /> */}
        {this.state.comments.map(comment => (
          <Comment2 {...comment} onSet={this.setInformation} />
        ))}
      </div>
    )
  }
}
