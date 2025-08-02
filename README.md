# real-simple-template

A simple template engine, Support CJS and ESM and UMD.

## Install
```bash
npm install real-simple-template --save
```
## Usage

### ESM
```js
import { renderTemplate } from 'real-simple-template';

renderTemplate('Hello, ${name}!', { name: 'World' });

// Hello, World!

```
### CJS
```js
const { renderTemplate } = require('real-simple-template');

renderTemplate('Hello, ${name}!', { name: 'World' });

// Hello, World!
```

### UMD
```html
<script src="https://unpkg.com/real-simple-template"></script>
<script>
  SimpleTemplate.renderTemplate('Hello, ${name}!', { name: 'World' });
  // Hello, World!
  </script>
```
