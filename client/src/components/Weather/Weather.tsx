import { useEffect, useState } from "react";
import type { WeatherData, WeatherProps } from "../../types/Town";
import "./Weather.css";

function Weather({ lat, lon }: WeatherProps) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!weatherData) {
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
  }, [weatherData, lat, lon]);

  return (
    <section className="town-text-detail weather-detail">
      {loading && <p>Chargement des données météo...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weatherData && (
        <>
          <h3>Température minimale :</h3>
          <p>
            {weatherData.data_day.temperature_min[0]}{" "}
            {weatherData.units.temperature}
          </p>

          <h3>Température maximale :</h3>
          <p>
            {weatherData.data_day.temperature_max[0]}{" "}
            {weatherData.units.temperature}
          </p>

          <h3>Précipitations :</h3>
          <p>
            {weatherData.data_day.precipitation[0]}{" "}
            {weatherData.units.precipitation}
          </p>

          <h3>Prévisions des prochains jours :</h3>
          {weatherData.data_day.time.map((day, index) => (
            <article key={day}>
              <strong>{day}</strong> - Min:{" "}
              {weatherData.data_day.temperature_min[index]}{" "}
              {weatherData.units.temperature}, Max:{" "}
              {weatherData.data_day.temperature_max[index]}{" "}
              {weatherData.units.temperature}, Précipitations:{" "}
              {weatherData.data_day.precipitation[index]}{" "}
              {weatherData.units.precipitation}
            </article>
          ))}
        </>
      )}
    </section>
  );
}

export default Weather;
