// TODO: add and export your own actions
import cities from '../data/cities';

export function setCities() {
  // This would be an api call

  return {
    type: 'SET_CITIES',
    payload: cities
  };
}

export function setActiveCity(city) {
  return {
    type: 'SET_ACTIVE_CITY',
    payload: city
  };
}
