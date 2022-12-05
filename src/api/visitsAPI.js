import { ENDPOINT_UNSECURE } from "./endpoint";

export const getVisits = async () => {
  //must change for 3rd delivery, instead getLocalStorage
  const userId = "636969b87bed3d6cd9563f4d";

  const response = await fetch(
    `${ENDPOINT_UNSECURE}/users/${userId}/restaurants/visits`,
    {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }
  );
  if (response.status != 200) {
    console.log(`Error occured with code ${response.status}`);
    return null;
  }
  const data = await response.json();

  return data;
};

export const getOneVisit = async (visitId) => {
  //must change for 3rd delivery, instead getLocalStorage
  const userId = "636969b87bed3d6cd9563f4d";

  const response = await fetch(
    `${ENDPOINT_UNSECURE}/users/${userId}/restaurants/visits/${visitId}`,
    {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }
  );
  if (response.status != 200) {
    console.log(`Error occured with code ${response.status}`);
    return null;
  }
  const data = await response.json();

  return data;
};

export const postVisit = async (restaurantId, comment, rating, date) => {
  //must change for 3rd delivery, instead getLocalStorage
  const userId = "636969b87bed3d6cd9563f4d";

  const response = await fetch(
    `${ENDPOINT_UNSECURE}/users/${userId}/restaurants/visits`,
    {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        restaurant_id: restaurantId,
        comment: comment,
        rating: rating,
        date: date,
      }),
    }
  );
  if (response.status != 201) {
    console.log(`Error occured with code ${response.status}`);
    return null;
  }
  const data = await response.json();

  return data;
};

export const getRestaurantVisits = async (restaurantId) => {
  //must change for 3rd delivery, instead getLocalStorage
  const userId = "636969b87bed3d6cd9563f4d";

  const response = await fetch(
    `${ENDPOINT_UNSECURE}/users/${userId}/restaurants/${restaurantId}/visits`,
    {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }
  );
  if (response.status != 200) {
    console.log(`Error occured with code ${response.status}`);
    return null;
  }
  const data = await response.json();

  return data;
};
