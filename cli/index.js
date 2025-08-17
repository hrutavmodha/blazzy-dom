#!/usr/bin/env node
import path from 'path'
import fs from 'fs-extra'
import chalk from 'chalk'
import inquirer from 'inquirer'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const args = process.argv.slice(2)
const projectName = args[0] || 'my-app'
const targetDir = path.join(process.cwd(), projectName)
console.log(chalk.blue('🚀 Welcome to Blazzy CLI!'))
console.log(chalk.blue('Creating a new Blazzy DOM project...\n'))
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
            name: 'JavaScript (Recommended for beginners)',
            value: 'javascript'
        }, {
            name: 'TypeScript (Recommended for production)',
            value: 'typescript'
        }],
        default: 'javascript'
    }, {
        type: 'list',
        name: 'packageManager',
        message: 'Choose a package manager:',
        choices: [{
            name: 'npm',
            value: 'npm'
        }, {
            name: 'yarn',
            value: 'yarn'
        }, {
            name: 'pnpm',
            value: 'pnpm'
        }],
        default: 'npm'
    }]
    return await inquirer.prompt(questions)
}

async function scaffold() {
    try {
        const { template, packageManager } = await getUserChoices()
        console.log(chalk.yellow('\n📦 Creating project...'))
        const templateDir = path.join(__dirname, 'templates', template)
        console.log(chalk.gray(`Template directory: ${templateDir}`))
        console.log(chalk.gray(`Current directory: ${process.cwd()}`))
        console.log(chalk.gray(`__dirname: ${__dirname}`))
        if (!fs.existsSync(templateDir)) {
            console.log(chalk.red(`❌ Template directory not found: ${templateDir}`))
            console.log(chalk.gray('Available directories:'))
            try {
                const templatesDir = path.join(__dirname, 'templates')
                if (fs.existsSync(templatesDir)) {
                    const dirs = fs.readdirSync(templatesDir)
                    console.log(chalk.gray(`  - ${templatesDir}: ${dirs.join(', ')}`))
                }
                else {
                    console.log(chalk.gray(`  - ${templatesDir}: does not exist`))
                }
            }
            catch (e) {
                console.log(chalk.gray(`  - Error reading templates directory: ${e.message}`))
            }
            throw new Error(`Template directory not found: ${templateDir}`)
        }
        await fs.copy(templateDir, targetDir)
        const packageJsonPath = path.join(targetDir, 'package.json')
        if (!fs.existsSync(packageJsonPath)) {
            throw new Error(`package.json not found in created project: ${packageJsonPath}`)
        }
        const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'))
        packageJson.name = projectName
        await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 4))

        console.log(chalk.green('\n✅ Project created successfully!\n'))
        console.log(chalk.blue('Next steps:\n'))
        console.log(chalk.white('Run these commands in your terminal:\n'))
        console.log(chalk.bgWhite.black(`cd ${projectName}`))
        console.log(chalk.bgWhite.black(`${packageManager} install`))
        console.log(chalk.bgWhite.black(`${packageManager} run dev`))

        console.log(chalk.gray('\n🎉 Happy coding with Blazzy DOM!'))

    } catch (error) {
        console.log(chalk.red('\n❌ An error occurred while creating the project'))
        console.error(chalk.red(error))
        process.exit(1)
    }
}
scaffold()