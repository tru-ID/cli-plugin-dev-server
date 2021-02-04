@tru_id/cli-plugin-dev-server
=============================

Runs a development server from the tru.ID CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@tru_id/cli-plugin-dev-server.svg)](https://npmjs.org/package/@tru_id/cli-plugin-dev-server)
[![Downloads/week](https://img.shields.io/npm/dw/@tru_id/cli-plugin-dev-server.svg)](https://npmjs.org/package/@tru_id/cli-plugin-dev-server)
[![License](https://img.shields.io/npm/l/@tru_id/cli-plugin-dev-server.svg)](https://github.com/tru-ID/cli-plugin-dev-server/blob/master/package.json)

<!-- toc -->
* [Installation](#installation)
* [Commands](#commands)
<!-- tocstop -->

# Installation

To install plugins you'll need the [tru.ID CLI](https://github.com/tru-ID/cli) `v0.6.0@canary` or above.

```
npm install -g @tru_id/cli@canary
```

You can then install the plugin using:

```sh-session
$ tru plugins:install @tru_id/cli-plugin-dev-server
```

# Commands
<!-- commands -->
* [`tru server`](#tru-server)

## `tru server`

describe the command here

```
USAGE
  $ tru server

OPTIONS
  -h, --help                                         show CLI help
  -p, --port=port                                    [default: 8080] The port the server should listen on
  -s, --localtunnel-subdomain=localtunnel-subdomain  The subdomain for the local tunnel
  -t, --localtunnel                                  Run a localtunnel to expose the server to the Internet

  --project-dir=project-dir                          [default: .] The directory that contains the tru.json Project
                                                     configuration file

EXAMPLE
  $ tru server
```

_See code: [src/commands/server.ts](https://github.com/tru-ID/cli-plugin-dev-server/blob/v0.0.1/src/commands/server.ts)_
<!-- commandsstop -->
