import { Component } from '@angular/core';
import { NavController,AlertController} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {}

              showPrompt() {
                const prompt = this.alertCtrl.create({
                  title: 'Login',
                  message: "Enter a name for this new album you're so keen on adding",
                  inputs: [
                    {
                      name: 'Nombre',
                      placeholder: 'Nombre'
                    },

                    {
                      type: 'password',
                      placeholder: 'contraseña'
                    },
                  ],

                  buttons: [
                    {
                      text: 'Cancel',
                      handler: data => {
                        console.log('Cancel clicked');
                      }
                    },
                    {
                      text: 'Save',
                      handler: data => {
                        console.log('Saved clicked');
                      }
                    }
                  ]
                });
                prompt.present();
              }
            
            
}
