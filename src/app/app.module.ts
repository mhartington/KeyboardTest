import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import {ChatBubble} from '../components/chat-bubble/chat-bubble';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ChatBubble
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage
  ],
  providers: []
})
export class AppModule {}
