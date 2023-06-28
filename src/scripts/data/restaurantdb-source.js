import API_ENDPOINT from '../globals/endpoint';

class RestaurantDbSource {
  static async Home() {
    const response = await fetch(API_ENDPOINT.HOME_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}
export default RestaurantDbSource;
