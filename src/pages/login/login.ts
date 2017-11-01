import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { Http, Response, Jsonp } from '@angular/http';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  // 接收数据用
  listData: Object;

  // 依赖注入
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public jsonp: Jsonp) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    let url = 'https://xiaotest.cikevideo.com/webapi/get_user_family_role.php?user_id=13100';
    console.log(url)

    this.jsonp.request(url).subscribe(
      (data) => {
      console.log(JSON.stringify(res))
    },
    (error) => {
      console.log(error)
    });
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
      if (username.value.length == 0) {
          alert("请输入账号");
      } else if (password.value.length == 0) {
          alert("请输入密码");
      } else {
          let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
          // alert(userinfo);
          this.navCtrl.push(TabsPage);
      }
  }

}
