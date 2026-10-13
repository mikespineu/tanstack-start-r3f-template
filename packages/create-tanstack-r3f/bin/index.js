#!/usr/bin/env node
import { existsSync, readdirSync } from 'node:fs'
import { readFile, rm, writeFile } from 'node:fs/promises'
import { basename, join, resolve } from 'node:path'
import { downloadTemplate } from 'giget'

const TEMPLATE = 'gh:mikespineu/tanstack-start-r3f-template'

const name = process.argv[2]

if (!name || name.startsWith('-')) {
  console.log('Usage: npm create tanstack-r3f <project-name>')
  process.exit(name ? 0 : 1)
}

const dir = resolve(process.cwd(), name)

if (existsSync(dir) && readdirSync(dir).length > 0) {
  console.error(`Error: "${name}" already exists and is not empty.`)
  process.exit(1)
}

console.log(`Creating ${name}...`)
await downloadTemplate(TEMPLATE, { dir, force: true })

// the CLI package lives in the template repo; new projects don't need it
await rm(join(dir, 'packages'), { recursive: true, force: true })

const pkgPath = join(dir, 'package.json')
const pkg = JSON.parse(await readFile(pkgPath, 'utf8'))
pkg.name = basename(dir)
delete pkg.license
await writeFile(pkgPath, JSON.stringify(pkg, null, 2) + '\n')

console.log(`
Done. Next steps:

  cd ${name}
  npm install
  npm run dev
`)
