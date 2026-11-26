const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.angular') continue;

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const landingDir = 'd:/Projetos/Vanessa/landingpage';
const projDir = 'd:/Projetos/Vanessa/projeto-de-extensao';

// Clear old obsolete files in projDir
const toRemove = ['css', 'js', 'index.html'];
toRemove.forEach(f => {
  const p = path.join(projDir, f);
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
});

copyDir(landingDir, projDir);
console.log('Successfully mirrored to projeto-de-extensao');
