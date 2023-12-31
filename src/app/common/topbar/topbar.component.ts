import { Component, Input, OnInit } from '@angular/core';

interface Languages {
  name: string;
  code: string;
}

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit{
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  languages: Languages [] = [];
  selectedLanguage!: Languages;

  isBellIcon: boolean = false;
  isMessageIcon: boolean = false;

  ngOnInit() {
    this.languages = [
        { name: 'English', code: 'EN' },
        { name: 'Sinhala', code: 'SI' },
        { name: 'Tamil', code: 'TA' },
        { name: 'Japanese', code: 'JA' }
    ];
    this.selectedLanguage = this.languages[0];
  }

  /* ICON STATUS HANDLE */
  notoficationHandle(){
    this.isBellIcon = !this.isBellIcon;
    if(this.isMessageIcon && this.isBellIcon) this.isMessageIcon = false;
  }

  messagesHandle(){
    this.isMessageIcon = !this.isMessageIcon;
    if(this.isMessageIcon && this.isBellIcon) this.isBellIcon = false;
  }
  
  /* TRIMMED OPTION */
  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }
}
