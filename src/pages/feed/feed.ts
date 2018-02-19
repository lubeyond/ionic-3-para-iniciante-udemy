import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import 'rxjs/add/operator/map';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Faculdade FGF",
    data: "Fevereiro 15, 2018",
    descricao: "Ionic app teste drive udemy curso.",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"

  }

  public nome_usuario: string = "Faculdade FGF";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider

  ) {
  }

  public somaDoisNumeros(num1: number, num2: number) {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovie().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);

      }, error => {
        console.log(error);
      }
    )
  }

}
