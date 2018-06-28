## NeoPlace platform mobile app

### Prerequisites
Following development tools are required to run this project

```
* GIT
* Visual Studio Code / IntelliJ IDEA
* Node 8 with npm 5
* angular-cli
* ionic for native app
* Android studio for Android app
* Xcode for iOS app
```
### Hierarchy
```
app
  app.component
  app.module
  ...           # entry point for angular app and configuration files
components
pages           # frontend HTML/CSS views
  home
  article
  service
  pay
pipes
providers       # useful class
  model
  ...
package.json
config.xml      # for mobile native app
README.md 
```

### Build

```
npm install
ionic build
ionic serve --lab # to test the app in live
```
