import axios from 'axios';
import { BASE_URL } from './baseUrl';
export async function getPopularProducts() {
  try {
    const response = await axios.get(`${BASE_URL}furnitures`, {
      params: { type: 'popular' },
    });

    return response.data.furnitures;
  } catch (error) {
    console.error(
      'Помилка при запиті:',
      error.response?.status,
      error.response?.data
    );
    return null;
  }
}
