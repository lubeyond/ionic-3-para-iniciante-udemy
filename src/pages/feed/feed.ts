import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';


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

  public lista_filmes = new Array<any>();

  public nome_usuario: string = "Faculdade FGF";
  public loader;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController

  ) {
  }

  abreCarregando(){
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes...",
      
    });
    this.loader.present();
  }

  fechaCarregando(){
    this.loader.dismiss();
  }

  public somaDoisNumeros(num1: number, num2: number) {
    alert(num1 + num2);
  }

  ionViewDidEnter() {
    this.abreCarregando();
    console.log('ionViewDidEnter FeedPage');
    this.movieProvider.getLatestMovie().subscribe(
      data => {
        console.log(data);
        const response = (data as any);
        this.lista_filmes = response.results;
        console.log(this.lista_filmes);
        this.fechaCarregando();
      },
      error => {
        console.log(error);
        this.fechaCarregando();
      }
    )
  }
}
