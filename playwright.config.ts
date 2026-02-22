// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
        // Graba todo el test
        
  reporter: [
  ['html'],
  ['junit', { outputFile: 'results.xml' }]
], // Esto obligará a abrirlo al terminar
  use: {
    baseURL: 'https://www.leagueoflegends.com/es-es/', 
    trace: 'on',           // ⬅️ ESTO ES ORO. Registra cada micro-paso.
    video: 'on',   
    screenshot: 'on',   
    
  },
  fullyParallel: true, 
  

  workers: process.env.CI ? 2 : undefined,

  outputDir: 'test-results/', // Carpeta para videos y capturas
});