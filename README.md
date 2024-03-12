# Frontend Mentor - Countries API

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Table of contents

- [Overview](#overview)
  - [Links](#links)

## Overview

- [Solution]()
- [Site](https://countries-api-zeta-flame.vercel.app/)

### Links

- [REST Countries API](https://restcountries.com)
- [named vs default export](https://bootcamp.uxdesign.cc/named-export-vs-default-export-in-es6-a2370b062f17)
- [TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts"](https://github.com/TypeStrong/ts-node/issues/1997) - just use tsx instead
- [No async client component](https://nextjs.org/docs/messages/no-async-client-component)
- [remotePatterns - Allow external images (next.config.mjs)](https://nextjs.org/docs/app/api-reference/components/image#remotepatterns)
- [TanStack Table](https://tanstack.com/table/latest/docs/introduction)
- [Testing] (https://www.youtube.com/watch?v=pnLC-9waA44)
- [Next testing error](https://github.com/vercel/next.js/issues/53272)
- [Next testing docs](https://nextjs.org/docs/app/building-your-application/testing/jest)
- [not wrapped in act(...)](https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning)

#### Testing Set-up

Set up dev dependencies

```bash
npm i -D @testing-library/jest-dom @testing-library/react @testing-library/user-event jest jest-environment-jsdom ts-jest
```

Need ts-node for the jest-config.ts

```bash
npm i -D ts-node
```

Quikcer approach, set up the project from the off...

```bash
npx create-next-app@latest --example with-jest your-app
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```
