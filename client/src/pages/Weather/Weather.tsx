// import { useEffect, useState } from "react";

export default function Weather() {
  return <h1>coucou</h1>;
  // const [data, setData] = useState<any>(null);
  // const [error, setError] = useState<string | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const API_URL = "https://my.meteoblue.com/packages/basic-day?apikey=UzV0g6QPAd4N7OEY&lat=46.7211&lon=-1.94594&asl=13&format=json";

  //   fetch(API_URL)
  //     .then((res) => {
  //       if (!res.ok) throw new Error("Réponse non OK de l’API");
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log("Données complètes reçues de l'API : ", data);
  //       setData(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Erreur lors de l’appel API :", err);
  //       setError("Erreur de chargement des données météo");
  //       setLoading(false);
  //     });
  // }, []);

  // const currentTemperature = data?.data_current?.temperature ?? null; // Valeur de la température actuelle

  // return (
  //   <div>
  //     <h2>Météo actuelle</h2>
  //     {loading ? (
  //       <p>Chargement des données...</p>
  //     ) : error ? (
  //       <p style={{ color: "red" }}>{error}</p>
  //     ) : (
  //       <div>
  //         <h3>Données actuelles :</h3>
  //         <p>Température actuelle : {currentTemperature !== null ? `${currentTemperature}°C` : "Donnée non disponible"}</p>
  //         <p>Température min : {data?.data_day?.temperature_min[0]}°C</p>
  //         <p>Température max : {data?.data_day?.temperature_max[0]}°C</p>
  //         <p>Humidité min : {data?.data_day?.relativehumidity_min[0]}%</p>
  //         <p>Humidité max : {data?.data_day?.relativehumidity_max[0]}%</p>
  //         <p>Vitesse du vent min : {data?.data_day?.windspeed_min[0]} m/s</p>
  //         <p>Vitesse du vent max : {data?.data_day?.windspeed_max[0]} m/s</p>
  //         <p>Pression au niveau de la mer (moyenne) : {data?.data_day?.sealevelpressure_mean[0]} hPa</p>
  //         <p>Prévision de précipitations : {data?.data_day?.precipitation[0]} mm</p>

  //         <h3>Prévisions pour les prochains jours :</h3>
  //         <ul>
  //           {data?.data_day?.time.map((date: string, index: number) => (
  //             <li key={index}>
  //               <strong>{date}</strong> :
  //               <ul>
  //                 <li>Température : {data?.data_day?.temperature_mean[index]}°C</li>
  //                 <li>Vitesse du vent moyenne : {data?.data_day?.windspeed_mean[index]} m/s</li>
  //                 <li>Précipitations : {data?.data_day?.precipitation[index]} mm</li>
  //                 <li>Humidité moyenne : {data?.data_day?.relativehumidity_mean[index]}%</li>
  //               </ul>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     )}
  //   </div>
  // );
}
