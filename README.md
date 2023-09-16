#######################################################################################
#######################################################################################
#######################################################################################
#######################################################################################
#######################################################################################
#######################################################################################

@TODO:

# tests:

    - cypress or any others?

# components:

- faire des placeholders pour les loadings

# features:

- Dark mode (see https://storybook.js.org/recipes/tailwindcss#tailwindcss for storybook)

- Ends API (See these screens: https://nft-market-place.animaapp.io/, https://nft-market-place.animaapp.io/artist-page-desktop, https://nft-market-place.animaapp.io/marketplace-desktop)
- make create account api (See this screen: https://nft-market-place.animaapp.io/create-account-desktop)

# FIGMA: https://www.figma.com/file/sZJLQN3vFLGtxbXsqwPB2X/NFT-Marketplace-Template-(Community)?node-id=1647%3A17907&mode=dev

### DEMO a reproduire https://nft-market-place.animaapp.io/homepage-desktop

#######################################################################################
#######################################################################################

### NestJS

- Create an API: https://stackabuse.com/guide-to-nestjs-building-a-rest-api-with-nest-and-node/
- Prisma https://docs.nestjs.com/recipes/prisma
- Use Prisma Client: https://docs.nestjs.com/recipes/prisma#install-and-generate-prisma-client
- Prisma and NestJS https://www.prisma.io/nestjs

### package manager

- pnpm
- yarn
- npm

### prisma

- npx prisma migrate dev --name init (create the bdd and update it)
- npx prisma studio (allow to see the bdd in the browser)
- relation between bdd tables (https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries#include-all-fields-for-a-specific-relation)

### turbo

- turbo dev --filter api (launch just the api)
- add storybook to turbo pack https://turbo.build/repo/docs/handbook/tools/storybook
- tailwindcss with turbo https://github.com/vercel/turbo/tree/main/examples/with-tailwind

### Storybook

- Using Storybook with Nextjs: https://storybook.js.org/recipes/next
- Tailwindcss with Storybook:
  - 1. https://tailwindcss.com/docs/installation
  - 2. https://storybook.js.org/recipes/tailwindcss
- switcher dark/light mode https://storybook.js.org/recipes/tailwindcss#add-a-theme-switcher-tool

#######################################################################################
#######################################################################################
#######################################################################################
#######################################################################################
#######################################################################################
#######################################################################################

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
