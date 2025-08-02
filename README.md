# @fooyun/simple-template

A simple template engine, Support CJS and ESM and UMD.

## Install
```bash
npm install @fooyun/simple-template --save
```
## Usage
```js
import { renderTemplate } from '@fooyun/simple-template';

renderTemplate('Hello, ${name}!', { name: 'World' });

// Hello, World!

```

