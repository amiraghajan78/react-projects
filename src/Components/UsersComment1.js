import React, {useState} from 'react'

import Comment1 from './Comment1'

export default function UsersComment1() {
    const [comments, setComments] = useState([
        {id: 1, name: "Amir Aghajanzadeh", avatar: "img/user-profile-image-1.png", job: "Full Stack Developer"},
        {id: 2, name: "Vali Aghajani", avatar: "img/user-profile-image-5.png", job: "Front End Developer"},
        {id: 3, name: "Mehri Alizadeh", avatar: "img/user-profile-image-7.png", job: "Web Designer"},
        {id: 4, name: "Erfan Hoseini", avatar: "img/user-profile-image-9.png", job: "Back End Developer"},
    ]);
  return (
    <div className='second_task_container flex-center'>
      {comments.map(comment => (
        <Comment1 {...comment} />
      ))};
    </div>
  )
}
