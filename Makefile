start-db:
	docker-compose up

make-migration:
	yarn typeorm -- -d ./src/datasource.ts migration:generate ./src/migrations/${MIGRATION_NAME}
mm: make-migration

run-migrations:
	yarn typeorm:run-migrations

make-migration-empty:
	yarn typeorm migration:create ./src/migrations/${MIGRATION_NAME}
mme: make-migration-empty

revert-migration:
	yarn typeorm:revert-migration
