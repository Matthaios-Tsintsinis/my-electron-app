import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.exampleappelectronmytest.app',
  appName: 'my-electron-app-test',
  webDir: 'src',  // Corrected the webDir to 'src'
  server: {
    androidScheme: 'https'
  }
};

export default config;
