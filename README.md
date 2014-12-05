# NCE extension dummy
## Description
A dummy extension for the nce cms

## How to install
Install with npm: `npm install --save nce-dummy`

Integrate in NCE:

```
var NCE = require("nce");
var nce = new NCE(/*{}*/);
var dummy = require("nce-dummy");
var ext = dummy(nce);
ext.install();
ext.activate();
```

Or use nce-extension-manager...

## How to use
### Basic funcitons
*Describe the functions of your extension*