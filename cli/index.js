#!usr/bin/env node
const path = require('path')
const fs = require('fs-extra')
const args = process.argv.slice(2)
const projectName = args[0] || 'my-app'
const cwd = process.cwd()
const targetDir = path.join(cwd, projectName)
const templateDir = path.join(__dirname, 'templates')
if (fs.existsSync(targetDir)) {
    console.error(`Folder with name ${projectName} already exists in this directory`)
    process.exit(1)
}
(async () => {
    try {
        await fs.copy(templateDir, targetDir)
        const packageJsonPath = path.join(targetDir, '..', 'package.json')
        const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'))
        packageJson.name = projectName
        await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 4))
        console.log(`Project "${projectName}" created successfully\n`)
        console.log('Next steps:\n')
        console.log('Run those commands in terminal:\n')
        console.log(`cd ${projectName}`)
        console.log('npm install --save-dev vite typescript --save blazzy-dom')
        console.log('npm run dev')
    }
    catch (error) {
        console.log(`An error occured while creating project boiler-plate`)
        console.error(error)
        process.exit(1)
    }
})