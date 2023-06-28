import RestaurantDBSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">List of Restaurants</h2>
        <div id="restaurants" class="restaurants">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDBSource.Home();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((Restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(Restaurant);
    });
  },
};

export default Home;
