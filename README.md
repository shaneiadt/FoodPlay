# FoodPlay
[Svelte](https://github.com/sveltejs/svelte) & [GraphQL](https://github.com/graphql) Recipe Finder

TypeScript also support (still a bit finicky with Rollup).

This Project also uses [Graphpack](https://github.com/glennreyes/graphpack), which is a minimal GrapQL server implementation. Definitely check this awesome package out.

Sass included too!

## Running Locally

### Install Client Dependencies

```
cd ./client
npm i
```

### Install Server Dependencies

```
cd ./server
npm i
```

then from within the **server** folder run:

```
npm run dev
```

Graphpack should run on `http://localhost:4000/`, go here for playground.

Rollup will start on whatever port is available pretty much so see your terminal output.