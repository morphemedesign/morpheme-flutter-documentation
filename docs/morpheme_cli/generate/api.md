---
sidebar_position: 4
---
# API


This command is used to generate the API on a page. It creates a complete API integration layer following clean architecture principles.

```bash
morpheme api [api_name] -p [page_name] -f [feature_name]
```

## Options

```bash
morpheme api [api_name] [options]
```

To see all available options and flags, run `morpheme api --help`.

### Available Options

| Option | Abbr | Description | Default |
|---|---|---|---|
| `--feature-name` | `-f` | Name of the feature to be added api (Mandatory) | |
| `--page-name` | `-p` | Name of the page to be added api (Mandatory) | |
| `--method` | `-m` | HTTP method for the API (get, post, put, patch, delete, multipart, etc.) | `post` |
| `--path` | | Custom path for the API endpoint | |
| `--return-data` | `-r` | Type of data to return (model, header, body_bytes, raw, etc.) | `model` |
| `--body-list` | | Set if the request body is a list | `false` |
| `--response-list` | | Set if the response body is a list | `false` |
| `--json2dart` | | Generate models handled by json2dart | `false` |
| `--header` | | Path to JSON file for additional headers | |
| `--cache-strategy` | | Strategy for caching API response | |
| `--ttl` | | Cache duration in minutes | |
| `--keep-expired-cache` | | Keep cache even if expired | |
| `--apps-name` | `-a` | Generate for specific apps (Optional) | |

### Method Options
Values for `-m`: `get`, `post`, `put`, `patch`, `delete`, `multipart`, `postMultipart`, `patchMultipart`, `head`, `getSse`, `postSse`, `putSse`, `patchSse`, `deleteSse`, `download`.

### Return Data Options
Values for `-r`: `model`, `header`, `body_bytes`, `body_string`, `status_code`, `raw`.

### Cache Strategy Options
Values for `--cache-strategy`: `async_or_cache`, `cache_or_async`, `just_async`, `just_cache`.

## Examples

**Basic Usage:**
Generate a `get_users` API for the `users` page in the `master` feature.

```bash
morpheme api get_users -p users -f master -m get
```

**With Response List:**
Generate an API where the response is a list of objects.

```bash
morpheme api get_products -p products -f shop -m get --response-list
```

**With Caching:**
Generate an API with caching strategy and TTL.

```bash
morpheme api get_profile -p profile -f user -m get --cache-strategy async_or_cache --ttl 60
```

:::info

**Generated Artifacts:**

- **Models**: Request/Response models
- **Entities**: Domain entities
- **Datasource**: Remote data source definition and implementation
- **Repositories**: Repository interface and implementation
- **UseCase**: Domain use case
- **BLoC**: Integration into the page's BLoC/Cubit

:::

:::tip

Use the **json2dart** feature for more powerful model generation.
Check the link: **[Json2Dart](./json2dart)**

:::

:::caution

API generation will fail if:
- Although the command creates files, the Feature or Page must exist beforehand logic-wise (created via `morpheme feature` or `morpheme page`).
- The API name already exists in the target page.

:::
