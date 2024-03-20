import { React, useState, useEffect } from "react";
export default function SearchResult() {
  const MechanicsList = () => {
    const [mechanics, setMechanics] = useState([]);
    const [userState, setUserState] = useState('');

    useEffect(() => {
      // Fetch the list of mechanics from an API or data source
      const fetchMechanics = async () => {
        try {
          //TODO: Replace with fetch to DB
          const response = await fetch('https://api.example.com/mechanics');
          const data = await response.json();
          setMechanics(data);
        } catch (error) {
          console.log('Error fetching mechanics:', error);
        }
      };

      fetchMechanics();
    }, []);

    useEffect(() => {
      // Check user's current location and set the state accordingly
      function GetUserLocation() {
        const [stateName, setStateName] = useState('');
        // Perform location detection logic here
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              reverseGeocode(latitude, longitude);
            },
            (error) => {
              console.log('Error getting user location:', error);
            }
          );
        } else {
          console.log('Geolocation is not supported by this browser.');
        }
      };
      // Perform reverse geocoding to get state name from coordinates
      const reverseGeocode = async (lat, lng) => {
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=YOUR_API_KEY`
          );
          const data = await response.json();

          // Extract the state name from the response
          const state = data.results[0]?.address_components.find(
            (component) =>
              component.types.includes('administrative_area_level_1')
          )?.long_name;

          setStateName(state || 'Unknown');
        } catch (error) {
          console.log('Error retrieving state name:', error);
        }
      };

      getUserLocation();
    }, []);
    setUserState(userLocation);
  }

  const filteredMechanics = mechanics.filter(
    (mechanic) => mechanic.state === userState
  );

  return (
    <div>
      <h2>Mechanics in {userState}</h2>
      <ul>
        {filteredMechanics.map((mechanic) => (
          <li key={mechanic.id}>{mechanic.name}</li>
        ))}
      </ul>
    </div>
  );
}
//Display a number of mechanics depending on user location
return (
  <div className="SearchResult">
    {/**NavBar*/}
    <h1>Find a Mechanic</h1>
    {/*Two Text Fields that can filter results*/}
    <select name="Popular Services">
      <option value="someOption">Some option</option>
      <option value="otherOption">Other option</option>
    </select>
    <select name="Specializing in">
      <option value="someOption">Some option</option>
      <option value="otherOption">Other option</option>
    </select>

  </div>
)
