import { useState, useEffect } from "react";
export default function SearchResult() {
  function MechanicsList  {
    const [mechanics, setMechanics] = useState([]);
    const [userState, setUserState] = useState('');

    useEffect(() => {
      // Fetch the list of mechanics from an API or data source
      const fetchMechanics = async () => {
        try {
          //TODO: Replace with fetch to DB
          //TODO: Create a json dataset for this
          const response = await fetch('../../assets/mechanics.json');
          const data = await response.json();
          setMechanics(data);
        } catch (error) {
          console.log('Error fetching mechanics:', error);
        }
      };
      fetchMechanics();
    }, []);
  }
    useEffect(() => {
      // Check user's current location and set the state accordingly
      function GetUserLocation() {
        const [stateName, setStateName] = useState('');
        // Perform location detection logic here
        const userLocation = 'StateX'; // Replace with actual user location detection code
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              reverseGeocode(latitude, longitude);
            },
          );
        } 
      }
      // Perform reverse geocoding to get state name from coordinates
      const reverseGeocode = async (lat: number, lng: SVGAnimatedNumber) => {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=API_KEY`);
         
          const data = await response.json();

          // Extract the state name from the response
          const state = data.results[0]?.address_components.find(
            (component) =>
              component.types.includes('administrative_area_level_1')
          )?.long_name;

          setUserState(state || 'Unknown');
        
        []) }
      return (
        <> 
        </>
      );
      }


  
      
