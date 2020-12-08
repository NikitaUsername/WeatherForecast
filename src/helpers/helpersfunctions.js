
export async function findWeatherByName (name) {
  const api_url = await
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&APPID=1db91134dffc102e728e7a3d0ad5eb23`);
  const data = await api_url.json();
  return data;
}

export function addToStorage (name) {
  const list = localStorage.getItem('list');
  if (list === null) {
    let cities = {
      cities: [name]
    }
    localStorage.setItem('list', JSON.stringify(cities))

  }
  else {
    const jsonlist = JSON.parse(list);
    const add = jsonlist.cities.push(name);
    const newlist = jsonlist;
    localStorage.setItem('list', JSON.stringify(newlist))
  }
}





export function deleteFromStorage (name) {
  const list = localStorage.getItem('list');
    const jsonlist = JSON.parse(list);
    const index = jsonlist.cities.findIndex(city => city === name);
    jsonlist.cities.splice(index, 1);
    const newlist = jsonlist;
    localStorage.setItem('list', JSON.stringify(newlist))
  }

