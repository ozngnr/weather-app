import images from "../assets"

export const weatherIcon = (data)  => {
  const stateName = data.weather_state_name.split(' ').join('')
  return images[stateName]
}