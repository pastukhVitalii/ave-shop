import React from 'react';

import './brand.css';

import Brand_1 from '../../img/brand_1.png';
import Brand_2 from '../../img/brand_2.png';
import Brand_3 from '../../img/brand_3.png';
import awards_1 from '../../img/awards1.png';
import awards_2 from '../../img/awards2.png';
import awards_3 from '../../img/awards3.png';

const Brand = () => {
    return (
        <div className='content-outer' >
            <div className='intro'>
                <div className='bold'>The <span className='light'>brand</span></div>
                <div className='titleDescription'>company slogan goes here</div>
            </div>
            <div className='content'>
                <div className='BrandBlock1'>
                    <img src= {Brand_1} alt='brand'/>
                    <div className='brandDesc'><h2>hand designed clothing</h2>
                    <h3>established in 2013, avenue fashion Sed dictum elit vel sapien </h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Veniam consequatur maiores praesentium expedita eveniet optio alias ipsam deleniti, asperiores odit a quis, ea dolore voluptate repellat? Dolorem harum qui amet?</p>
                    </div>
                </div>
                <div className='brandBlock4'>
                <div className='brandBlock2'>
                    <img src= {Brand_2} alt='brand'/>
                    <div className='brandDesc'><h2>our values, vision and strategy</h2>
                    <h3>The above image would be a great place for an advertising video</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Veniam consequatur maiores praesentium expedita eveniet optio alias ipsam deleniti, asperiores odit a quis, ea dolore voluptate repellat? Dolorem harum qui amet?</p>
                    </div>
                </div>
                <div className='brandBlock3'>
                    <img src= {Brand_3} alt='brand'/>
                    <div className='brandDesc'><h2>Ethical trading</h2>
                    <h3>We oversee the working conditions of the people in the supply chain</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Veniam consequatur maiores praesentium expedita eveniet optio alias ipsam deleniti, asperiores odit a quis, ea dolore voluptate repellat? Dolorem harum qui amet?</p>
                    </div>
                </div>
                </div>
                <div className='awards'>
                    <img src={awards_1} alt='awards' />
                    <img src={awards_2} alt='awards' />
                    <img src={awards_3} alt='awards' />
                </div>
            </div>
        </div>
    )
}

export default Brand;