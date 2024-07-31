import React from 'react'
import './App.css';

import { useEffect , useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Nature1 from './Components/Nature1';
import Nature2 from './Components/Nature2';
import Nature3 from './Components/Nature3';
import Nature4 from './Components/Nature4';

import Loading from './Components/Loading';
import LoadingItems from './Components/LoadingItems';

import Post1 from './Components/Post1';
import Post2 from './Components/Post2';
import Post3 from './Components/Post3';
import Post4 from './Components/Post4';

import UsersComment1 from './Components/UsersComment1';
import UsersComment2 from './Components/UsersComment2';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const onloadEffect = () => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };
  useEffect(onloadEffect, []);
  return (
    <>
      <section className='first_task_container'>
        <nav className='nav_bar flex-center'>
          <ul className='menu_1 flex-center'>
            <li><Link to="/nature1">Nature 1</Link></li>
            <li><Link to="/nature2">Nature 2</Link></li>
            <li><Link to="/nature3">Nature 3</Link></li>
            <li><Link to="/nature4">Nature 4</Link></li>
          </ul>
        </nav>
        <div className='component_container'>
          <Routes>
            <Route path='/nature1' element={<Nature1 />} />
            <Route path='/nature2' element={<Nature2 />} />
            <Route path='/nature3' element={<Nature3 />} />
            <Route path='/nature4' element={<Nature4 />} />
          </Routes>
        </div>
      </section>
      <section className='gallery_container flex-center'>
        {
        isLoading ? (
          <Loading />
        ) : (
          <LoadingItems />
        )};
      </section>
      <section className='router_task_2'>
        <nav className='nav_bar flex-center'>
          <ul className='menu_1 flex-center'>
            <li><Link to="/post1">Post 1</Link></li>
            <li><Link to="/post2">Post 2</Link></li>
            <li><Link to="/post3">Post 3</Link></li>
            <li><Link to="/post4">Post 4</Link></li>
          </ul>
        </nav>
        <div className='router_component_container'>
          <Routes>
            <Route path='/post1' element={<Post1 />} />
            <Route path='/post2' element={<Post2 />} />
            <Route path='/post3' element={<Post3 />} />
            <Route path='/post4' element={<Post4 />} />
          </Routes>
        </div>
      </section>
      <UsersComment1 />
      <UsersComment2 />
    </>
  )
}
