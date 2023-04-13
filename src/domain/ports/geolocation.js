export const geolocationClient = async (lat, lon) => {
  const query = `lat=${lat}&lon=${lon}`;
  try {
    const response = await fetch('https://nominatim.openstreetmap.org/reverse?format=json&' + query);
    const location = await response.json();
    return {
      lat: +location.lat,
      lng: +location.lon,
      address: `${location.address.road},${location.address.postcode} ${location.address.city}`
    };
  } catch (error) {
    console.log(error);
  }
};
