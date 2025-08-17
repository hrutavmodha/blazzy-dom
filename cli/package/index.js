#!/usr/bin/env node
import path from 'path'
import fs from 'fs-extra'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const args = process.argv.slice(2)
const projectName = args[0] || 'my-app'
const targetDir = path.join(process.cwd(), projectName)
const templateDir = path.join(__dirname, 'templates')
if (fs.existsSync(targetDir)) {
    console.log(chalk.red(`Folder with name ${projectName} already exists in this directory`))
    process.exit(1)
}
async function scaffold(){
    try {
        await fs.copy(templateDir, targetDir)
        const packageJsonPath = path.join(targetDir, 'package.json')
        const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'))
        packageJson.name = projectName
        await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 4))
        console.log(chalk.green(`Project "${projectName}" created successfully\n`))
        console.log(chalk.green('Next steps:\n'))
        console.log(chalk.green('Run those commands in terminal:\n'))
        console.log(chalk.bgWhite.black(`cd ${projectName}`))
        console.log(chalk.bgWhite.black('npm install'))
        console.log(chalk.bgWhite.black('npm run dev'))
    }
    catch (error) {
        console.log(chalk.red(`An error occured while creating project boiler-plate`))
        console.error(chalk.red(error))
        process.exit(1)
    }
}
scaffold()