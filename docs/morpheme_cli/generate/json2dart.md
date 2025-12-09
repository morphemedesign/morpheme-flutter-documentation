# Json2Dart

This command generates a complete API integration layer (models, entities, repositories, datasources, and BLoCs) based on the configuration in `json2dart/json2dart.yaml`. It follows Clean Architecture principles and supports advanced features like caching, multipart requests, and custom return types.

```bash
morpheme json2dart
```

## Directory Structure

To start using `json2dart`, you should have a `json2dart` directory in the root of your project:

```
.
├── json2dart/
│   ├── json/
│   │   ├── body/            # JSON files for request bodies
│   │   ├── response/        # JSON files for API responses
│   │   └── header/          # JSON files for custom headers
│   └── json2dart.yaml       # Main configuration file
└── morpheme.yaml
```

## Configuration (`json2dart.yaml`)

The `json2dart.yaml` file is the heart of this tool. It allows you to define global settings and detailed API specifications.

### Global Configuration

Configurations under the `json2dart` key apply globally to the generation process.

```yaml title="json2dart/json2dart.yaml"
json2dart:
  api: true                          # Generate API implementation (default: true)
  endpoint: true                     # Generate Endpoint class (default: true)
  unit-test: false                   # Generate unit tests (default: false)
  replace: false                     # Replace existing files (default: false)
  format: true                       # Format generated code (default: true)
  cubit: true                        # Update Cubit with new repositories (default: true)
  body_format_date_time: "yyyy-MM-dd"         # Date format for request bodies
  response_format_date_time: "yyyy-MM-dd"     # Date format for responses
```

### API Definition Structure

APIs are defined hierarchically by **Feature** -> **Page** -> **API Name**.

```yaml title="json2dart/json2dart.yaml"
# ... Global config ...

feature_name:                # 1. Feature Name
  page_name:                 # 2. Page Name
    api_name:                # 3. API Name (Method name in code)
      # Essential Properties
      path: /users/login
      method: post
      
      # Data Sources
      body: json2dart/json/body/login_body.json
      response: json2dart/json/response/login_response.json
      header: json2dart/json/header/login_header.json
      
      # Advanced Properties
      return_data: model     # Options: model, header, body_bytes, etc.
      
      # Caching
      cache_strategy:
        strategy: async_or_cache
        ttl: 60              # Time to live in minutes
        keep_expired_cache: true
```

## API Properties Detail

| Property | Description | Default |
|---|---|---|
| `path` | The API endpoint path. Can include parameters like `/users/$id`. | Required |
| `method` | HTTP method to use. See **Supported Methods**. | `get` |
| `body` | Path to a JSON file representing the request body. | `null` |
| `response` | Path to a JSON file representing the success response. | `null` |
| `header` | Path to a JSON file containing custom headers. | `null` |
| `return_data` | Specifies the type of data the repository should return. See **Return Types**. | `model` |
| `cache_strategy` | Configuration for API response caching. See **Caching**. | `null` |
| `dir_extra` | Path to a directory where extra models (if any) should be generated. | `null` |

### Supported Methods

Values for `method`:
- **Standard**: `get`, `post`, `put`, `patch`, `delete`, `head`
- **Multipart**: `multipart` (defaults to POST), `postMultipart`, `patchMultipart`
- **SSE**: `getSse`, `postSse`, `putSse`, `patchSse`, `deleteSse`
- **Other**: `download`

### Return Types

Values for `return_data`:
- `model`: Returns a parsed Dart object (Entity).
- `header`: Returns only the response headers.
- `body_bytes`: Returns the response body as bytes (`List<int>`).
- `body_string`: Returns the response body as a String.
- `status_code`: Returns the integer status code of the response.
- `raw`: Returns the raw `Response` object.

### Caching

You can configure caching strategies to improve app performance and offline capability.

**Simple Syntax (Strategy only):**
```yaml
cache_strategy: async_or_cache
```

**Detailed Syntax:**
```yaml
cache_strategy:
  strategy: async_or_cache
  ttl: 60                     # Cache validity in minutes
  keep_expired_cache: true    # If true, returns expired cache while fetching new data
```

**Available Strategies:**
- `async_or_cache`: Fetch from API. If it fails, try to return cached data.
- `cache_or_async`: Check cache first. If valid, return it. If not, fetch from API.
- `just_async`: (Default) Always fetch from API. No caching.
- `just_cache`: Always return cached data. Fails if no cache exists.

## Environment Variables

You can use anchors in YAML to manage different environments or repeated URLs.

```yaml
json2dart:
  # ... options ...
  environment_url:
    - &base_url BASE_URL    # Define anchor *base_url

feature_name:
  page_name:
    login:
      base_url: *base_url   # Use anchor
      path: /login
      # ...
```

## Workflow Example

1.  **Create JSON Files**:
    Create `login_body.json` inside `json2dart/json/body/`:
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```
    Create `login_response.json` inside `json2dart/json/response/`:
    ```json
    {
      "token": "abc-123-xyz",
      "user": { "id": 1, "name": "John" }
    }
    ```

2.  **Configure `json2dart.yaml`**:
    ```yaml
    auth:
      login:
        login:
          method: post
          path: /auth/login
          body: json2dart/json/body/login_body.json
          response: json2dart/json/response/login_response.json
    ```

3.  **Run Command**:
    ```bash
    morpheme json2dart
    ```

4.  **Result**:
    The CLI generates:
    - `LoginBody` class (Request model)
    - `LoginResponse` class (Response model)
    - `LoginEntity` class (Domain entity)
    - `LoginRepository` and `LoginDataSource`
    - Updates `LoginCubit` to include `LoginBloc`

## Command Options

```bash
morpheme json2dart [options]
```

| Option | Abbr | Description |
|---|---|---|
| `--feature-name` | `-f` | Generate for a specific feature only. |
| `--page-name` | `-p` | Generate for a specific page (requires `-f`). |
| `--apps-name` | `-a` | Generate for a specific app (in a monorepo setup). |
| `--morpheme-yaml` | | Path to custom `morpheme.yaml`. |
| `--verbose` | `-v` | Show detailed logs for debugging. |
