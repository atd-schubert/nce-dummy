* ! This is just a dummy for a README.md ! *

# dummy extension for NCE
## Description
This is an nce extension for [dummy](https://dummy/---------).

## How to install
Install with npm: `npm install --save nce-dummy`

Integrate in NCE with the [extension-manager](https://www.npmjs.com/package/nce-extension-manager):

```
var NCE = require("nce");
var nce = new NCE(/*{}*/);
var extMgr = require("nce-extension-manager")(nce);

var dummy = extMgr.getActivatedExtension("dummy");
```

## How to use
### Config settings
You are able to use the following [config-settings](https://github.com/atd-schubert/node-nce/wiki/Extension-Class#configuration) with their defaults:

    * `route: "/dummy"`: Sub-URL to listen
    * `dumpPath: process.cwd() + "/dummy"`: Directory to dump files
    * `logger: {}`: Settings for [logger-extension](https://github.com/atd-schubert/nce-winston)

### Basic methods
#### ext.dummy(name, cb, opts)
Dummy method.

##### Arguments
1. `name`[String]:
1. `cb`[Function]: callback-function with the arguments:
    1. `error`[Error]: Used for exceptions
    1. `data`[Buffer]: Dummy-Data
    1. `result`[Object]: Result of the query
        * `content`[String]:
        * `query`[String]:
1. `opts`[Object]: Options: