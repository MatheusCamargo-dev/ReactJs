import { useEffect, useState } from 'react'
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'

interface Coordinates{
  latitude: number;
  longitude: number;
}
export default function Location() {
  const [location, setLocation] = useState<Coordinates>();

  const handlePositionReceived = (position: GeolocationPosition ) => {
    const { latitude, longitude } = position.coords;
    setLocation({latitude, longitude})
  }

  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionReceived);
  }, [])


  return(
    <div className='col mt-5 text-info'>
      <h1>Latitude: {location?.latitude}</h1>
      <h1>Longitude: {location?.longitude}</h1>
    </div>
  );
}

