const express = require("express");
const cors = require("cors");
const app = express();


var corsOptions={
    origin:"http://localhost:8081"
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.json({ message: "Welcome to  application." })
})

const PORT = process.env.PORT || 8080;

const network = require('./routes/network.routes')
const networkOrganization = require('./routes/network_organization.routes')


app.use('/api/network',network)
app.use('/api/network-organization',networkOrganization)

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}. http://localhost:8080`);});


