---
sidebar_position: 3
---

# Page

This command generates a new page within an existing feature module, following the project's Clean Architecture structure. It creates the necessary directories and files for the data, domain, and presentation layers, and registers the new page in the feature's Locator.

```bash
morpheme page [page-name] -f [feature-name]
```

## Description
The `page` command scaffolds a complete module structure for a specific screen or functional unit within a feature. This ensures consistency and enforces separation of concerns.

## Directory Structure
When you run the command, it generates the following structure inside your feature's directory:

```
features/[feature_name]/lib/[page_name]/
├── data/
│   ├── datasources/         # Remote/Local data sources
│   ├── models/              # Data models (Body, Response)
│   │   ├── body/
│   │   └── response/
│   └── repositories/        # Repository implementations
├── domain/
│   ├── entities/            # Domain entities
│   ├── repositories/        # Repository interfaces
│   └── usecases/            # Business logic use cases
├── presentation/
│   ├── bloc/                # Business Logic Components (BLoCs)
│   ├── cubit/               # Cubits for state management
│   ├── pages/               # UI Page (Widget)
│   └── widgets/             # Reusable widgets for this page
├── locator.dart             # Dependency injection setup for this page
└── mapper.dart              # Data to Domain mappers
```

## Example

To create a `login` page inside the `auth` feature:

```bash
morpheme page login -f auth
```

To create a page inside a specific app (for monorepo structures):

```bash
morpheme page login -f auth -a my_app
```

## Validations
The command will fail if:
1.  The specified **Feature** directory does not exist.
2.  A **Page** with the same name already exists in that feature.

## Options

```bash
morpheme page [page-name] [options]
```

To see all available options and flags, run `morpheme page --help`.

### Available Options

| Option | Abbr | Description | Mandatory |
|---|---|---|---|
| `--feature-name` | `-f` | The name of the feature module where the page will be created. | **Yes** |
| `--apps-name` | `-a` | The name of the app (context) if utilizing an apps-based directory structure. | No |
| `--morpheme-yaml` | | Path to a custom configuration file (default: `morpheme.yaml`). | No |
