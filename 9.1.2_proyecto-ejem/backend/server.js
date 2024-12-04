import { createServer } from 'http';
import dotenv from 'dotenv';
import "./database.js"
import api from './api.js';

dotenv.config();

const PORT = process.env.PORT || 8000

const server = createServer(); //crea el servidor y lo exporta para usarlo en el index.jsco


server.on('listening', () => {
    console.log(`Server running on http://localhost:${PORT} 🚀`);
});

server.on('error', (error) => {
    console.error("Error: en el servidor", error);
});

server.listen(PORT)
