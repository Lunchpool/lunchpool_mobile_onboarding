# Macintosh Computer Instructions

## Android Emulator Setup (Not Required):
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
```

## Simpler ways to run an android app.
```
# If you do not want to install the full android studio,
# download android bridge device (abd) for usb debug enabled android phones:

brew install abd

# Otherwise download android studio:

brew cask install android studio
```

## Iphone emulator...
Download Xcode from the app store...
