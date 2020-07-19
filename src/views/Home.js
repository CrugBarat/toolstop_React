import React, {Fragment} from 'react';
import Header from '../components/header/Header.js';
import Footer from '../components/footer/Footer.js';
import getImage from '../utils/defaultImgMap.js';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <div className="home-container">
        <div className="image-links-section-container">
          <div className="image-links-section">
            <div className="image-links-container">
              <a href="/top-40-sellers">
                <img className="image-links" src="https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/homepage-bottom-banner-3.png?b" onError={e => e.target.src=getImage("top40Link")}  alt="" />
              </a>
            </div>
            <div className="image-links-container">
              <a href="https://www.toolstop.co.uk/new-power-tools-2020/">
                <img className="image-links" src="https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/homepage-bottom-banner-newpeoducts.png?t=1594886083&amp;_ga=2.57269162.109120236.1594711429-97896390.1594711429" onError={e => e.target.src=getImage("newProduct")} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="task-description-text">
          <h2 className="task-description-text-heading">THE UK'S FAVOURITE PROFESSIONAL TOOL SUPPLIER</h2>
          <p className="task-description-text-paragraph">We are one of the UK's largest independent stockists and distributors of quality professional tools with one of the largest ranges of power tools, hand tools and cordless power tools on the web.</p><p className="footer-seo-text-paragraph">International Delivery: We deliver to home and trade to over 30 countries throughout Europe and further afield.</p><p className="footer-seo-text-paragraph">Trusted Worldwide: With over 16,000 reviews and consistent high scores via Trustpilot, Google Certified Shops and Reevoo we are one of the most trusted power tool suppliers in Europe.</p>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}
