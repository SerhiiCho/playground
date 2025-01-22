## Migrate Commands

### Create a Migration
```bash
migrate create -seq -ext=.sql -dir=./db/migrations create_books_table
```

## Migrate Migrations
```bash
migrate -path=./db/migrations -database="mysql://root:password@tcp(localhost:1934)/crud?charset=utf8" up
```

## Docker Commands

### Enter DB container
```bash
docker exec -it db /bin/bash
```