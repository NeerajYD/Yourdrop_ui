import React from 'react'
import { BrowserRouter as Router , Route } from 'react-router-dom';
import home from './home';
import Aboutus from './AboutUs';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Term_condition from './Term_condition';
import Cancellation_policy from './Cancellation_policy';
import Privacy_policy from './Privacy_policy';
import Faq from './Faq';
import Bakery_order from './Bakery_order';
import Fruits_vegetables from './Fruits_vegetables';
import Beverages from './Beverages';
import Baby_care from './Baby_care';
import Household_care from './Household_care';
import Personal_care from './Personal_care';
import Meat_shop from './Meat_shop';
import For_business from './For_business';
import Partner_with_us from './Partner_with_us';
import Cake_category from './Cake_category';
import Groceries_category from './Groceries_category';
import Meat_shop_category from './Meat_shop_category';
import Vegetable_fruit_category from './Vegetable_fruit_category';
import Restaurants_categories from './Restaurants_categories';
import Gym_diet_category from './Gym_diet_category';
import Ice_cream_category from './Ice_cream_category';

export default function Routes() {
    return (
        <Router>
            <Header />
        <Route path='/' exact component={home} />
            <Route path='/Aboutus' exact component={Aboutus} />
            <Route path='/Term_condition' exact component={Term_condition} />
            <Route path='/Cancellation_policy' exact component={Cancellation_policy} />
            <Route path='/Privacy_policy' exact component={Privacy_policy} />
            <Route path='/Faq' exact component={Faq} />
            <Route path='/Bakery_order' exact component={Bakery_order} />
            <Route path='/Fruits_vegetables' exact component={Fruits_vegetables} />
            <Route path='/Beverages' exact component={Beverages} />
            <Route path='/Baby_care' exact component={Baby_care} />
            <Route path='/Household_care' exact component={Household_care} />
            <Route path='/Personal_care' exact component={Personal_care} />
            <Route path='/Meat_shop' exact component={Meat_shop} />
            <Route path='/For_business' exact component={For_business} />
            <Route path='/Partner_with_us' exact component={Partner_with_us} />
            <Route path='/Cake_category' exact component={Cake_category} />
            <Route path='/Groceries_category' exact component={Groceries_category} />
            <Route path='/Meat_shop_category' exact component={Meat_shop_category} />
            <Route path='/Vegetable_fruit_category' exact component={Vegetable_fruit_category} />
            <Route path='/Restaurants_categories' exact component={Restaurants_categories} />
            <Route path='/Gym_diet_category' exact component={Gym_diet_category} />
            <Route path='/Ice_cream_category' exact component={Ice_cream_category} />
            <Footer />
        </Router>
    )
}
