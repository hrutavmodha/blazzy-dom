#!/usr/bin/env node
import fs from 'fs-extra'
import chalk from 'chalk'
import inquirer from 'inquirer'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { exec } from 'child_process'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const args = process.argv.slice(2)
const projectName = args[0] || 'my-app'
const targetDir = join(process.cwd(), projectName)
console.log(chalk.blueBright('🚀 Welcome to Blazzy CLI!'))
console.log(chalk.blueBright('Creating a new Blazzy DOM project...\n'))
if (fs.existsSync(targetDir)) {
    console.log(chalk.red(`❌ Folder with name "${projectName}" already exists in this directory`))
    process.exit(1)
}
async function getUserChoices() {
    const questions = [{
        type: 'list',
        name: 'template',
        message: 'Choose a template:',
        choices: [{
            name: 'JavaScript',
            value: 'javascript'
        }, {
            name: 'TypeScript',
            value: 'typescript'
        }],
        default: 'javascript'
    }]
    return await inquirer.prompt(questions)
}
function handleTemplateNotFound() {
    console.log(chalk.redBright(`❌ Template directory not found: ${templateDir}`))
    try {
        const templatesDir = join(__dirname, 'templates')
        if (fs.existsSync(templatesDir)) {
            const dirs = fs.readdirSync(templatesDir)
            console.log(chalk.gray(` - ${templatesDir}: ${dirs.join(', ')}`))
        }
        else {
            console.log(chalk.gray(` - ${templatesDir}: does not exist`))
        }
    }
    catch (e) {
        console.log(chalk.gray(` - Error reading templates directory: ${e.message}`))
    }
    throw new Error(`Template directory not found: ${templateDir}`)

}
async function scaffold() {
    try {
        const { template, install } = await getUserChoices()
        console.log(chalk.yellow('\n📦 Creating project...'))
        const templateDir = join(__dirname, 'templates', template)
        if (!fs.existsSync(templateDir)) {
            handleTemplateNotFound()
        }
        await fs.copy(templateDir, targetDir)
        const packageJsonPath = join(targetDir, 'package.json')
        if (!fs.existsSync(packageJsonPath)) {
            throw new Error(chalk.redBright(`package.json not found in created project at ${packageJsonPath}`))
        }
        const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'))
        packageJson.name = projectName
        await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 4))
        console.log(chalk.green('\n✅ Project created successfully!\n'))
        console.log(chalk.blue('Next steps:'))
        console.log(chalk.yellowBright(`cd ${projectName}`))
        console.log(chalk.yellowBright(`npm install`))
        console.log(chalk.yellowBright(`npm run dev`))
        console.log(chalk.greenBright('\n🎉 Happy coding with Blazzy DOM!\n'))
    }
    catch (error) {
        console.log(chalk.redBright('\n❌ An error occurred while creating the project'))
        console.error(chalk.redBright(error))
        process.exit(1)
    }
}
scaffold()