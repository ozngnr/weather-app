import { useState } from "react";

export default function useTempUnit() {
  const [isFahrenheit, setIsFahrenheit] = useState(false)

  const toggleTemp = () => setIsFahrenheit(prevF => !prevF)

  const temperature = (temp) => {
    temp = Math.round(temp)

    if (isFarenheit) {
      const tempF = Math.round((temp * 9/5) + 32) + "°F"
      return tempF
    }
    return temp + "°C"
  }

  return [isFahrenheit, temperature]
};

