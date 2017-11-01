This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

## ionic 常用命令
    $ ionic serve //---启动服务器
    $ 把浏览器中的地址改为：http://localhost:8100/ionic-lab // 在web上运行IOS、Android等
    $ ionic cordova build ios // iOS 代码同
    $ ionic cordova build android --release -- --keystore="ckkj" --alias=cjjkvideo --storePassword=ciscik709 --password=ciscik709 //relase打包命令 // Android 代码同步
    $ ionic cordova platform add android

## 如果需要在手机运行，则执行以下命令
  // 添加iOS项目
  $ ionic platform add ios
  // 把src里的内容同步到ios项目中(src后面会讲到)
  $ ionic cordova build ios
  // 运行iOS项目,相当于在Xcode里面按Command+R
  $ ionic cordova emulate ios

  //安卓的话同理，把ios替换为android即可
  $ ionic platform add android
  $ ionic cordova build android
  $ ionic cordova emulate android

## 学习说明
  1、首先，更改启动页图标和打包app图标，需要两张图片，放在根目录下resources目录下就可以，然后，cmd命令输入

      ionic cordova resources

  2、Ionic 3 的导航和 iOS 一样是一个栈，push 到新界面，pop 回旧界面。我们在构造函数中设置了 this.navCtrl 属性，我们可以调用 this.navCtrl.push() 方法，来导航到一个新的页面。
  3、// cd到项目目录，然后执行下面的代码
    $ ionic g page login


