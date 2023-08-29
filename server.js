const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path")


app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use(express.json());

app.use("/css", express.static(path.resolve(__dirname, "./public/css")));
app.use("/js", express.static(path.resolve(__dirname, "./public/js")));
app.use("/axios",express.static(path.resolve(__dirname, "node_modules/axios/dist")));



const Data = require("./server/DataSource")



app.get("/", (req, res)=>{
     let continents = Data.map(countr=> Object.keys(countr)[0])
     res.render("index", {continents})

})



app.post("/grabCountries", (req, res)=>{
     try {
      
       const { Continent } = req.body;

     let countries;

     for (let obj of Data) {
       if (obj.hasOwnProperty(Continent)) {
         countries = obj[Continent];
         break;
       }
     }
      res.status(200).json(countries)
     } catch (error) {
        console.log(error)
     }
})




app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
