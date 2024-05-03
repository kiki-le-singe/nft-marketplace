## Requirements

- [nodejs](http://nodejs.org/)
- [pnpm](https://pnpm.io/) (you can use another package manager, but `pnpm` is recommended)

This is my configuration at the time of writing this README:

> Node `>=21.4.0`
> pnpm `>=8.12.0`

If you don't know some tools used in this project, you can check the following links:

- [Turborepo Quickstart](https://turbo.build/repo/docs)
- [Next.js](https://nextjs.org/docs)
- [tailwindcss](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [NestJS](https://docs.nestjs.com/)
- [Prisma](https://www.prisma.io/)

## Package Manager

[Which package manager do you want to use?](https://turbo.build/repo/docs/getting-started/create-new#which-package-manager-do-you-want-to-use)

Turborepo doesn't handle installing packages, so you'll need to choose one of:

- [npm](https://www.npmjs.com/)
- [pnpm](https://pnpm.io/) (`Turborepo` recommends `pnpm`)
- [Yarn](https://yarnpkg.com/)

## Installation

```shell
$ git clone https://github.com/kiki-le-singe/nft-marketplace.git <name>
$ cd <name>
```

Go to the `apps/api` and add a `.env` file with the following content:

`DATABASE_URL="file:./dev.db"`

Go to the root of the project and run the following command:

```shell
$ pnpm install or npm install or yarn install
```

## Run

- pnpm dev (to run all the apps)

If you want to run the apps separately:

- pnpm dev --filter api `(port 3002)`
- pnpm dev --filter web `(port 3000)`
- pnpm dev --filter docs `(port 3001)`

- npx prisma studio inside `apps/api` to see the database in the browser `(port 5555)`

- pnpm build for production. Go to the root of apps/[api|docs|web] and run pnpm start

Then open [localhost:3002](http://localhost:3002/) for the api, [localhost:3000](http://localhost:3000/) for the web and [localhost:3001](http://localhost:3001/) for the docs if the web app is already running.

**Be careful**
If you have run this script `pnpm dev`, the docs app could be running before the web app. In this case, the docs app will be on [localhost:3000](http://localhost:3000/) and the web app on [localhost:3001](http://localhost:3001/)

## API

For the api, there are some routes available:

- [localhost:3002](http://localhost:3002/) list some images served by the api.
- [localhost:3002/api](http://localhost:3002/api) the starting point of the api.
- [localhost:3002/api/creations/:id](http://localhost:3002/api/creations/1) return the creation with the id 1.
- [localhost:3002/api/creations/explore](http://localhost:3002/api/creations/explore) return the creations to explore.
- [localhost:3002/api/categories](http://localhost:3002/api/categories) return all the categories.
- [localhost:3002/api/categories/trending](http://localhost:3002/api/categories/trending) return the trending categories.
- [localhost:3002/api/users](http://localhost:3002/api/users) return all the users.

## Features

- Monorepo with Turborepo
- Next.js for the web and docs apps:

  - App Router (Features available in /app)
  - SSR
  - Data Fetching on the server side using [streaming](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#streaming) and [Loading UI and Streaming](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)
  - Dynamic imports (Lazy Loading)[https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading]
  - tailwindcss
  - animations (hover, click, etc.)
  - skeleton loading [Adding loading skeletons](https://nextjs.org/learn/dashboard-app/streaming#adding-loading-skeletons)
  - Modal with Parallel and Intercepting Routes [Parallel Routes: Modals](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals) [Intercepting Routes: Modals](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#modals)

- NestJS for the api app
- Prisma for the database

## [WIP] Features to come (maybe...)

- authentification
- improve the API
- Dark/Light mode
- SEO
- i18n
- a11y
- tests (unit and e2e)
- performance optimization (images, etc.)

# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `api`: a [NestJS](https://nestjs.com/) app
- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
- [Package Installation](https://turbo.build/repo/docs/handbook/package-installation)
