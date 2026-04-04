export const BASE_URL = 'https://furniture-store-v2.b.goit.study/api/';
import axios from 'axios';

export async function getFurnituresList(page, limit) {
  try {
    const response = await axios.get(`${BASE_URL}furnitures`, {
      params: {
        limit: limit,
        page: page,
      },
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

export async function getFurnitureItemById(id) {
  try {
    const response = await axios.get(`${BASE_URL}furnitures/${id}`, {});
    return response.data;
  } catch (error) {
    console.error(
      'Помилка при запиті:',
      error.response?.status,
      error.response?.data
    );
    return null;
  }
}

export async function getFurnituresCategories() {
  try {
    const response = await axios.get(`${BASE_URL}categories`, {});

    return response.data;
  } catch (error) {
    console.error(
      'Помилка при запиті:',
      error.response?.status,
      error.response?.data
    );
    return null;
  }
}

export async function postCreateUsersOrder(order) {
  console.log('FAKE POST:', order);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
}

export async function getFeedbacksList(page, limit) {
  try {
    const response = await axios.get(`${BASE_URL}feedbacks`, {
      params: {
        limit: limit,
        page: page,
      },
    });
    return response.data.feedbacks;
  } catch (error) {
    console.error(
      'Помилка при запиті:',
      error.response?.status,
      error.response?.data
    );
    return null;
  }
}

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
