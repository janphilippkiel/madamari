# Madamari 💕

**Your Guide to Marriage between Thais and Germans**

Madamari is a multilingual web application that provides a comprehensive, step-by-step guide for Thai-German couples navigating the complex marriage process. The app offers personalized document checklists and process flows based on your specific situation.

## 🌟 Features

- **Multilingual Support**: Available in German (Deutsch), English, and Thai (ไทย)
- **Personalized Process**: Dynamic document requirements based on your specific circumstances
- **Interactive Checklist**: Track your progress through required documents
- **Document Examples**: Visual references and thumbnails for each required document
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Dark/Light Theme**: Toggle between themes for comfortable viewing
- **Progress Tracking**: Visual progress indicators and completion status
- **Local Storage**: Your progress is automatically saved locally

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/janphilippkiel/madamari.git
cd madamari
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) with custom styling
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Static export ready for GitHub Pages or similar platforms

## 📁 Project Structure

```
madamari/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Locale-specific routes
│   │   ├── layout.tsx     # Locale layout with header/footer
│   │   └── page.tsx       # Main application page
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Root redirect page
├── components/            # React components
│   ├── ui/               # Reusable UI components (Radix-based)
│   ├── DocumentCard.tsx  # Document checklist item component
│   ├── ProcessSteps.tsx  # Main process flow component
│   ├── LanguageSwitcher.tsx # Language selection component
│   └── ThemeToggle.tsx   # Dark/light theme toggle
├── contexts/             # React contexts
│   └── ThemeContext.tsx  # Theme management
├── lib/                  # Utility libraries
│   ├── i18n.ts          # Internationalization utilities
│   ├── localStorage.ts   # Local storage management
│   └── utils.ts         # General utilities
├── locales/             # Translation files
│   ├── de.json          # German translations
│   ├── en.json          # English translations
│   └── th.json          # Thai translations
└── public/              # Static assets
    ├── documents/       # Document thumbnails and examples
    └── ...
```

## 🌍 Internationalization

The app supports three languages with complete translations:

- **German (de)**: Primary language, served at `/de` and root `/`
- **English (en)**: Available at `/en`
- **Thai (th)**: Available at `/th`

All UI text, document descriptions, and process steps are fully localized.

## 📋 Process Steps

The application guides users through 5 main steps:

1. **Thai Documents**: Gathering required documents from Thai authorities
2. **Legalization**: Getting documents legalized at the German Embassy
3. **Translation**: Professional translation by sworn translators
4. **German Registry**: Registration at German registry office
5. **Visa Application**: Marriage visa application process

Each step adapts based on user selections:
- Marriage location (Germany/Thailand)
- Partner marital status (single/divorced)
- German partner birthplace (Germany/abroad)
- Thai partner presence at registry
- Financial sponsorship requirements

## 🎨 Design System

The app uses a warm, wedding-themed design with:

- **Light Theme**: Rose gold primary with warm cream backgrounds
- **Dark Theme**: Champagne gold with elegant dark surfaces
- **Responsive Design**: Mobile-first approach with touch-friendly interactions
- **Accessibility**: WCAG compliant with proper contrast ratios and keyboard navigation

## 🔧 Configuration

### Build Configuration

The project is configured for static export with subdirectory deployment:

```typescript
// next.config.ts
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/madamari',
  assetPrefix: '/madamari',
  images: { unoptimized: true }
}
```

### Deployment

For GitHub Pages or similar static hosting:

```bash
npm run build
```

The built files will be in the `out/` directory.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Areas for Contribution

- Additional language translations
- Document template improvements
- Process flow enhancements
- UI/UX improvements
- Mobile optimization

## 📄 License

To be decided.

## 🙏 Acknowledgments

- Created with love for Thai-German couples navigating the marriage process
- Built with modern web technologies for the best user experience
- Inspired by the need for clear, accessible guidance through complex bureaucratic processes

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/janphilippkiel/madamari/issues) page
2. Create a new issue with detailed information
3. Contribute to discussions and help other users

---

Made with 💕 in Bangkok

*Bringing Thai and German hearts together, one document at a time.*