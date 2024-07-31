import React from 'react'

import { FaHeart } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";

export default function Post1() {
  return (
    <>
      <section className='post_image_container flex-center'>
        <img src='img/nature_1.jpg' alt='' className='post_image' />
      </section>
      <section className='comment_container'>
        <div className='comment_box'>
            <h4>Post1 Comment</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit.
            </p>
        </div>
        <div className='comment_box'>
            <h4>Post1 Comment</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit.
            </p>
        </div>
        <div className='comment_box'>
            <h4>Post1 Comment</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit.
            </p>
        </div>
        <div className='comment_box'>
            <h4>Post1 Comment</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit.
            </p>
        </div>
        <div className='comment_box'>
            <h4>Post1 Comment</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit.
            </p>
        </div>
        <div className='comment_box'>
            <h4>Post1 Comment</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit.
            </p>
        </div>
        <div className='comment_box'>
            <h4>Post1 Comment</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit.
            </p>
        </div>
        <div className='comment_box'>
            <h4>Post1 Comment</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit.
            </p>
        </div>
        <div className='comment_box'>
            <h4>Post1 Comment</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit.
            </p>
        </div>
        <div className='comment_box'>
            <h4>Post1 Comment</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit.
            </p>
        </div>
      </section>
      <section className='post_information flex-center'>
        <div className='flex-center post_options'>
            <i><FaHeart /></i>
            <span>15</span>
        </div>
        <div className='flex-center post_options'>
            <i><AiOutlineLike /></i>
            <span>10</span>
        </div>
        <div className='flex-center post_options'>
            <i><AiOutlineDislike /></i>
            <span>5</span>
        </div>
        <div className='flex-center post_options'>
            <i><FaRegComment /></i>
            <span>Comment</span>
        </div>
        <div className='flex-center post_options'>
            <i><FaShare /></i>
            <span>Share</span>
        </div>
      </section>
    </>
  )
}
