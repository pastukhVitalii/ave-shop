import React from 'react';

import './productView.css';
import '../images';

import product_view from '../../img/product view.png';

const ProductView = ({array}) => {
    return (
        <div className='content-outer' >
            <div className='intro'>
            <div className='bold'>product <span className='light'>  view</span></div>
                <div className='titleDescription'>mens - casuals - hoodies & sweatshirts - ave classic sweatshirt</div>
            </div>
            <div className='content'>
                <div className='item-view'>
                    <div className='item-img'>
                        <img src={[array[0].src]} alt='clothes' />
                    </div>
                <div className='item-description'>
                    <h2>Ave classic sweatshirt</h2>
                    <div className='feedback-panel'>
                        <div className='raiting-stars'>
                            <i className="fas fa-star checked"></i>
                            <i className="fas fa-star checked"></i>
                            <i className="fas fa-star checked"></i>
                            <i className="fas fa-star checked"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className='reviews'>
                            3 Review(s)
                        </div>
                        <div className='add-review'>
                            Add a review
                        </div>
                        <div className='share'>
                            Share:
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest"></i>
                        </div>
                    </div>
                    <div className='item-price'>
                        <span className='old-price'>£107</span>
                        <span className='new-price'>£89.99</span>  
                    </div>
                    <div className='availability'>
                        <bold>Availability: </bold> In stock
                    </div>
                    <div className='prod-code'>
                        <bold>Product Code: </bold> #499577
                    </div>
                    <div className='tags'>
                        <bold>Tags:</bold> Classic, Casual, V-neck, Loose
                    </div>
                    <p>Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es.
                    Donec pulvinar tempor lorem a pretium justo interdum.</p>
                    <ul>
                        <li>Elasticated cuffs</li>
                        <li>Casual fit</li>
                        <li>100% Cotton</li>
                        <li>Free shipping with 4 days delivery</li>
                    </ul>
                    <div className='choice-item'>
                        <div className="colour">
                            <label> colour
                                <select name="choice-colour">
					                <option value="white">white</option>
					                <option value="black">black</option>
					                <option value="green">green</option>
				                </select>
                            </label>
                        </div>
                        <div className="size">
                            <label> size
                                <select name="choice-size">
					                <option value="s">s</option>
					                <option value="m">m</option>
					                <option value="l">l</option>
				                </select>
                            </label>
                        </div>
                        <div className="quantity">
                            <label> qty
                                <input type="number" name="numbers" size="2" min="1"  />
                            </label>
                        </div>
                    </div>
                    <div className="btn-cart">
                        <button>
                            <i className ="fas fa-shopping-cart"></i>
                            add to cart 
                        </button>
                    </div>     
                </div>
                <div className="text-description-clothes">
                    <h3>Description of clothes</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ducimus magnam officiis, ipsum, consequuntur inventore excepturi reiciendis assumenda dolorum aspernatur exercitationem saepe provident quos laborum earum. Et sit impedit sunt illum? Dicta laborum, laudantium reprehenderit iusto ullam impedit perferendis aspernatur rem suscipit corporis alias consequatur sequi veniam eius quod nostrum deserunt quas rerum atque ducimus? Fugiat laudantium est doloribus quae facere perferendis similique reiciendis inventore consequuntur, vel perspiciatis minima dicta laborum voluptatibus nihil sunt quos architecto cupiditate? Exercitationem eum nisi maiores vitae architecto quibusdam repellendus, hic, itaque reprehenderit doloribus aliquid excepturi. Eligendi reiciendis molestias totam earum nesciunt! Impedit, repellendus blanditiis?</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProductView;