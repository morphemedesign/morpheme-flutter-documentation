---
sidebar_position: 7
---

# Color2Dart

This command is used to generate our theme and dart file from yaml to dart.

```bash
morpheme color2dart
```

## Setup

first if you dont have a color2dart.yaml in `color2dart/color2dart.yaml` in your project you need to run

```bash
morpheme color2dart init
```

File generated in `color2dart/color2dart.yaml`

```yaml title="color2dart/color2dart.yaml"
# brightness can be 'light' or 'dark'

light:
  brightness: light
  colors:
    white: "#FFFFFF"
    black: "#1E1E1E"
    grey: "#979797"
    grey1: "#CFCFCF"
    grey2: "#E5E5E5"
    grey3: "#F5F5F5"
    grey4: "#F9F9F9"
    primary: "#28A0F6"
    secondary: "#FDA06C"
    primaryLighter: "#00AFC1"
    warning: "#DAB320"
    info: "#00AFC1"
    success: "#22A82F"
    error: "#D66767"
    bgError: "#FFECEA"
    bgInfo: "#DFFCFF"
    bgSuccess: "#ECFFEE"
    bgWarning: "#FFF9E3"
dark:
  brightness: dark
  colors:
    white: "#1E1E1E"
    black: "#FFFFFF"
    grey: "#979797"
    grey1: "#F9F9F9"
    grey2: "#F5F5F5"
    grey3: "#E5E5E5"
    grey4: "#CFCFCF"
    primary: "#28A0F6"
    secondary: "#FDA06C"
    primaryLighter: "#00AFC1"
    warning: "#DAB320"
    info: "#00AFC1"
    success: "#22A82F"
    error: "#D66767"
    bgError: "#FFECEA"
    bgInfo: "#DFFCFF"
    bgSuccess: "#ECFFEE"
    bgWarning: "#FFF9E3"
```

you can use `MaterialColor` to use `Color` in yaml

```yaml
light:
  brightness: light
  colors:
    blue:
      primary: "#2196F3"
      swatch:
          50: "#E3F2FD"
          100: "#BBDEFB"
          200: "#90CAF9"
          300: "#64B5F6"
          400: "#42A5F5"
          500: "#2196F3"
          600: "#1E88E5"
          700: "#1976D2"
          800: "#1565C0"
          900: "#0D47A1"
```

File generated now in `core/lib/src/themes`

![File generated](../../../static/img/generate/color2dart/color2dart.png)

## Usage

To usage this theme and color you need to setup in your `MaterialApp`

```dart
class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    final router = locator<GoRouter>();

    return BlocProvider(
      create: (context) => GlobalCubit(),
      child: Builder(builder: (context) {
        return MaterialApp.router(
          title: 'Morpheme',
          scaffoldMessengerKey: scaffoldMessengerKey,
          theme: context.selectedTheme.themeData, // this, context.selectedTheme.themeData take from GlobalCubit
          darkTheme: context.selectedTheme.themeData, // this, context.selectedTheme.themeData take from GlobalCubit
          locale: context.selectedLocale,
          localizationsDelegates: S.localizationsDelegates,
          supportedLocales: S.supportedLocales,
          routerConfig: router,
        );
      }),
    );
  }
}
```

You can change theme just like this `context.changeTheme(MorphemeThemeDark())` or theme you set in your color2dart.

Now to use color you need to use like this `context.color.primary` it take from `read<GlobalCubit>().state.theme.color`.
