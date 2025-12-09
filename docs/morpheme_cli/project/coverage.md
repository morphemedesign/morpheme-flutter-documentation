---
sidebar_position: 5
---

# Coverage

## Requirement

Install lcov with follow [this installation](https://github.com/linux-test-project/lcov)

:::info

LCOV is an extension of GCOV, a GNU tool which provides information about
  what parts of a program are actually executed (i.e. "covered") while running
  a particular test case. The extension consists of a set of Perl scripts
  which build on the textual GCOV output to implement the following enhanced
  functionality:

    * HTML based output: coverage rates are additionally indicated using bar
      graphs and specific colors.

    * Support for large projects: overview pages allow quick browsing of
      coverage data by providing either a hierarchical directory structure
      view or a three-level detail view: directory, file and source code view.

  LCOV was initially designed to support Linux kernel coverage measurements,
  but works as well for coverage measurements on standard user space
  applications.

:::

check your installation with run:

```bash
morpheme coverage
```

## Prerequisites

You must have `lcov` installed to generate HTML reports.

-   **macOS**: `brew install lcov`
-   **Ubuntu**: `apt-get install lcov`
-   **Windows**: (Not fully supported automatically) Install Perl and LCOV manually.

Verify installation:
```bash
lcov --version
```

## Configuration (`morpheme.yaml`)

You can configure output directories and exclude specific files from the coverage report (e.g., generated code, mocks) in your `morpheme.yaml`.

```yaml
coverage:
  output_html_dir: "coverage/html" # Directory for the HTML report
  remove:
    - "**/generated/**"
    - "**/mock/**"
    - "**/*.g.dart"
    - "**/*.freezed.dart"
```

## Description

The `coverage` command performs the following steps:
1.  **Execute Tests**: Runs `flutter test --coverage` across your project.
2.  **Merge Results**: Combines `lcov.info` files from the main project, core, and all features.
3.  **Filter**: Removes files matching the patterns defined in `morpheme.yaml`.
4.  **Generate Report**: Creates an HTML site in `coverage/html` (or your configured path) to visualize line-by-line coverage.

## Usage

### Coverage for Entire Project

```bash
morpheme coverage
```

### Coverage for Specific Scopes

You can limit the coverage analysis to a specific app, feature, or page to save time.

```bash
# Analyze specific app
morpheme coverage -a driver

# Analyze specific feature
morpheme coverage -f auth

# Analyze specific page
morpheme coverage -f auth -p login
```

### Custom Reporters

Output test results to different formats or files, useful for CI/CD integration.

```bash
morpheme coverage --reporter json --file-reporter json:report.json
```

## Options

```bash
morpheme coverage [options]
```

To see all available options and flags, run `morpheme coverage --help`.

### Available Options

| Option | Abbr | Description |
|---|---|---|
| `--apps` | `-a` | Generate coverage for a specific app. |
| `--feature` | `-f` | Generate coverage for a specific feature. |
| `--page` | `-p` | Generate coverage for a specific page. |
| `--reporter` | `-r` | output format: `compact` (default), `expanded`, `json`, `github`, etc. |
| `--file-reporter` | | Save results to file. Format: `<reporter>:<filepath>`. |
| `--morpheme-yaml` | | Path to a custom configuration file. |
