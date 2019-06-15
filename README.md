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
{
git clone https://github.com/Lunchpool/lunchpool_mobile_onboarding.git;
cd lunchpool_mobile_onboarding &&
npm install -g expo-cli &&
npm install &&
npm start;
}
```

## Deploy to the app store:

```bash
# build a new ipa or apk
npm run buildios
npm run buildandroid

# now you can move the apk file to the playstore and your set.
# apple has a little more difficulty ... you need to use itunes connect.
# two helpful links for apple app store below:
# https://medium.com/@the_manifest/how-to-publish-your-app-on-apples-app-store-in-2018-f76f22a5c33a
# https://appstoreconnect.apple.com/
```

## Run on an Android device connected via usb
```
# If your phone is connected to the computer and emulator has been installed,
# make sure your phone is in usb-debug mode... google for your phone if unsure.
# https://stackoverflow.com/a/32314718/5283424
brew install homebrew/cask/android-platform-tools

# Test quickly on android phone using usb-debug mode: ensure abd is installed (brew install abd)
npm run buildandroid; npm run usbAndroid;

# If you have already built and sent to expo you can test on an android phone even faster:
npm run downloadbinaryandroid; npm run usbAndroid;
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
