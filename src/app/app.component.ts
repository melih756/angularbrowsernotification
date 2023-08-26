import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  

  newMessage: string = '';
  messageCount: number = 0;
  

  showNotification() {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          
            const notification = new Notification('Yeni Mesaj', {
              body: this.newMessage,
              icon: 'assets/logo-minik-1.png'
            });

            notification.addEventListener('click', () => {
              window.open('https://river.com.tr/','_blank');
              this.resetMessageCount();
            });
            
          this.messageCount++;
          document.title = `Yeni Bir Mesajınız Var(${this.messageCount})`;;
        }
      });
      }
    }
      resetMessageCount() {
        this.messageCount=0;
        document.title='River'
  }
}