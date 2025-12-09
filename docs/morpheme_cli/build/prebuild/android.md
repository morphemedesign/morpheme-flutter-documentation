---
sidebar_position: 2
---

# Prebuild Android

This command prepares the Android build environment by generating necessary configuration files for CI/CD pipelines and automated builds.

```bash
morpheme prebuild android
```

## Description

The `prebuild android` command automates the setup of Android build configurations, particularly useful for CI/CD environments. It generates essential files for Fastlane deployment, Play Store integration, and package configuration based on your flavor settings.

## Configuration Requirements

Ensure your `morpheme.yaml` contains the Android application ID for each flavor:

```yaml
flavor:
  dev:
    ANDROID_APPLICATION_ID: "com.example.app.dev"
    # ... other config
  stag:
    ANDROID_APPLICATION_ID: "com.example.app.staging"
    # ... other config
  prod:
    ANDROID_APPLICATION_ID: "com.example.app"
    # ... other config
```

## Usage

### Basic Prebuild (Dev)
```bash
morpheme prebuild android
```

### Prebuild for Specific Flavor
```bash
morpheme prebuild android --flavor prod
```

## Generated Files

This command generates the following file:

**`android/fastlane/Appfile`**
- Fastlane configuration with Play Store service account
- Package name based on selected flavor

Example generated content:
```ruby
json_key_file("fastlane/play-store.json")
package_name("com.example.app")
```

## Options

```bash
morpheme prebuild android [options]
```

To see all available options and flags, run `morpheme prebuild android --help`.

### Available Options

| Option | Abbr | Description |
|---|---|---|
| `--flavor [env]` | `-f` | Build flavor (dev, stag, prod). Default: `dev`. |
| `--morpheme-yaml [path]` | | Path to a custom configuration file. |

## Fastlane Integration

For full Fastlane automation, you'll also need:

1. **Play Store Service Account JSON** (`android/fastlane/play-store.json`)
   - Download from Google Cloud Console
   - Grant necessary permissions in Play Console

2. **Fastlane Configuration** (`android/fastlane/Fastfile`)
   - Define lanes for deployment
   - Configure upload settings

## CI/CD Integration

### GitLab CI Example

```yaml
.build-android:
  stage: build_android
  script:
    # Get version from tag
    - IFS='-'
    - read -a strarr <<< "$CI_COMMIT_TAG"
    - VERSION_NAME=${strarr[1]}
    - BUILD_NUMBER=${strarr[2]}
    
    # Prepare Android build environment
    - morpheme prebuild android -f ${CI_ENVIRONMENT_NAME}
    
    # Build AAB
    - morpheme build appbundle -f ${CI_ENVIRONMENT_NAME} --build-number=$BUILD_NUMBER --build-name=$VERSION_NAME
```

### GitHub Actions Example

```yaml
- name: Prepare Android Build
  run: morpheme prebuild android --flavor prod

- name: Build App Bundle
  run: morpheme build appbundle --flavor prod --release
```

:::tip
This command simplifies CI/CD setup by automatically configuring the correct package name for each environment, eliminating manual Appfile management.
:::
