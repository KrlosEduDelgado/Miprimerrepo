import express from "express";

const api = express();

api.get("/", (req, res) => {    
    return res.json(
        {
            msg: "Bienvenido a mi API",
        }
    );
});

export default api;