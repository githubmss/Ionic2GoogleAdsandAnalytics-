import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import {  AdMobPro } from '../../providers/admobpro';
import {GoogleAnalytics} from 'ionic-native';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AdMobPro]
})
export class HomePage {
  constructor(public navCtrl: NavController, private adMobPro: AdMobPro, private platform: Platform) {
  
 this.platform.ready().then(() => {

GoogleAnalytics.startTrackerWithId('UA-92172658-1')
   .then(() => {
     console.log('Google analytics is ready now');
     // Tracker is ready
     // You can now track pages or set additional information such as AppVersion or UserId
   })
   .catch(e => console.log('Error starting GoogleAnalytics', e));

      GoogleAnalytics.trackView("Home Page", "www.in3dc.com/membership", true);
    });
  }

trackEvent() {
    this.platform.ready().then(() => {
      GoogleAnalytics.trackEvent("Page", "HomePage-Open-Action", "Label", 1);
    });
  }
  showBanner(){
  	console.log('showBanner');
  	this.adMobPro.showBanner();
  }
  removeBanner(){
  	console.log('removeBanner');
  	this.adMobPro.removeAds();
  }
  showInterstitial(){
  	console.log('showInterstitial');
  	this.adMobPro.showInterstitial();
  }



}
