---
sidebar_position: 1
---

# Prebuild iOS

This command prepares the iOS build environment by generating necessary configuration files for CI/CD pipelines and automated builds.

```bash
morpheme prebuild ios
```

## Description

The `prebuild ios` command automates the setup of iOS build configurations, particularly useful for CI/CD environments. It generates essential files for code signing, team configuration, and export options based on your deployment settings.

:::caution macOS Required
This command only works on macOS with Xcode installed.
:::

## Configuration File

Create a deployment configuration file at `ios/deployment/appstore_deployment.json`:

```json
{
  "dev": {
    "email_identity": "ios@morpheme.id",
    "itc_team_id": "96184904",
    "team_id": "P53KJ6MXZH",
    "provisioning_profiles": "Morpheme Flutter Starter Kit Dev"
  },
  "stag": {
    "email_identity": "ios@morpheme.id",
    "itc_team_id": "96184904",
    "team_id": "P53KJ6MXZH",
    "provisioning_profiles": "Morpheme Flutter Starter Kit Staging"
  },
  "prod": {
    "email_identity": "ios@morpheme.id",
    "itc_team_id": "96184904",
    "team_id": "P53KJ6MXZH",
    "provisioning_profiles": "Morpheme Flutter Starter Kit"
  }
}
```

### Configuration Fields

| Field | Description |
|---|---|
| `email_identity` | Apple ID email used for code signing |
| `itc_team_id` | App Store Connect Team ID |
| `team_id` | Developer Portal Team ID |
| `provisioning_profiles` | Name of the provisioning profile |

## Usage

### Basic Prebuild (Dev)
```bash
morpheme prebuild ios
```

### Prebuild for Specific Flavor
```bash
morpheme prebuild ios --flavor prod
```

## Generated Files

This command generates the following files:

1. **`ios/fastlane/Appfile`**
   - Fastlane configuration with App Store Connect credentials
   
2. **`ios/Runner.xcodeproj/project.pbxproj`**
   - Xcode project file with updated code signing settings
   
3. **`ios/ExportOptions.plist`**
   - Export options for IPA generation

## Options

```bash
morpheme prebuild ios [options]
```

To see all available options and flags, run `morpheme prebuild ios --help`.

### Available Options

| Option | Abbr | Description |
|---|---|---|
| `--flavor [env]` | `-f` | Build flavor (dev, stag, prod). Default: `dev`. |
| `--morpheme-yaml [path]` | | Path to a custom configuration file. |

## CI/CD Integration

### GitLab CI Example

Update your `.gitlab-ci.yml` to use the prebuild command:

```yaml
.build-ios:
  stage: build_ios
  script:
    # Get version from tag
    - IFS='-'
    - read -a strarr <<< "$CI_COMMIT_TAG"
    - VERSION_NAME=${strarr[1]}
    - BUILD_NUMBER=${strarr[2]}
    
    # Prepare iOS build environment
    - morpheme prebuild ios -f ${CI_ENVIRONMENT_NAME}
    
    # Setup provisioning
    - cd ios
    - chmod +x deployment/provisioning.sh
    - ./deployment/provisioning.sh
    - pod install --repo-update
    - cd ..
    
    # Build IPA
    - morpheme build ipa -f ${CI_ENVIRONMENT_NAME} --build-number=$BUILD_NUMBER --build-name=$VERSION_NAME
```

:::tip
This command eliminates the need to manually manage `Appfile` and `ExportOptions.plist` files, making your CI/CD pipeline more maintainable.
:::
