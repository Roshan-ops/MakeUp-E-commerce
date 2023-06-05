import React from 'react';
import { AiFillHeart, AiOutlineUser,AiFillFacebook,AiFillInstagram,AiFillYoutube,AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai';
import './nav.css';
import { Container, Navbar } from "react-bootstrap";

function Nav() {
  return (
    <>
    <Navbar  className="Small1" >
      <div className='Change'>
    <div className='discount'>
<p>Summer Season up to 10% Discount sales </p>
</div>
<div className='Hello'> 
<div className='Hello1' varient='primary'>
  <p><AiFillHeart/> Wishlist</p>

</div>

<div className='Hello2' varient='primary'>
  <p><AiOutlineUser/>My Account</p>
</div>
</div>

<div className='Icon' varient='primary'>
  <p className='ion1'><AiFillFacebook/></p>
  <p className='icon2'><AiFillInstagram/></p>
  <p className='icon3'><AiFillYoutube/></p>
</div>
</div>
</Navbar>
    <Container className="nav-container  "  expanded='lg'>
    <div className='logo'>
<p>L'YON Beauty </p>
</div>
<ul className="Menubar">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="g">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#g">Shop</a>
        </li>
        <li className="nav-item">
          <a className='nav-link' href='g'>Brand</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='j'>Our Story</a>
        </li>

        <li className='nav-item'>
          <a className='nav-link' href='j'>Contact</a>
        </li>

        <li className='nav-item'>
          <a className='nav-link' href='j'>Our Others</a>
        </li>
        </ul>
<div className='item'>
<div className='search1'>
<p><AiOutlineSearch/> </p>
</div>
<div className='search2'>
<p><AiFillHeart/></p>
</div>
<div className='search3'>
<p><AiOutlineUser/></p> 
</div>
<div className='search4'>
<p > <AiOutlineShoppingCart/>Cart</p>
</div>

 </div>
    </Container>


    </>
  )
}

export default Nav