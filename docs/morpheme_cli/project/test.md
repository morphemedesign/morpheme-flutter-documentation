---
sidebar_position: 4
---

# Test

This command executes unit tests for your project. To optimize performance, it automatically generates a `bundle_test.dart` file that aggregates all individual test files, allowing them to run in a single process per module.

```bash
morpheme test
```

## Description

The `test` command is designed for modular architectures. It:
1.  **Generates Bundles**: Scans your test directories and creates `test/bundle_test.dart` files.
2.  **Executes Tests**: Runs the generated bundle or standard headers using `flutter test`.
3.  **Aggregates Coverage**: (Optional) Collects and merges LCOV coverage data from multiple modules.

## Usage

### Run All Tests
Executes unit tests for the entire project, including all features and shared modules.

```bash
morpheme test
```

### Run Feature Tests
Run tests for a specific feature only.

```bash
morpheme test --feature profile
```

### Run Page Tests
Run tests for a specific page within a feature.

```bash
morpheme test --feature profile --page edit_profile
```

### Run with Coverage
Enable code coverage collection. The tool will merge coverage reports into a single `coverage/merge_lcov.info` file.

```bash
morpheme test --coverage
```

### Custom Reporters
Output test results in JSON format or save them to a file (useful for CI/CD).

```bash
# Output JSON to stdout
morpheme test --reporter json

# Save JSON report to a file
morpheme test --file-reporter json:report.json
```

## Options

```bash
morpheme test [options]
```

To see all available options and flags, run `morpheme test --help`.

### Available Options

| Option | Abbr | Description |
|---|---|---|
| `--feature [name]` | `-f` | Target a specific feature for testing. |
| `--page [name]` | `-p` | Target a specific page within a feature (requires `-f`). |
| `--coverage` | `-c` | Enable code coverage analysis and reporting. |
| `--reporter [type]` | `-r` | Output format: `compact`, `expanded`, `json`, `github`, etc. |
| `--file-reporter` | | Save results to file. Format: `<reporter>:<filepath>`. |
| `--morpheme-yaml [path]` | | Path to a custom configuration file. |
