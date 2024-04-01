const{createPool} = require("mysql");
const pool = createPool({
    host: "localhost",user:"root", password: "",
     database: "addbook",
    connectionLimit: 10
})
 
pool.query(`select * from BookInfo`, (err, result, field)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})
