# これは何？

コマンドラインツール作成支援のライブラリThor、JavaScriptAPIで動くヘッドレスWebKitのPhantomJSとそのテストユーティリティのCasperJSを使って、ターミナルで`$ git_pull origin-bento`と打つだけでオリジン弁当が注文できるシステムです。

# 動作環境

とりあえずCentOS 5.9での動作を確認しています。使うには以下のものが必要です。

* Ruby 2.0.0p353
* Thor 0.19.1
* PhantomJS 1.9.7
* CasperJS 1.1.0-beta3

# 準備
	$ chmod a+x cli.rb
	$ sudo ln -s /絶対パス/cli.rb /usr/local/bin/git_pull
	$ which git_pull

# 使い方

`order.js`内のコードにメールアドレスを入れて、ターミナルで

    $ git_pull origin_bento

と打つだけです。

最後に追加したメールアドレスに仮注文メールが届くので、それに記載されたURLをクリックすれば注文完了です。

※配達先は`東京都大田区大田区蒲田一丁目4-1`、日時は注文日から`3日後09:00`になります。