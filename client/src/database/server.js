import express from "express";

const app = express();
const port = 3000;
const countries = [
  {
    id: 1,
    name: "France",
    image:
      "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_1280.jpg",
    tagline:
      "Laissez-vous captiver par la richesse culturelle et la beauté intemporelle de la France, un mélange de romantisme et de gastronomie.",
  },
  {
    id: 2,
    name: "Japan",
    image:
      "https://cdn.pixabay.com/photo/2020/11/24/04/01/pond-5771499_1280.jpg",
    tagline:
      "Le Japon vous transporte dans un monde d’harmonie entre traditions ancestrales et modernité futuriste.",
  },
  {
    id: 3,
    name: "Brazil",
    image:
      "https://cdn.pixabay.com/photo/2020/04/13/22/17/waterfall-5040208_1280.jpg",
    tagline:
      "Dansez au rythme enivrant du Brésil, entre plages mythiques, forêts luxuriantes et fêtes légendaires.",
  },
];

app.get("/", (req, res) => {
  res.send("Prêt(e)s à découvrir le monde ! 🌍✨");
});

app.get("/countries", (req, res) => {
  res.json(countries);
});

app.listen(port);
