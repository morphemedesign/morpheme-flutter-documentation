---
sidebar_position: 1
---

# Doctor

This command is used to show information about the installed tooling.

```bash
morpheme doctor
```

Doctor check `flutter doctor`, `lcov` and `gherkin` installation.

```bash title="Output"
[✓] Flutter installed
Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel stable, 3.16.9, on macOS 13.0 22A380 darwin-arm64, locale en-ID)
[✓] Android toolchain - develop for Android devices (Android SDK version 33.0.0)
[✓] Xcode - develop for iOS and macOS (Xcode 14.3.1)
[✓] Chrome - develop for the web
[✓] Android Studio (version 2022.2)
[✓] VS Code (version 1.86.2)
[✓] Connected device (2 available)
[✓] Network resources

• No issues found!
[✓] flutterfire installed
flutterfire use for 'morpheme firebase' command
[✓] Gherkin installed
gherkin use for 'morpheme cucumber' command
[✓] npm installed
npm use for create report integration test after 'morpheme cucumber' command
[✓] lcov installed
lcov use for 'morpheme coverage' command
[✓] Shorebird installed
shorebird use for Flutter code push 'morpheme shorebird' command
```
