import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ClusteredFeaturesComponent } from './clustered-features.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [ClusteredFeaturesComponent],
  imports: [
    YouTubePlayerModule
  ],
  exports: [ClusteredFeaturesComponent]
})
export class ClusteredFeaturesModule { }
