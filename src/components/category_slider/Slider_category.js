import React, { Component } from "react";
import Slider from "react-slick";
import "./slick.css"; 
import Cake from "../../images/cake-category.svg"; 
import Groceries from "../../images/groceries-category.svg"; 
import Meat from "../../images/meat-category.svg"; 
import Vegetable from "../../images/vegetable-category.svg"; 
import Restaurant from "../../images/restaurant-category.svg"; 
import Gym_Diet from "../../images/gym-category.svg"; 
import Icecream from "../../images/ice-cream-category.svg"; 

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="howitworks grocery-slider">
          <h2 class="text-center animated fadeInUp">Groceries</h2>
        <Slider {...settings}>
          <div>
            <h3><a href="/cake_category"><img src={Cake} alt="Yourdrop" /><span>Cakes</span></a></h3>
          </div>
          <div>
            <h3><a href="/groceries_category"><img src={Groceries} alt="Yourdrop" /><span>Grocery stores</span></a></h3>
          </div>
          <div>
            <h3><a href="/meat_shop_category"><img src={Meat} alt="Yourdrop" /><span>Meat Shops</span></a></h3>
          </div>
          <div>
            <h3><a href="/vegetable_fruit_category"><img src={Vegetable} alt="Yourdrop" /><span>Vegetable</span></a></h3>
          </div>
          <div>
            <h3><a href="/restaurants_categories"><img src={Restaurant} alt="Yourdrop" /><span>Restaurants</span></a></h3>
          </div>
          <div>
            <h3><a href="/gym_diet_category"><img src={Gym_Diet} alt="Yourdrop" /><span>Gym Diet</span></a></h3>
          </div>
          <div>
            <h3><a href="/ice_cream_category"><img src={Icecream} alt="Yourdrop" /><span>Ice cream</span></a></h3>
          </div>
        </Slider>
      </div>
    );
  }
}