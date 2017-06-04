import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AppProvider } from '../logic/providers/AppProvider';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CameraPage } from '../pages/camera/camera';
import { ImagePickerPage } from '../pages/image-picker/image-picker';

@NgModule({
  declarations: [
    MyApp,    
    HomePage,
    TabsPage,
    CameraPage,
    ImagePickerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    HomePage,
    TabsPage,
    CameraPage,
    ImagePickerPage
  ],
  // We are using the custom written prodvider
  // here instead of the array that is normally
  // added here
  providers: AppProvider.get_providers()
})
export class AppModule {}
