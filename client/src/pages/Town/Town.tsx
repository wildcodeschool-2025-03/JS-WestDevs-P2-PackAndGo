import "./Town.css";
// import { useEffect, useState } from "react";

function Town() {
  return <h1>Commit</h1>;
  // const [city, setCity] = useState([]);
  // const [belge, setBelge] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3310/api/cities")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("Données reçues:", data);
  //       setCity(data);
  //       const filteredBelgium = data.filter((city) =>
  //         city.data.attributes.name.toLowerCase().includes("belgium"),
  //       );
  //       setBelge(filteredBelgium);
  //     })
  //     .catch((error) => {
  //       console.error("Erreur détaillée:", error);
  //     });
  // }, []);
  // return (
  //   <main>
  //     <h1>Belgium</h1>
  //     <div className="list-cities">
  //       {/* {belge.map((city) => (
  //         <div key={city.data.id} className="city-item">
  //           <h2>{city.data.attributes.short_name}</h2>
  //           <img
  //             src={
  //               city.included.find((item) => item.type === "photo").attributes
  //                 .image.medium
  //             } //Même image à chaque fois... Dégoûté...
  //             alt="test"
  //           />
  //         </div>
  //       ))} */}
  //       {belge.map((city) => (
  //         <div key={city.data.id}: any className="city-item">
  //           <h2>{city.data.attributes.short_name}</h2>
  //         </div>
  //       ))}
  //     </div>
  //     {/* Test nombre de ville, censé être 5 sinon, il y a une erreur. */}
  //     <p>{belge.length}</p>
  //   </main>
  // );
}
export default Town;
