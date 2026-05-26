# Matías Cruz — Portafolio Personal

Portafolio web personal construido con React, TypeScript y Tailwind CSS. Incluye modelo 3D interactivo, internacionalización (ES/EN), dark mode, formulario de contacto funcional vía Vercel Serverless Functions y proyectos dinámicos desde la API de GitHub.

**Live:** [matiascruzportafolio.vercel.app](https://matiascruzportafolio.vercel.app)

---

## Tech Stack

| Categoría | Tecnología |
|-----------|-----------|
| Frontend | React 19, TypeScript 5.7, Vite 6 |
| Estilos | Tailwind CSS 3 |
| 3D | React Three Fiber + Drei |
| i18n | i18next (ES/EN) |
| Backend | Vercel Serverless Functions |
| Email | Nodemailer (Gmail SMTP) |
| Deploy | Vercel (auto-deploy desde GitHub) |

---

## Características

- Dark mode persistente (localStorage)
- Menú hamburguesa responsive en móvil
- Formulario de contacto con envío de email real
- Proyectos cargados dinámicamente desde GitHub API (con fallback local)
- Modelo 3D animado con controles orbitales
- SEO con Open Graph y Twitter Cards
- Selector de idioma (Español / Inglés)

---

## Estructura del proyecto

```
├── client/
│   ├── api/
│   │   └── contact.ts          # Serverless function (email)
│   ├── public/
│   │   ├── images/             # Imágenes de proyectos
│   │   └── bananacat.glb       # Modelo 3D
│   ├── src/
│   │   ├── components/         # Componentes React
│   │   ├── locales/            # Traducciones ES/EN
│   │   ├── pages/              # Página principal
│   │   ├── i18n.ts             # Configuración i18next
│   │   └── main.tsx            # Entry point
│   ├── vercel.json             # Config de Vercel
│   └── package.json
├── .env.example                # Variables de entorno requeridas
└── README.md
```

---

## Instalación local

```bash
# Clonar el repositorio
git clone https://github.com/NiftyBoi/portfolio.git
cd portfolio

# Instalar dependencias del cliente
cd client
npm install

# Iniciar en desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

---

## Variables de entorno

Para que el formulario de contacto funcione, configura estas variables en el panel de Vercel (Settings > Environment Variables):

| Variable | Descripción |
|----------|-------------|
| `EMAIL_USER` | Correo Gmail desde donde se envían los emails |
| `EMAIL_PASS` | App Password de Gmail (16 caracteres) |
| `EMAIL_TO` | Correo destino donde recibes los mensajes |

Ver `.env.example` para referencia.

---

## Deploy

El proyecto se despliega automáticamente en Vercel con cada push a `main`. La configuración de Vercel usa:

- **Root Directory:** `client`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

---

## Licencia

Proyecto personal. El modelo 3D "Cute cat in cute banana" por SOBOL está bajo licencia CC BY 4.0.
