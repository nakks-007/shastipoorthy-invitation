const { execSync } = require('child_process');
const fs = require('fs');

const version = execSync('git describe --tags --abbrev=0').toString().trim();
const commit = execSync('git rev-parse --short HEAD').toString().trim();
const date = new Date().toISOString();

const content = `
export const APP_VERSION = '${version}';
export const APP_COMMIT = '${commit}';
export const BUILD_DATE = '${date}';
`;

fs.writeFileSync('./src/environments/version.ts', content);

console.log('✅ Version file generated');