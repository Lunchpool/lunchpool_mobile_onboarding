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

## Additional Instruction if interested in building a different application:
```
npm install react-native-rename -g;
git checkout -b rename-app;
react-native-rename your_app_name_here;

# if everything looks good move it to master branch
git checkout master;
git merge rename-app;
```

## Commands used for this project, if interested:
```
npm uninstall -g expo-cli; npm install -g expo-cli; expo init lunchpool_mobile_onboarding; cd lunchpool_mobile_onboarding;
npm install --save react-native-maps;
```

## Deploy to the app store:

```bash
# remove old ipa and apk app's
rm lunchpool_mobile_onboarding-* &&

# generate new ipa and apk app's via bash script
expo build: ios &&
expo build: android &&
apkUrl=$(expo build:status | grep APK | cut -c 17- | head -1) &&
ipaUrl=$(expo build:status | grep IPA | cut -c 17- | head -1) &&
curl -O $apkUrl;curl -O $ipaUrl;

# If your phone is connected to the computer and emulator has been installed,
# make sure your phone is in usb-debug mode... google for your phone if unsure.
brew install abd
adb -s <device name> install <apk signiture>
# example: adb -s 89NX0C6YN install lunchpool_mobile_onboarding-7988607a3ef444e6b9487bc371aff7b1-signed.apk
```


## (Not required, getting android emulator setup on mac computer):
```bash
# https://gist.github.com/spilth/e7385e7f5153f76cca40a192be35f4ba
touch ~/.android/repositories.cfg
brew cask install caskroom/versions/java8
brew cask install android-sdk
brew cask install intel-haxm
export ANDROID_SDK_ROOT="/usr/local/share/android-sdk/emulator/emulator"
sdkmanager "platform-tools" "platforms;android-27" "extras;intel;Hardware_Accelerated_Execution_Manager" "build-tools;27.0.0" "system-images;android-27;google_apis;x86" "emulator"

avdmanager create avd -n test -k "system-images;android-27;google_apis;x86"
/usr/local/share/android-sdk/emulator/emulator -avd test

adb -s 89NX0C6YN install <apk signiture>
```

