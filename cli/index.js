#!/usr/bin/env node
const path = require('path')
const fs = require('fs-extra')
const args = process.argv.slice(2)
const projectName = args[0] || 'my-app'
const targetDir = path.join(process.cwd(), projectName)
const templateDir = path.join(__dirname, 'templates')
if (fs.existsSync(targetDir)) {
    console.error(`Folder with name ${projectName} already exists in this directory`)
    process.exit(1)
}
const main = async () => {
    try {
        await fs.copy(templateDir, targetDir)
        const packageJsonPath = path.join(targetDir, 'package.json')
        console.log(packageJsonPath)
        const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'))
        console.log(packageJson)
        packageJson.name = projectName
        await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 4))
        console.log(`Project "${projectName}" created successfully\n`)
        console.log('Next steps:\n')
        console.log('Run those commands in terminal:\n')
        console.log(`cd ${projectName}`)
        console.log('npm install')
        console.log('npm run dev')
    }
    catch (error) {
        console.log(`An error occured while creating project boiler-plate`)
        console.error(error)
        process.exit(1)
    }
}
main()