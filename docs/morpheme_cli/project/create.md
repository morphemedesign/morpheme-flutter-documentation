---
sidebar_position: 1
---

# Create

You can create Flutter applcation with Morpheme FLutter Starter Kit with run command:

```bash
morpheme create [project-name]
```

Example create project with name `Morpheme Example`

```bash
morpheme create "Morpheme Example"
```

## Options

```bash
morpheme create [arguments]
```

To see all available options and flags, run `morpheme create --help`.

### Available Options

- Version Starter Kit :

| Version Starter Kit | Alternative | Description |
|----------|-------------|-------------|
| `-t [tag-version]` | `--tag [tag-version]` | Clone with Tag version morpheme flutter starter kit, default clone master |

- Refactor Rename Morpheme Code :
  
| Refactor Rename Morpheme Code | Description |
|----------|-------------|
| `--[no-]refactor` | Refactor rename `morpheme` name to `app name` |
| `--[no-]include-library` | Refactor rename `morpheme` name to `app name` include Morpheme Library use this along with argument --refactor |
