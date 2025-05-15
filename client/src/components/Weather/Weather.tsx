import { useEffect, useState } from "react";
import useHandleModal from "../../hooks/useHandleModal";
import type { WeatherData, WeatherProps } from "../../types/Town";

function Weather({ lat, lon }: WeatherProps) {
  const { handleChange } = useHandleModal();
  const [isOpen, setIsOpen] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && !weatherData) {
      setLoading(true);
      const API_URL = `https://my.meteoblue.com/packages/basic-day?apikey=UzV0g6QPAd4N7OEY&lat=${lat}&lon=${lon}&asl=13&format=json`;

      fetch(API_URL)
        .then((res) => {
          if (!res.ok) throw new Error("Erreur lors de l'appel API");
          return res.json();
        })
        .then((data: WeatherData) => {
          setWeatherData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Erreur:", err);
          setError("Erreur de chargement des données météo");
          setLoading(false);
        });
    }
  }, [isOpen, weatherData, lat, lon]);

  return (
    <>
      <button type="button" onClick={() => handleChange(setIsOpen, isOpen)}>
        Météo
      </button>
      {isOpen && (
        <div>
          {loading && <p>Chargement des données météo...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {weatherData && (
            <>
              <article>
                <h3>Température minimale :</h3>
                <p>
                  {weatherData.data_day.temperature_min[0]} {weatherData.units.temperature}
                </p>
              </article>
              <article>
                <h3>Température maximale :</h3>
                <p>
                  {weatherData.data_day.temperature_max[0]} {weatherData.units.temperature}
                </p>
              </article>
              <article>
                <h3>Précipitations :</h3>
                <p>
                  {weatherData.data_day.precipitation[0]} {weatherData.units.precipitation}
                </p>
              </article>
              <article>
                <h3>Prévisions des prochains jours :</h3>
                {weatherData.data_day.time.map((day, index) => (
                  <div key={day}>
                    <strong>{day}</strong> - Min: {weatherData.data_day.temperature_min[index]} {weatherData.units.temperature}, Max: {weatherData.data_day.temperature_max[index]} {weatherData.units.temperature}, Précipitations: {weatherData.data_day.precipitation[index]} {weatherData.units.precipitation}
                  </div>
                ))}
              </article>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Weather;
