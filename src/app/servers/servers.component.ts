import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['test server', 'test server 2'];

  constructor() {
    setTimeout(() => this.allowNewServer = true, 2000);

  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'server created'
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerNameEvent(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
