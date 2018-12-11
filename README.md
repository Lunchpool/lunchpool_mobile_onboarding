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

## Commands used, if interested:
```
npm uninstall -g expo-cli; npm install -g expo-cli; expo init lunchpool_mobile_onboarding; cd lunchpool_mobile_onboarding;
npm install --save react-native-maps;
```


