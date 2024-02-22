---
sidebar_position: 17
---

# Json2Dart

This command is used to generate the API based on the configuration json file in the `json2dart/json2dart.yaml` file

```bash
morpheme json2dart
```

:::info

The generated API will be available according to the features and pages that we configure.

:::

:::note json2dart.yaml Configuration
To add API we have to add this following line:

```yaml title="json2dart/json2dart.yaml"
feature_name:
    page_name:
        api_name:
            base_url: base_url
            path: endpoint_name
            method: your_api_method
            body: url_file_body_json
            response: url_file_response_json
            header: url_file_hearder_json // optional
            cache_stategy: cache_stategy // optional
```

Cache Strategy :

Inside json2dart.yaml there are `cache_strategy` allow additions: `async_or_cache`, `cache_or_async`, `just_async`, `just_cache`. by default set to `just_async`.

- `async_or_cache` : strategy to fetch the api first and cache the response. if fetch fails it will return data from cache.
- `cache_or_async` : strategy if there is data in the cache and it is not expired then it will return data from the cache first. otherwise it will fetch api and responsen will be cached.
- `just_async` : a strategy that only fetches the api to get the data.
- `just_cache` : a strategy that only gets data from cache.

```yaml title="Simple Implementation"
cache_strategy: async_or_cache
```

```yaml title="Detail Implementation"
cache_strategy: 
  strategy: async_or_cache
  ttl: 60 #in Minutes
  keep_expired_cache: true 
```

Extra notes:

- We can add more than one api on a page.
- Allowed methods: get, post, put, patch, delete & multipart.
- Options : (We need to add this manually)

  ```yaml title="json2dart/json2dart.yaml"
    ...
    json2dart:
        body_format_date_time: yyyy-MM-dd // default is .toIso8601String()
        response_format_date_time: yyyy-MM-dd HH:mm // default is .toIso8601String()
        api: true // default is true
        endpoint: true // default is true
        unit-test: false // default is false
        replace: false // default is false
    ...
    ```

:::

For example, we will add the delete user API to page users in the master feature using json2dart, here are the steps:

1. Add json files for "response" and "body" API, response json files in `json2dart/json/response/`, for body json files `json2dart/json/body/`

    ![File generated](../../static/img/generate/api/body_response.png)

    ```json title="json2dart/json/body/delete_user_body.json"
    {
        "id_user":"id_user"
    }
    ```

    ```json title="json2dart/json/response/delete_user_response.json"
    {}
    ```

2. Add the delete_user API configuration to the `json2dart/json2dart.yaml` file

    ```yaml title="json2dart/json2dart.yaml"
    json2dart:
        body_format_date_time: yyyy-MM-dd
        response_format_date_time: yyyy-MM-dd HH:mm
        api: true
        endpoint: true
        unit-test: false
        replace: false

        environment_url:
            - &base_url BASE_URL

        remote:
            .login: &login
                base_url: *base_url
                path: /login
                method: post
                # header: json2dart/json/header/login_header.json
                body: json2dart/json/body/login_body.json
                response: json2dart/json/response/login_response.json
                cache_strategy: async_or_cache
            .register: &register
                base_url: *base_url
                path: /register
                method: post
                # header: json2dart/json/header/register_header.json
                body: json2dart/json/body/register_body.json
                response: json2dart/json/response/register_response.json
                cache_strategy:
                    strategy: cache_or_async
                    ttl: 60
            .forgot_password: &forgot_password
                base_url: *base_url
                path: /forgot_password
                method: get
                # header: json2dart/json/header/forgot_password_header.json
                body: json2dart/json/body/forgot_password_body.json
                response: json2dart/json/response/forgot_password_response.json
                cache_strategy:
                    strategy: just_cache
                    ttl: 120
                    keep_expired_cache: true
            # Add delete user
            delete_user: # api-name
                base_url: *base_url
                path: /delete_user
                method: delete
                body: json2dart/json/body/delete_user_body.json
                response: json2dart/json/response/delete_user_response.json
                cache_strategy: just_async
    auth:
        login:
            login: *login
        register:
            register: *register
        forgot_password:
            forgot_password: *forgot_password
    # Add delete user
    master:
        users:
            delete_user: *delete_user
    ```

3. Generate API with this command

    ```bash
    morpheme json2dart
    ```

    The delete user API is automatically added to page users in the feature master, after that we need to add the BLoC to our Cubit.
