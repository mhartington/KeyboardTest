import { Component, NgZone, ViewChild } from '@angular/core';
import { Platform, Content, TextInput } from 'ionic-angular';
// import { Keyboard } from 'ionic-native';

@Component({
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  message = "";
  messages = [];
  inputEle
  needsToFocus = false;
  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: TextInput;
  constructor(
    private platform: Platform,
    public ngZone: NgZone) {
    this.messages = [
      {
        position: 'left',
        body: 'aaa'
      },
      {
        position: 'right',
        body: 'bbb'
      },
      {
        position: 'left',
        body: 'ccc'
      },
      {
        position: 'right',
        body: 'ddd'
      },
      {
        position: 'left',
        body: 'eee'
      },
      {
        position: 'right',
        body: 'fff'
      },
    ];
  }

  sendMessage() {
    this.messages.push({
      position: 'left',
      body: this.message
    });
    this.message = "";
    console.log('calling updated');
    this.messageInput.setFocus();
    this.updateScroll();
  }

  updateScroll() {
    console.log('updating scroll')
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 400)
  }
}
