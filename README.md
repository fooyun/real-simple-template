# real-simple-template

A simple template engine, Support CJS and ESM and UMD.

## Install
```bash
npm install real-simple-template --save
```
## Usage
```js
import { renderTemplate } from 'real-simple-template';

renderTemplate('Hello, ${name}!', { name: 'World' });

// Hello, World!

```

