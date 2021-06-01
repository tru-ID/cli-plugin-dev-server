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

To install plugins you'll need the [tru.ID CLI](https://github.com/tru-ID/cli) `v0.8.0` or above.

```
npm install -g @tru_id/cli@canary
```

You can then install the plugin using:

```sh-session
$ tru plugins:install @tru_id/cli-plugin-dev-server
```

# Commands
<!-- commands -->

<!-- commandsstop -->

## Releasing

### CHANGELOG

Ensure the `CHANGELOG.md` is updated:

```
yarn run changelog
```

Finesse the contents of `CHANGELOG.md` and commit.

### Tag

Tag the version that is being released with the version of the package and, optionally, the tag to be used in NPM:

```
git tag v{version}@{tag}
```

Push the update to the remote.

```
git push v{version}@{tag}
```

### Publish to NPM

To release version run:

```
yarn run publish:latest
```

To release a canary version only run:

```
yarn run publish:canary
```

## License

[MIT](LICENSE)
