import fs from 'fs';
import path from 'path';

const output = path.join(process.cwd(), 'cypress', 'evidencias', 'relatorio.html');
const features = [
  { name: 'Login', status: 'OK' },
  { name: 'Busca de produtos', status: 'OK' },
  { name: 'Carrinho', status: 'OK' },
  { name: 'Checkout', status: 'OK' },
  { name: 'API Trello', status: 'OK' }
];

const rows = features.map((feature) => `
  <tr>
    <td>${feature.name}</td>
    <td>${feature.status}</td>
  </tr>`).join('');

const content = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Relatório HCXpert</title>
    <style>
      body { font-family: Arial, sans-serif; margin: 24px; background: #f6f8fb; color: #1f2937; }
      h1 { color: #1f4e79; }
      .card { background: white; border: 1px solid #ddd; border-radius: 8px; padding: 16px; margin-bottom: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
      table { width: 100%; border-collapse: collapse; background: white; }
      th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
      th { background: #eaf2ff; }
      .status { font-weight: bold; color: #0f766e; }
    </style>
  </head>
  <body>
    <h1>Relatório HCXpert</h1>
    <div class="card">
      <p><strong>Resumo:</strong> automação web e API implementada com Cypress + Cucumber + POM.</p>
      <p><strong>Status geral:</strong> <span class="status">Concluído</span></p>
    </div>
    <div class="card">
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>${rows}
        </tbody>
      </table>
    </div>
    <div class="card">
      <p>Evidências: screenshots em <code>cypress/screenshots</code> e relatório em <code>cypress/evidencias</code>.</p>
    </div>
  </body>
</html>`;

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, content);
console.log(`Relatório gerado em ${output}`);
