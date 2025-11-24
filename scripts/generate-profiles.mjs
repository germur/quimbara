import fs from 'fs';
import path from 'path';

const fighters = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src/data/fighters.json'), 'utf-8'));

const TARGET_DIR = path.join(process.cwd(), 'src/content/blog/perfiles-luchadores');

// Ensure directory exists
if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

fighters.forEach(fighter => {
  const filePath = path.join(TARGET_DIR, `${fighter.slug}.mdx`);

  // Skip if file exists to avoid overwriting custom content (optional, currently overwriting for demo)
  // if (fs.existsSync(filePath)) return;

  // Escape double quotes in name and description for YAML
  const escapedName = fighter.name.replace(/"/g, '\\"');
  const escapedDescription = fighter.description.replace(/"/g, '\\"');

  const content = `---
title: "${escapedName}: Perfil y Línea de Tiempo"
description: "${escapedDescription}"
publishDate: "${new Date().toISOString().split('T')[0]}"
tags:
  - UFC
  - ${escapedName}
  - Perfil
  - Automated
heroImage:
  src: "./mma-generic-cover.jpg"
  color: "#0F172A"
---

import FighterTimeline from '@/components/special/FighterTimeline.astro';

<FighterTimeline 
  fighterId={${fighter.id}}
  historicalEvents={[
    {
      year: '2024',
      title: 'Generado Automáticamente',
      description: 'Este perfil se actualiza automáticamente con la API de MMA.',
      type: 'fight'
    }
  ]}
/>
`;

  try {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Generated profile for ${fighter.name} at ${filePath}`);
  } catch (err) {
    console.error(`❌ Error generating profile for ${fighter.name}:`, err);
  }
});

console.log('🎉 All profiles generated successfully!');
