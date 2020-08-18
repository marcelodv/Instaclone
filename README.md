## Instaclone
📸 I'm cloning the Instagram feed with React Native

## How to use
       # Install
      yarn install
      
      # Start react-native
      npx react-native start
      
      # Run on your emulator
      npx react-native run-android or run-ios
      
      # Run the server
      If you're using android: 
        adb reverse tcp:3000 tcp:3000  
        yarn json-server server.json -d 1000 -w
