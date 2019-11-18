import { Component } from '@angular/core';
import {Plugins, CameraResultType, CameraSource, CameraPlugin}  from "@capacitor/core";
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage  {
  userImage  = "assets/img/user.jpg";
  photo: SafeResourceUrl;
  constructor(private sanitize: DomSanitizer) { }


  async takePhoto(){
    const image = await Plugins.Camera.getPhoto({
      quality:100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = this.sanitize.bypassSecurityTrustResourceUrl(image && image.dataUrl);
  }
}
