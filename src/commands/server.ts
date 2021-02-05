import * as path from 'path'
import * as fs from 'fs-extra'

import { Command, flags } from '@oclif/command'
const server = require('@tru_id/dev-server')

export default class Serve extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ tru server
`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    localtunnel: flags.boolean({
      description: 'Run a localtunnel to expose the server to the Internet',
      char: 't',
      default: false
    }),
    'localtunnel-subdomain': flags.string({
      description: 'The subdomain for the local tunnel',
      char: 's'
    }),
    // TODO share with @tru_id/cli
    'project-dir': flags.string({
      description: 'The directory that contains the tru.json Project configuration file',
      default: '.'
    }),
    port: flags.integer({
      description: 'The port the server should listen on',
      char: 'p',
      default: 8080
    }),
  }

  async run() {
    const { flags } = this.parse(Serve)
    const projectConfig = await this.loadProjectConfig(flags)

    server.serve({
      port: flags.port,
      localtunnel: {
        enabled: flags.localtunnel,
        subdomain: flags['localtunnel-subdomain']
      },
      project: {
        client_id: projectConfig.credentials[0].client_id,
        client_secret: projectConfig.credentials[0].client_secret
      }
    })
  }

  // TODO share with @tru_id/cli 
  async loadProjectConfig(flags: any) {
    const projectDirectory = flags['project-dir'] ?? process.cwd()
    const projectConfigFullPath = path.join(projectDirectory, 'tru.json')
    const projectConfigExists = fs.existsSync(projectConfigFullPath)
    if (projectConfigExists === false) {
      this.log(`A project configuration file does not exist at "${projectConfigFullPath}".\n` +
        'Please provide a valid directory path using the `--project-dir` flag or run `tru projects:create` to create a project and associated configuration file.')
      this.exit(1)
    }
    try {
      return await fs.readJson(projectConfigFullPath)
    }
    catch (error) {
      this.log('There was a problem loading the tru.json configuration file',
        `${error.toString()} ${JSON.stringify(error)}`)
      this.exit(1)
    }
  }
}
