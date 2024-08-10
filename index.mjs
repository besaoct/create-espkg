import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import inquirer from 'inquirer';
import { execSync } from 'child_process';

// Derive __dirname from import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
 // Get the project name from the command line arguments
 const args = process.argv.slice(2);

 // Prompt for package name
 const { packageName } = await inquirer.prompt([
   { type: 'input', name: 'packageName', message: 'Enter the package name:' }
 ]);

 // Use the first argument as the project name or fall back to the package name
 const projectName = args[0] || packageName;

 // Prepare project directory
 const projectPath = path.join(process.cwd(), projectName);
 fs.ensureDirSync(projectPath);

 // Prompt for author name
 const { author } = await inquirer.prompt([
   { type: 'input', name: 'author', message: 'Enter the author name:' }
 ]);

  // Prompt for template type
  const { templateType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'templateType',
      message: 'Choose a template:',
      choices: [
        'javascript (with types)',
        'react/next (with types)'
      ]
    }
  ]);

  // Determine the template path
  const templatePath = path.join(__dirname, 'choices', templateType.toLowerCase().replace(/ /g, '-'));
  
  // Copy template files
  fs.copySync(templatePath, projectPath);
  
  // Update package.json and other files with user-specific information
  const packageJsonPath = path.join(projectPath, 'package.json');
  let packageJson = await fs.readJson(packageJsonPath);

  packageJson.name = packageName;
  packageJson.author = author;
  packageJson.repository.url = `git+https://github.com/{your-github-username}/${packageName}`;
  packageJson.bugs.url = `https://github.com/{your-github-username}/${packageName}/issues`;
  packageJson.homepage = `https://github.com/{your-github-username}/${packageName}#readme`;
  packageJson.description = `Node package by ${author}`;

  await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

// If the javascript template is chosen, install the latest dependencies
if (templateType === 'javascript (with types)') {
    const devDependencies = [
      '@types/jest',
      '@types/node',
      'esbuild',
      'esbuild-plugin-d.ts',
      'jest',
      'ts-jest',
      'typescript'
    ];

    console.log('Installing devDependencies...');
    execSync(`npm install --save-dev ${devDependencies.join(' ')}`, { cwd: projectPath, stdio: 'inherit' });
  }

// If the react/next template is chosen, install the latest dependencies
if (templateType === 'react/next (with types)') {
    const devDependencies = [
      '@types/jest',
      '@types/node',
      '@types/react',
      'react',
      'react-dom',
      'esbuild',
      'esbuild-plugin-d.ts',
      'jest',
      'ts-jest',
      'typescript'
    ];

    const peerDependencies = [
      'react',
      'react-dom'
    ];

    console.log('Installing devDependencies...');
    execSync(`npm install --save-dev ${devDependencies.join(' ')}`, { cwd: projectPath, stdio: 'inherit' });

    console.log('Installing peerDependencies...');
    execSync(`npm install --save-peer ${peerDependencies.join(' ')}`, { cwd: projectPath, stdio: 'inherit' });
  }

  console.log(`Project ${packageName} has been created successfully at ${projectPath}.`);
  console.log(`\nCopyright © Shafin (@besaoct)`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
