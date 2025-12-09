---
sidebar_position: 12
---

# Local2Dart

This command generates a robust SQLite database layer using `sqflite`. It automates the creation of tables, triggers, views, and seed data based on a YAML configuration file. It also generates a type-safe Service class for performing CRUD operations.

```bash
morpheme local2dart
```

## Setup

If you haven't set up `local2dart` yet, initialize the configuration with:

```bash
morpheme local2dart init
```

This generates the default configuration file.

## Directory Structure

```
.
├── local2dart/
│   └── local2dart.yaml      # Your database schema definition
└── morpheme.yaml
```

The generated code will be placed in the `core` module:

```
core/
└── lib/
    └── packages/
        └── local2dart/      # The generated standalone package
            ├── src/
            │   ├── model/   # Generated Data Models
            │   └── service/ # Generated Services (Repositories)
            └── local2dart.dart
```

## Configuration (`local2dart.yaml`)

The `local2dart.yaml` file is where you define your entire database schema.

### Global Configuration

```yaml
version: 1                           # Database version (increment this when changing schema)
dir_database: "morpheme"             # The directory name for the database file
foreign_key_constrain_support: true  # Enables Foreign Key support (PRAGMA foreign_keys = ON)
```

-   **version**: Integer. Must be incremented whenever you modify tables or columns to trigger migration.
-   **dir_database**: String. The folder name where the `.db` file will be stored on the device.
-   **foreign_key_constrain_support**: Boolean. If `true`, executes `PRAGMA foreign_keys = ON;` on initialization, enforcing referential integrity.

### Table Definition

Tables are defined under the `table` key. Use `snake_case` for all names.

```yaml
table:
  # Table Name
  category:
    create_if_not_exists: true    # Adds "IF NOT EXISTS" to create statement
    column:
      id:
        type: "INTEGER"
        constraint: "PRIMARY KEY"
        autoincrement: true
      name:
        type: "TEXT"
        nullable: false
        default: "'General'"      # Default value (note nested quotes for strings)
  
  todo:
    create_if_not_exists: true
    column:
      id:
        type: "INTEGER"
        constraint: "PRIMARY KEY"
        autoincrement: true
      title: "TEXT"               # Shorthand for simple types
      category_id:                # Foreign key column
        type: "INTEGER"
        nullable: false
    
    # Foreign Key Definitions
    foreign:
      category_id:                # Column in this table
        to_table: "category"      # Parent table
        to_column: "id"           # Column in parent table
        on_update: "CASCADE"      # Action on parent update
        on_delete: "CASCADE"      # Action on parent delete
```

#### Column Properties

-   **type**: `INTEGER`, `REAL`, `TEXT`, `BLOB`.
-   **constraint**: `PRIMARY KEY`, `UNIQUE`, `CHECK`.
-   **autoincrement**: `true` or `false` (only for `INTEGER PRIMARY KEY`).
-   **nullable**: `true` (default) or `false` (adds `NOT NULL`).
-   **default**: The default value for the column.

#### Foreign Key Actions

Available actions for `on_update` and `on_delete`:
-   `NO ACTION`
-   `RESTRICT`
-   `SET NULL`
-   `SET DEFAULT`
-   `CASCADE`

### Queries (Custom Joins & Aggregations)

The `query` section generates helper methods for complex custom queries, such as joins or aggregations, that don't map 1:1 to a simple table.

```yaml
query:
  # Base Table Name
  todo:
    # Method Name (will generate getTodoSummary())
    todo_summary:
      distinct: false
      column:
        todo_id:
          type: "INTEGER"
          origin: "todo.id"           # Source column (Table.Column)
        todo_title:
          type: "TEXT"
          origin: "todo.title"
        category_name:
          type: "TEXT"
          origin: "category.name"
        item_count:
          type: "INTEGER"
          origin: "count(*)"          # Aggregate function
      
      join:
         - "INNER JOIN category ON category.id = todo.category_id"
      
      where: "todo.created_at BETWEEN ? AND ?"
      group_by: "category.id"
      order_by: "todo.id DESC"
      limit: 10
      offset: 0
```

-   **origin**: Critical for mapping the result of a generic SQL query back to a Dart field.
-   **where**: Supports `?` placeholders. The generated Dart method will accept arguments matching these placeholders.

### Views

Views allow you to save a query definition in the database itself.

```yaml
view:
  active_todos_view:
    create_if_not_exists: true
    distinct: false
    column:
      id:
        type: "INTEGER"
        origin: "id"
      title:
        type: "TEXT"
        origin: "title"
    from: todo                        # Source table
    where: "is_completed = 0"         # Filter condition
```

### Seeds (Initial Data)

Pre-fill your database with data upon creation.

```yaml
seed:
  category:                           # Table to seed
    column:
      - "id"
      - "name"
    value:
      - "1, 'Work'"
      - "2, 'Personal'"
      - "3, 'Shopping'"
```

### Triggers

Define raw SQL triggers to automate database actions.

```yaml
trigger:
  update_todo_timestamp:
    raw_sql: >
      CREATE TRIGGER IF NOT EXISTS update_todo_timestamp
      AFTER UPDATE ON todo
      BEGIN
        UPDATE todo SET updated_at = CURRENT_TIMESTAMP WHERE id = OLD.id;
      END;
```

## Generated API

The generated package (`core/lib/packages/local2dart`) provides a generic service named `DatabaseService` and specific services for each table (e.g., `TodoService`).

### Standard CRUD Operations

Each table service includes these methods:

| Method | Description |
|---|---|
| `count()` | Returns the number of rows in the table. |
| `get()` | Retrieves all rows as a list of Models. |
| `getWithPagination({limit, offset})` | Retrieves rows with pagination limits. |
| `getById(id)` | Retrieves a single row by its Primary Key. |
| `insert(data)` | Inserts a new row. Returns the new ID. |
| `bulkInsert(list)` | Inserts multiple rows in a batch transaction. |
| `upsert(data)` | Inserts or Updates if the key exists. |
| `update(data)` | Updates a row matching the data's Primary Key. |
| `updateById(id, data)` | Updates a row by a specific ID. |
| `bulkUpdate(list)` | Updates multiple rows in a batch. |
| `delete(data)` | Deletes a row matching the data's Primary Key. |
| `deleteById(id)` | Deletes a row by its specific ID. |
| `bulkDeleteById(ids)` | Deletes multiple rows by their IDs. |

### Usage

1.  **Export the Library**:
    Add this to your `core/lib/core.dart`:
    ```dart
    export 'package:local2dart/local2dart.dart';
    ```

2.  **Use in Code**:
    ```dart
    // Initialize (usually in main.dart or dependency injection)
    await DatabaseHelper.initialize();

    // Use a Service
    final service = TodoService();
    
    // Create
    final id = await service.insert(TodoBody(
      title: 'Buy Milk', 
      categoryId: 1
    ));
    
    // Read
    final todo = await service.getById(id);
    print(todo?.title);
    ```

## Options

```bash
morpheme local2dart [options]
```

To see all available options and flags, run `morpheme local2dart --help`.

### Available Options

| Option | Abbr | Description |
|---|---|---|
| `--morpheme-yaml [path]` | | Path to a custom configuration file (default: `morpheme.yaml`). |
