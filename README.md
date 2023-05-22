# Description

The project is forked from [the NestJS starter](https://github.com/nestjs/typescript-starter). Please check out the repo
for more details.

### Running with Docker-compose

Requirements:

- docker 20.10
- docker-compose 1.29.1

How to run:

- Go to the project directory
- Create a file `.env` with the same content as `.env.example`
- Start the service `$ docker-compose -d up`

### Running with NodeJS

Requirements:

- node 16.13
- npm 8.1.0

Set up:

- Install dependencies `$ npm ci`
- Create a file `.env` with your own DB configuration. Check out `.env.example` for DB properties
- Run migrations `$ npm run typeorm:run`

How to run:

- Start the service: `$ npm run start`
- Run unit tests: `$ npm run test`
- Run integration tests: `$ npm run test:e2e`
