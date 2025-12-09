# Template Test

This command generates a comprehensive unit test structure for a specific page within a feature. It sets up the necessary test files and directories for the Data, Domain, and Presentation layers, following Clean Architecture principles.

```bash
morpheme template-test --feature-name [feature_name] --page-name [page_name]
```

## Description

The `template-test` command automates the creation of test files, ensuring your project has a consistent testing foundation. It generates:
-   **Data Layer Tests**: Tests for Datasources, Models, and Repositories.
-   **Domain Layer Tests**: Tests for Entities, Repositories (Contracts), and Use Cases.
-   **Presentation Layer Tests**: Tests for BLoCs/Cubits.

It allows developers to focus on writing test logic rather than boilerplate setup.

## Directory Structure

Running the command creates the following structure inside your feature's test directory:

```
features/[feature_name]/test/[page_name]_test/
├── data/
│   ├── datasources/
│   ├── models/
│   │   ├── body/
│   │   └── response/
│   └── repositories/
├── domain/
│   ├── entities/
│   ├── repositories/
│   └── usecases/
└── presentation/
    ├── bloc/
    ├── cubit/
    ├── pages/
    └── widgets/
```

## Usage

### standard Usage

Generate test templates for the `login` page in the `auth` feature:

```bash
morpheme template-test --feature-name auth --page-name login
```

### App-Specific Usage

Generate test templates for a page within a specific app (monorepo):

```bash
morpheme template-test --apps-name driver --feature-name auth --page-name login
```

## Options

```bash
morpheme template-test [options]
```

To see all available options and flags, run `morpheme template-test --help`.

### Available Options

| Option | Abbr | Description | Mandatory |
|---|---|---|---|
| `--feature-name` | `-f` | Name of the feature containing the page. | **Yes** |
| `--page-name` | `-p` | Name of the page to generate tests for. | **Yes** |
| `--apps-name` | `-a` | Name of the app context (for monorepo setup). | No |
