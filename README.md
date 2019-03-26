## Curious in becoming part of the team? (React Native)

<hr/>

![logo - red text](https://user-images.githubusercontent.com/7960991/48717575-b9160180-ebe7-11e8-9786-68980dab412f.png)

<hr/>

## Tools we use on the mobile app at lunchpool:
1) Expo-Cli(react-native),
2) ReactNavigation,
3) NativeBase(simular to MaterialUI)
  <br/>Nativebase was chosen because the docs had the best support:
  <br/>a) https://docs.nativebase.io/Components.html#Components
  <br/>Often it is more helpful to look at the open source for the NativeBase components:
  <br/>b) https://github.com/GeekyAnts/NativeBase/tree/master/src/theme/components
4) ReactNativeMaps

## Install Instructions:
```
git clone https://github.com/Lunchpool/lunchpool_mobile_onboarding.git;
cd lunchpool_mobile_onboarding;
npm install;
npm start;
```

## Deploy to the app store:

```bash
# build a new ipa or apk
npm run rebuildios
npm run rebuildandroid

# Test quickly on android phone using usb-debug mode: ensure abd is installed (brew install abd)
npm run rebuild android apk; npm run usbAndroid
```

## Run on an Android device connected via usb
```
# If your phone is connected to the computer and emulator has been installed,
# make sure your phone is in usb-debug mode... google for your phone if unsure.
# https://stackoverflow.com/a/32314718/5283424
brew install homebrew/cask/android-platform-tools
adb -s <device name> install <apk signiture>
# example: adb -s 89NX0C6YN install lunchpool_mobile_onboarding-7988607a3ef444e6b9487bc371aff7b1-signed.apk
```

## Rename App to use for your purposes!
```
npm install react-native-rename -g;
git checkout -b rename-app;
react-native-rename your_app_name_here;

# if everything looks good move it to master branch
git checkout master;
git merge rename-app;
```

## Additional Emulator Instructions:
[additional emulator instructions](AdditionalEmulatorInstructions.md)

## Commands used for this project, if interested:
```bash
npm uninstall -g expo-cli; npm install -g expo-cli; expo init lunchpool_mobile_onboarding; cd lunchpool_mobile_onboarding;
npm install --save react-native-maps;
```
npm scripts:
<br/>Also include the package.json scripts [link](package.json)
