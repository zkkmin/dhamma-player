import { Component, OnInit } from '@angular/core';
import { Track } from '../track';
import { TRACKS } from '../track-list';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  tracks = TRACKS;

  track: Track = {
    id: 1,
    name: "test",
    link: "test-link"
  }

  selectedTrack: Track = this.tracks[0];
  
  onSelect(track: Track): void {
    this.selectedTrack = track;
  }

  constructor() { }

  ngOnInit() {
  }

}
