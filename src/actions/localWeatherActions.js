import { findWeather } from '../helpers/helpersfunctions'
import { errorCallback } from '../helpers/helpersfunctions'




export function gettingWeather() {
  return async function (dispatch) {
    dispatch({ type: 'ADD_LOCAL_WEATHER', weather: '' });
    navigator.geolocation.getCurrentPosition(
      async pos => {
        const data = await findWeather(pos);
        dispatch({ type: 'ADD_LOCAL_WEATHER', weather: data });
      },
      async error => {
        const data = await errorCallback();
        dispatch({ type: 'ADD_LOCAL_WEATHER', weather: data });
      }
    )
  }

};
