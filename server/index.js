const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "tha171999",
    database: "banco1",
});

app.use(express.json());
app.use(cors());

app.post("/Register", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    

    db.query("SELECT * FROM usuarios WHERE email = ?", [email],
    (err, result) =>{
        if(err){
            res.send(err);
            
        }
        if(result.length == 0) {
            bcrypt.hash(password, saltRounds, (erro, hash) =>{

                db.query("INSERT INTO usuarios (name, email, password) VALUES (?, ?, ?)",
                    [name, email, hash], 
                    (err, response) => {
                        if(err){
                            res.send(err);
                        }
                        res.send({ msg: "cadastrado com sucesso!" });
                    }
                );
            })
        } else {
            res.send({ msg: "Usuario já cadastrado!" });
        }
    });
});

app.post("/Login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const span = req.body.span;

    db.query("SELECT * FROM usuarios WHERE email = ?",
        [email], (err, result) => {
            if(err){
                res.send(err);
            }
            if(result.length > 0){
                bcrypt.compare(password, result[0].password, (erro, result) => {
                    if(result) {
                        res.send(span + " Usúario logado com sucesso!");
                    }else{
                        res.send("Senha incorreta!");
                    }
                });
            }
            else{
                res.send({msg: "Usuario não encontrado"})
            }
        }
    );
});

app.listen(3001, () => {
    console.log("rodando na porta 3001");
});
