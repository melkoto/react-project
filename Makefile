.PHONY: update-code build clean migrate migrate-undo migrate-undo-all cub bc

# Обновление кода из репозитория
update-code:
	git pull

# Пересборка и перезапуск контейнеров для dev окружения
build:
	docker compose up --build -d

# Очистка неиспользуемых данных (без удаления томов)
clean:
	docker system prune -f

# Миграция базы данных с условием
migrate:
	@if [ -z "$(MIGRATION_NAMES)" ]; then \
		echo "Запуск всех миграций"; \
		docker compose exec app-prod npx sequelize db:migrate; \
	else \
		echo "Запуск указанных миграций"; \
		for migration in $(MIGRATION_NAMES); do \
			echo "Запуск миграции: $$migration"; \
			docker compose exec app-prod npx sequelize db:migrate --name $$migration; \
		done; \
	fi

# Отмена последней миграции
migrate-undo:
	@if [ -z "$(MIGRATION_NAME)" ]; then \
		echo "Отмена последней миграции"; \
		docker compose exec app-prod npx sequelize-cli db:migrate:undo; \
	else \
		echo "Отмена миграции: $(MIGRATION_NAME)"; \
		docker compose exec app-prod npx sequelize-cli db:migrate:undo --name $(MIGRATION_NAME); \
	fi

# Отмена всех миграций
migrate-undo-all:
	@if [ -z "$(MIGRATION_NAME)" ]; then \
		echo "Отмена всех миграций"; \
		docker compose exec app-prod npx sequelize-cli db:migrate:undo:all; \
	else \
		echo "Отмена всех миграций до: $(MIGRATION_NAME)"; \
		docker compose exec app-prod npx sequelize-cli db:migrate:undo:all --name $(MIGRATION_NAME); \
	fi

# Полный процесс: обновление кода, пересборка и безопасная очистка (CleanUpdateBuild)
cub: update-code build clean

# Полный процесс: пересборка, безопасная очистка. Когда не нужно обновлять код
bc: build clean