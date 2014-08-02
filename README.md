# origin_bento

オリジン弁当ののり弁当をターミナルから注文できます。

# Requirements

* Ruby 2.0.0p353
* Thor 0.19.1 (https://github.com/erikhuda/thor)
* PhantomJS 1.9.7
* CasperJS 1.1.0-beta3

# Setup

```bash
git clone git@github.com:takuminnnn/origin_bento.git
```

```bash
$ gem install thor
```

コマンドを使うための準備として、

```bash
$ chmod a+x cli.rb
$ sudo ln -s /絶対パス/cli.rb /usr/local/bin/git_pull
$ which git_pull
```

# Usage

`order.js`内のコードにメールアドレスを入れて、


```bash
$ git_pull origin_bento
```

追加したメールアドレスに仮注文メールが届くので、それに記載されたURLをクリックすれば注文完了です。

※配達先は`東京都大田区大田区蒲田一丁目4-1`、日時は注文日から`3日後09:00`になります。
