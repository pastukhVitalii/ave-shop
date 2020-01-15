import React from 'react';

import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='footerMenuInf'>
        
          <ul> Information
            <li>The brand</li>
            <li>Local stores</li>
            <li>Customer service</li>
            <li>Privace & cookies</li>
            <li>Site map</li>
          </ul>
        </div>
        <div className='footerMenuWBFU'>
          <ul> Why by from us
            <li>Shippings & returns</li>
            <li>Secure shopping</li>
            <li>Testimonials</li>
            <li>Award winning</li>
            <li>Ethical trading</li>
          </ul>
        </div>
        <div className='footerMenuAccount'>
          <ul>Your account
            <li>Sign in</li>
            <li>Register</li>
            <li>View cart</li>
            <li>View your lookbook</li>
            <li>Track an order</li>
            <li>Update information</li>
          </ul>
        </div>
        <div className='footerMenuLookbook'>
          <ul>Lookbook 
            <li>Latest posts</li>
            <li>Men's lookbook</li>
            <li>Women's lookbook</li>
            <li>Lookbook RSS feed </li>
            <li>View your lookbook</li>
            <li>Delete your lookbook</li>
          </ul>
        </div>
        <div className='footerMenuContact'>
          <ul> Contact details
            <li className='br'>Head Office:Avenu Fashion: <pre></pre>
            180-182 Regent Street London. </li>
            <li>Telephone: 0123-456-789 </li>
            <li>Email: support@yourwebsite.com</li>
          </ul>
        </div>
      </div>
      <div className='banners'>
          <div className='winner'>
            <span>award winner</span> <pre></pre>
            fashion awards 2016
          </div>
          <div className='social'>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
          </div>
        </div>
      <div className='copyright'>
        <div>© 2016 Avenue Fashion™</div>
        <div>Design by RobbyDesigns.com &nbsp; &nbsp;
        Dev by Loremipsum.com</div>
      </div>
    </footer>
  )
}

export default Footer;
