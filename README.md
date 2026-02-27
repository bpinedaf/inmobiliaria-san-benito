# Inmobiliaria San Benito - Real Estate Website

A modern, professional, and responsive one-page website for "Inmobiliaria San Benito," a luxury real estate company. Built with React 19, Tailwind CSS 4, and shadcn/ui components.

## Features

- **Modern Design**: Minimalist luxury aesthetic with emerald green accents
- **Property Listings**: Showcase featured properties with detailed information
- **Responsive Layout**: Mobile-first design that works on all devices
- **Services Section**: Highlight key real estate services
- **Testimonials**: Display client success stories
- **Contact Form**: Easy-to-use contact form for inquiries
- **Navigation**: Smooth scrolling navigation with fixed header
- **Professional Typography**: Playfair Display for headlines, Inter for body text

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui
- **Routing**: Wouter (client-side)
- **Build Tool**: Vite
- **Icons**: Lucide React

## Project Structure

```
inmobiliaria-san-benito/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # React entry point
│   │   └── index.css        # Global styles
│   └── index.html           # HTML template
├── server/                  # Server placeholder
├── package.json             # Dependencies
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/inmobiliaria-san-benito.git
   cd inmobiliaria-san-benito
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

   The website will be available at `http://localhost:5173`

## Development

### Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm check` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier

### Customization

#### Update Company Information

Edit `client/src/pages/Home.tsx` to update:
- Company name and branding
- Contact information
- Office hours
- Social media links

#### Modify Properties

Update the `properties` array in `Home.tsx` to add or modify property listings:

```typescript
const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "San Benito Heights",
    price: "$2,850,000",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    image: "https://...",
    featured: true,
  },
  // Add more properties...
];
```

#### Customize Colors

Edit `client/src/index.css` to modify the color palette:

```css
:root {
  --primary: #1B4D3E;           /* Emerald green */
  --primary-foreground: #F5F3F0; /* Cream */
  --accent: #D4A574;             /* Gold */
  --background: #FAF6F1;         /* Off-white */
  --foreground: #2C2420;         /* Dark brown */
  /* ... more colors ... */
}
```

#### Update Typography

Fonts are loaded from Google Fonts in `client/index.html`:
- **Headlines**: Playfair Display (serif, luxury feel)
- **Body**: Inter (sans-serif, modern readability)

## Deployment

### Deploy to Netlify

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Select your GitHub repository
   - Configure build settings:
     - **Build command**: `pnpm build`
     - **Publish directory**: `dist/public`
   - Click "Deploy site"

3. **Custom Domain** (Optional)
   - In Netlify dashboard, go to "Domain settings"
   - Add your custom domain
   - Follow DNS configuration instructions

### Deploy to Other Platforms

#### Vercel
```bash
npm install -g vercel
vercel
```

#### GitHub Pages
1. Update `package.json` with your repository URL
2. Run: `pnpm build`
3. Push the `dist` folder to GitHub Pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with lazy loading
- CSS minification and tree-shaking
- JavaScript code splitting
- Responsive images for different screen sizes

## SEO

The website includes:
- Semantic HTML structure
- Meta tags for social sharing
- Open Graph tags
- Mobile-friendly viewport configuration

## License

MIT License - feel free to use this project for your own purposes.

## Support

For questions or issues, please:
1. Check existing documentation
2. Review the code comments
3. Create an issue on GitHub

## Future Enhancements

- [ ] Property search and filtering
- [ ] Advanced property details page
- [ ] Virtual tours
- [ ] Blog section
- [ ] Newsletter signup
- [ ] Multi-language support
- [ ] Integration with MLS data
- [ ] CRM integration

---

**Built with ❤️ for luxury real estate excellence**
