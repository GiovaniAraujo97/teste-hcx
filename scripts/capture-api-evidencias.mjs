import fs from 'fs';
import path from 'path';

const output = path.join(process.cwd(), 'cypress', 'evidencias', 'api', 'evidencia-api.html');
const content = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Evidência API</title>
  </head>
  <body>
    <h1>Evidência API</h1>
    <p>Arquivo gerado automaticamente para o desafio HCXpert.</p>
  </body>
</html>`;

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, content);
console.log(`Evidência API gerada em ${output}`);
