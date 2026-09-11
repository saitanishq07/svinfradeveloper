import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const templateHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(templateHtmlPath)) {
  console.error('Error: dist/index.html not found!');
  process.exit(1);
}

const baseHtml = fs.readFileSync(templateHtmlPath, 'utf-8');

const routes = [
  {
    path: 'about',
    title: 'About Us | SV Infra Developers - Rock Blasting Contractors in Hyderabad',
    description: 'Learn about SV Infra Developers, established in 2023 by Mr. K. Sai Kishore. Rapidly growing infrastructure firm with ₹1.5Cr+ turnover & 100% safety record.',
    canonical: 'https://svinfradeveloper.com/about',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      'name': 'About SV Infra Developers',
      'url': 'https://svinfradeveloper.com/about',
      'description': 'Established in 2023 by Mr. K. Sai Kishore, SV Infra Developers is a rapidly growing infrastructure company with a turnover of ₹1.5 Crores.'
    }
  },
  {
    path: 'services',
    title: 'Rock Blasting & Civil Infrastructure Services | SV Infra Developers',
    description: 'Explore rock blasting & civil infrastructure services by SV Infra Developers in Hyderabad. Control blasting, open blasting, chemical breaking, earthwork & road works.',
    canonical: 'https://svinfradeveloper.com/services',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': 'Rock Blasting & Civil Infrastructure Services',
      'url': 'https://svinfradeveloper.com/services'
    }
  },
  {
    path: 'services/control-blasting',
    title: 'Control Blasting Services in Hyderabad, Telangana | SV Infra Developers',
    description: 'Precision control blasting contractors in Hyderabad. Electronic delay detonator sequencing, seismic vibration monitoring & DGMS safety compliance.',
    canonical: 'https://svinfradeveloper.com/services/control-blasting',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Control Blasting',
      'provider': { '@type': 'GeneralContractor', 'name': 'SV Infra Developers', 'url': 'https://svinfradeveloper.com/' },
      'areaServed': 'Hyderabad & Telangana, India'
    }
  },
  {
    path: 'services/open-blasting',
    title: 'Open Blasting & Heavy Rock Cutting Contractors | SV Infra Developers',
    description: 'Large-scale open blasting contractors in Hyderabad & Telangana for mining, quarrying, and high-tonnage rock displacement with heavy crawler drills.',
    canonical: 'https://svinfradeveloper.com/services/open-blasting',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Open Blasting',
      'provider': { '@type': 'GeneralContractor', 'name': 'SV Infra Developers', 'url': 'https://svinfradeveloper.com/' },
      'areaServed': 'Hyderabad & Telangana, India'
    }
  },
  {
    path: 'services/chemical-blasting',
    title: 'Chemical Blasting & Silent Rock Breaking in Hyderabad | SV Infra',
    description: 'Non-explosive chemical blasting & silent rock breaking contractors in Hyderabad. 100% vibration-free, zero flyrock expansive mortar rock cracking.',
    canonical: 'https://svinfradeveloper.com/services/chemical-blasting',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Chemical Blasting',
      'provider': { '@type': 'GeneralContractor', 'name': 'SV Infra Developers', 'url': 'https://svinfradeveloper.com/' },
      'areaServed': 'Hyderabad & Telangana, India'
    }
  },
  {
    path: 'services/rock-breaking-demolition',
    title: 'Rock Breaking & Demolition Services in Hyderabad | SV Infra',
    description: 'Heavy rock breaking, mechanical hydraulic breaker operations & structural demolition contractors in Hyderabad & Telangana for mass site clearing.',
    canonical: 'https://svinfradeveloper.com/services/rock-breaking-demolition',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Rock Breaking & Demolition Services',
      'provider': { '@type': 'GeneralContractor', 'name': 'SV Infra Developers', 'url': 'https://svinfradeveloper.com/' },
      'areaServed': 'Hyderabad & Telangana, India'
    }
  },
  {
    path: 'services/earthwork-excavation',
    title: 'Earthwork Excavation Contractors in Hyderabad | SV Infra',
    description: 'Mass earthwork excavation, multi-basement cutouts & site grading contractors in Hyderabad & Telangana with heavy excavator fleets.',
    canonical: 'https://svinfradeveloper.com/services/earthwork-excavation',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Earthwork Excavation',
      'provider': { '@type': 'GeneralContractor', 'name': 'SV Infra Developers', 'url': 'https://svinfradeveloper.com/' },
      'areaServed': 'Hyderabad & Telangana, India'
    }
  },
  {
    path: 'services/infrastructure-construction',
    title: 'Road Works & Canal Construction Contractors | SV Infra Developers',
    description: 'Road construction & RCC canal lining contractors in Hyderabad. Subgrade hill rock cutting, highway paving & irrigation channel civil engineering.',
    canonical: 'https://svinfradeveloper.com/services/infrastructure-construction',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Road Works & Canal Construction',
      'provider': { '@type': 'GeneralContractor', 'name': 'SV Infra Developers', 'url': 'https://svinfradeveloper.com/' },
      'areaServed': 'Hyderabad & Telangana, India'
    }
  },
  {
    path: 'projects',
    title: 'Infrastructure & Blasting Projects | SV Infra Developers',
    description: 'Browse infrastructure projects executed by SV Infra Developers for MEIL, NCC Limited, Aparna Enterprises, Kalpataru, and Telangana/AP Governments.',
    canonical: 'https://svinfradeveloper.com/projects',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': 'Infrastructure Projects',
      'url': 'https://svinfradeveloper.com/projects'
    }
  },
  {
    path: 'contact',
    title: 'Contact SV Infra Developers | Hyderabad Office & Enquiries',
    description: 'Get in touch with SV Infra Developers in KPHB, Hyderabad for rock blasting, earthwork & civil construction inquiries. Call +91 9603345669.',
    canonical: 'https://svinfradeveloper.com/contact',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact SV Infra Developers',
      'url': 'https://svinfradeveloper.com/contact'
    }
  }
];

