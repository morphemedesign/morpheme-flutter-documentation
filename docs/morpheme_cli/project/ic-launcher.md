---
sidebar_position: 14
---

# Ic Launcher

This command standardizes the process of updating your application's launcher icons for both Android and iOS platforms across different flavors (environments).

```bash
morpheme ic-launcher
```

## Setup

Project expects the following directory structure in your root `ic_launcher/` folder:

```
ic_launcher/
├── dev/
│   ├── android/   # Contains mipmap folders
│   └── ios/       # Contains AppIcon.appiconset
├── staging/
│   ├── android/
│   └── ios/
└── prod/
    ├── android/
    └── ios/
```

## Usage

### Default (Dev Flavor)
Deploys icons from `ic_launcher/dev/` to your Android and iOS project directories.

```bash
morpheme ic-launcher
```

### Specific Flavor
Deploys icons for a specific environment (e.g., `prod`), taking icons from `ic_launcher/prod/`.

```bash
morpheme ic-launcher --flavor prod
```

## Options

```bash
morpheme ic-launcher [options]
```

To see all available options and flags, run `morpheme ic-launcher --help`.

### Available Options

| Option | Abbr | Description |
|---|---|---|
| `--flavor [env]` | `-f` | Target flavor to deploy (dev, stag, prod). Default: `dev`. |
