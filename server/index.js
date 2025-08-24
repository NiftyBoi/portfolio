import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', authRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor backend corriendo en http://localhost:${PORT}`));
