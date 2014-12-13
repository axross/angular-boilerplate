# boilerplate

MEANスタック向きなboilerplateです。

- Angular 1.3.x
    - ngAnimate 1.3.x
    - ngTouch 1.3.x
    - ng-ui-router 0.2.11
    - ngMock 1.3.x
- async 0.9.x
- lodash 2.4.x
- gulp 3.8.x
    - gulp-less 2.0.x
    - gulp-autoprefixer 2.0.x
    - gulp-csso 0.2.9
    - gulp-webpack 1.1.x
    - gulp-uglify 1.0.x
- karma 0.12.x
- mocha 2.0.x
- power-assert 0.10.x

## Installation

```
npm install
npm run build
```

`npm run build`は以下の作業を行います :
- Common JSスタイルで書かれたJavascriptをブラウザで実行可能な形にコンパイルします。
- lessをCSSにコンパイルします。

## Development

```
npm run watch
```

`npm run watch`はWebサーバーを起動するとともに、ファイルの監視を行います。

Javascriptまたはlessファイルの変更時、以下の作業を行います :

- Common JSスタイルで書かれたJavascriptをブラウザで実行可能な形にコンパイルします。
- lessをCSSにコンパイルします。
- Webサーバーにアプリケーションの変更を通知し、ブラウザをリロードさせます。

```
npm run tdd
```

`npm run tdd`はKarmaを`singleRun: false`で起動します。

Karmaは`/public/dist/bundle.js`と`/public/tests/**/*.spec.js`のファイルの変更を監視し、変更があるたびにテストを実行します。

テストは[Karma](http://karma-runner.github.io/)、[mocha](http://mochajs.org/)、[power-assert](https://github.com/twada/power-assert) (with [espowerify](https://github.com/twada/espowerify))を用いて行われ、`*.spec.js`ファイルにはCommon JSスタイルの`require`が利用できます。

## Production

```
NODE_ENV=production npm run [task]
```

すべての`npm run`タスクにおいて、`NODE_ENV=production`を環境変数として指定して実行すると、それはProduction用のものに置き換わります。

例として、`NODE_ENV=production npm run build`では、以下のように変わります。

- Common JSスタイルで書かれたJavascriptをブラウザで実行可能な形にコンパイルし、uglifyします。
- lessをCSSにコンパイルし、minifyします。
