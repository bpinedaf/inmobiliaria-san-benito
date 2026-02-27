# Inmobiliaria San Benito - Sitio Web de Bienes Raíces

Un sitio web moderno, profesional y responsivo de una sola página para "Inmobiliaria San Benito", una empresa de bienes raíces de lujo. Construido con React 19, Tailwind CSS 4 y componentes shadcn/ui.

## Características

- **Diseño Moderno**: Estética minimalista de lujo con acentos en verde esmeralda
- **Listados de Propiedades**: Muestra propiedades destacadas con información detallada
- **Diseño Responsivo**: Diseño mobile-first que funciona en todos los dispositivos
- **Sección de Servicios**: Destaca los servicios inmobiliarios clave
- **Testimonios**: Muestra historias de éxito de clientes
- **Formulario de Contacto**: Formulario fácil de usar para consultas
- **Navegación**: Navegación suave con encabezado fijo
- **Tipografía Profesional**: Playfair Display para títulos, Inter para cuerpo de texto

## Stack Tecnológico

- **Frontend**: React 19 con TypeScript
- **Estilos**: Tailwind CSS 4
- **Componentes**: shadcn/ui
- **Enrutamiento**: Wouter (lado del cliente)
- **Herramienta de Construcción**: Vite
- **Iconos**: Lucide React

## Estructura del Proyecto

```
inmobiliaria-san-benito/
├── client/
│   ├── public/              # Activos estáticos
│   ├── src/
│   │   ├── components/      # Componentes UI reutilizables
│   │   ├── pages/           # Componentes de páginas
│   │   ├── App.tsx          # Componente principal
│   │   ├── main.tsx         # Punto de entrada de React
│   │   └── index.css        # Estilos globales
│   └── index.html           # Plantilla HTML
├── server/                  # Marcador de posición del servidor
├── package.json             # Dependencias
└── README.md               # Este archivo
```

## Comenzar

### Requisitos Previos

- Node.js 18 o superior
- pnpm (recomendado) o npm

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tuusuario/inmobiliaria-san-benito.git
   cd inmobiliaria-san-benito
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   # o
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   pnpm dev
   # o
   npm run dev
   ```

   El sitio web estará disponible en `http://localhost:5173`

## Desarrollo

### Scripts Disponibles

- `pnpm dev` - Inicia el servidor de desarrollo con recarga en caliente
- `pnpm build` - Construir para producción
- `pnpm preview` - Previsualizar compilación de producción localmente
- `pnpm check` - Ejecutar verificación de tipos TypeScript
- `pnpm format` - Formatear código con Prettier

### Personalización

#### Actualizar Información de la Empresa

Edita `client/src/pages/Home.tsx` para actualizar:
- Nombre y marca de la empresa
- Información de contacto
- Horario de oficina
- Enlaces de redes sociales

#### Modificar Propiedades

Actualiza el array `properties` en `Home.tsx` para agregar o modificar listados de propiedades:

```typescript
const properties = [
  {
    id: 1,
    title: "Villa de Lujo Moderna",
    location: "Alturas de San Benito",
    price: "$2,850,000",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    image: "https://...",
    featured: true,
  },
  // Agregar más propiedades...
];
```

#### Personalizar Colores

Edita `client/src/index.css` para modificar la paleta de colores:

```css
:root {
  --primary: #1B4D3E;           /* Verde esmeralda */
  --primary-foreground: #F5F3F0; /* Crema */
  --accent: #D4A574;             /* Oro */
  --background: #FAF6F1;         /* Blanco roto */
  --foreground: #2C2420;         /* Marrón oscuro */
  /* ... más colores ... */
}
```

#### Actualizar Tipografía

Las fuentes se cargan desde Google Fonts en `client/index.html`:
- **Títulos**: Playfair Display (serif, sensación de lujo)
- **Cuerpo**: Inter (sans-serif, legibilidad moderna)

## Despliegue

### Desplegar en Netlify

1. **Enviar a GitHub**
   ```bash
   git add .
   git commit -m "Commit inicial"
   git push origin main
   ```

2. **Conectar a Netlify**
   - Ve a [Netlify](https://netlify.com)
   - Haz clic en "Nuevo sitio desde Git"
   - Selecciona tu repositorio de GitHub
   - Configura los parámetros de construcción:
     - **Comando de construcción**: `pnpm build`
     - **Directorio de publicación**: `dist/public`
   - Haz clic en "Desplegar sitio"

3. **Dominio Personalizado** (Opcional)
   - En el panel de Netlify, ve a "Configuración de dominio"
   - Agrega tu dominio personalizado
   - Sigue las instrucciones de configuración de DNS

### Desplegar en Otras Plataformas

#### Vercel
```bash
npm install -g vercel
vercel
```

#### GitHub Pages
1. Actualiza `package.json` con la URL de tu repositorio
2. Ejecuta: `pnpm build`
3. Envía la carpeta `dist` a GitHub Pages

## Compatibilidad de Navegadores

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)

## Rendimiento

- Imágenes optimizadas con carga perezosa
- Minificación de CSS y tree-shaking
- División de código JavaScript
- Imágenes responsivas para diferentes tamaños de pantalla

## SEO

El sitio web incluye:
- Estructura HTML semántica
- Etiquetas meta para compartir en redes sociales
- Etiquetas Open Graph
- Configuración de viewport amigable con dispositivos móviles

## Licencia

Licencia MIT - siéntete libre de usar este proyecto para tus propios propósitos.

## Soporte

Para preguntas o problemas, por favor:
1. Revisa la documentación existente
2. Revisa los comentarios en el código
3. Crea un problema en GitHub

## Mejoras Futuras

- [ ] Búsqueda y filtrado de propiedades
- [ ] Página de detalles avanzados de propiedades
- [ ] Tours virtuales
- [ ] Sección de blog
- [ ] Suscripción a boletín informativo
- [ ] Soporte multiidioma
- [ ] Integración con datos de MLS
- [ ] Integración con CRM

---

**Construido con ❤️ para la excelencia en bienes raíces de lujo**
