import { Component} from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-songs-modal',
  templateUrl: './songs-modal.page.html',
  styleUrls: ['./songs-modal.page.scss'],
})
export class SongsModalPage{
  songs: any[];
  artist_or_album: string;
  constructor(private navParams: NavParams,
              private modalController: ModalController
    ) { }

  ionViewDidEnter(){
    this.songs = this.navParams.data.songs;
    this.artist_or_album = this.navParams.data.artist_or_album;
  }

  async selectSong(song){
    await this.modalController.dismiss(song);
  }
}
