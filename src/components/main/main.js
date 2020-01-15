import React from 'react';

import { Link } from "react-router-dom";

import './main.css';
import '../images';

import clothes1 from '../../img/clothes1.png';
import clothes2 from '../../img/clothes2.png';
import clothes3 from '../../img/clothes3.png';
import clothes4 from '../../img/clothes4.png';
import clothes5 from '../../img/clothes5.png';
import clothes6 from '../../img/clothes6.png';


const Main = ({array})=> {

    return (
        <div className='content-outer'>
            <div className='slider'>
                <div className='slider-text'>AVE</div>
                <button className='slider-btn'>shop men’s collection</button>
            </div>
            <div className='content'>
                <hr/>
                <div className='production-menu'>
                    <ul>
                        <li>popular</li>
                        <li>new arrivals</li>
                        <li>best sellers</li>
                        <li>specials offers</li>
                        <li>coming soon</li>
                    </ul>
                    <div className='productions-view'>
                        <div className='productions-view-column1'>
                            <div className='productions-item'>
                                <Link to='/product-view'>
                                    <i className="fas fa-info-circle production-icon-inform"></i>
                                </Link>
                                <img src={[array[0].src]} alt='clothes' className='production-img-s'/>
                                <div className="production-block">
                                    <p>Lorem, ipsum dolor</p>
                                    <span className='price'>&#163;25.99</span>
                                    <div className="production-block-description">
                                        Classic casual t-shirt for women on the move. 100% cotton.
                                    </div>
                                    <i className ="fas fa-shopping-cart production-icon-cart"></i>
                                </div>
                            </div>
                            <div className='productions-item'>
                                <div className='price'>&#163;25.99</div>
                                <img src={clothes2} alt='clothes' className='production-img-s' />
                            </div>
                            <div className='productions-item'>
                                <div className='price'>&#163;25.99</div>
                                <img src={[array[0].src]} alt={[array[0].src]} className='production-img-s'/>
                            </div>
                        </div>
                        <div className='productions-view-column2'>
                            <div className='productions-item'>
                                <div className='price'>&#163;25.99</div>
                                <img src={''} alt='clothes' className='production-img-l' />
                            </div>
                            <div className='productions-item'>
                                <div className='price'>&#163;25.99</div>
                                <img src={''} alt='clothes' className='production-img-s' />
                            </div>
                            <div className='productions-item'>
                                <div className='price'>&#163;25.99</div>
                                <img src={''} alt='clothes' className='production-img-s' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;