function injectSeo(html, route) {
  let customHtml = html;
  
  // Replace Title
  customHtml = customHtml.replace(
    /<title>.*?<\/title>/gi,
    `<title>${route.title}</title>`
  );
  customHtml = customHtml.replace(
    /<meta name="title" content=".*?" \/>/gi,
    `<meta name="title" content="${route.title}" />`
  );
  customHtml = customHtml.replace(
    /<meta property="og:title" content=".*?" \/>/gi,
    `<meta property="og:title" content="${route.title}" />`
  );

  // Replace Description
  customHtml = customHtml.replace(
    /<meta name="description" content=".*?" \/>/gi,
    `<meta name="description" content="${route.description}" />`
  );
  customHtml = customHtml.replace(
    /<meta property="og:description" content=".*?" \/>/gi,
    `<meta property="og:description" content="${route.description}" />`
  );

  // Replace Canonical
  customHtml = customHtml.replace(
    /<link rel="canonical" href=".*?" \/>/gi,
    `<link rel="canonical" href="${route.canonical}" />`
  );
  customHtml = customHtml.replace(
    /<meta property="og:url" content=".*?" \/>/gi,
    `<meta property="og:url" content="${route.canonical}" />`
  );

  // Inject Route Specific Schema
  if (route.schema) {
    const schemaScript = `<script type="application/ld+json" id="route-static-schema">${JSON.stringify(route.schema)}</script>`;
    customHtml = customHtml.replace('</head>', `  ${schemaScript}\n</head>`);
  }

  return customHtml;
}

console.log('Generating static HTML routes for SEO...');

routes.forEach((route) => {
  const routeHtml = injectSeo(baseHtml, route);

  // 1. Write <route>.html
  const flatHtmlPath = path.join(distDir, `${route.path}.html`);
  fs.mkdirSync(path.dirname(flatHtmlPath), { recursive: true });
  fs.writeFileSync(flatHtmlPath, routeHtml, 'utf-8');

  // 2. Write <route>/index.html
  const nestedDir = path.join(distDir, route.path);
  fs.mkdirSync(nestedDir, { recursive: true });
  fs.writeFileSync(path.join(nestedDir, 'index.html'), routeHtml, 'utf-8');

  console.log(`Generated: dist/${route.path}.html and dist/${route.path}/index.html`);
});

// Also generate dist/404.html
fs.writeFileSync(path.join(distDir, '404.html'), baseHtml, 'utf-8');
console.log('Generated: dist/404.html');

console.log('All static routes generated successfully!');

// Sync generated static directories & assets to root directory for GitHub Pages main branch compatibility
const rootDir = path.resolve(__dirname, '..');

function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

['about', 'services', 'projects', 'contact', 'assets'].forEach((dir) => {
  const src = path.join(distDir, dir);
  const dest = path.join(rootDir, dir);
  if (fs.existsSync(src)) {
    copyDirSync(src, dest);
    console.log(`Synced to root: ${dir}/`);
  }
});

fs.copyFileSync(path.join(distDir, '404.html'), path.join(rootDir, '404.html'));
if (fs.existsSync(path.join(distDir, '.nojekyll'))) {
  fs.copyFileSync(path.join(distDir, '.nojekyll'), path.join(rootDir, '.nojekyll'));
}
console.log('Synced pre-rendered routes, 404.html & assets to root directory successfully!');

