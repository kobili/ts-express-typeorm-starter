# TS Express + TypeORM Starter Project

This starter includes a Node project with TypeScript, Express and TypeORM.

## Makefile scripts
- `start-db`: Starts a Postgres database in a docker container
- `make-migration`: Creates a TypeORM migration file
    - Usage:
    ```shell
    make make-migration MIGRATION_NAME=<MIGRATION NAME>
    ```
    - Alternate: `mm`
- `make-migration-empty`: Creates an empty TypeORM migration file
    - Usage is similar to `make-migration`
    - Alternate: `mme`
- `run-migrations`: Runs all available migrations
    - To make a migration available, you'll need to add it to the datasource object in `src/datasource.ts`
- `revert-migration`: Reverts the last run migration