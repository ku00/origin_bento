var casper = require('casper').create({
    verbose: true,
    logLevel: 'debug',
    pageSettings: {
         loadImages:  false,         // The WebPage instance used by Casper will
         loadPlugins: false,         // use these settings
         userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5)'
    }
});

// print out all the messages in the headless browser context
casper.on('remote.message', function(msg) {
    this.echo('remote message caught: ' + msg);
});
// print out all the messages in the headless browser context
casper.on("page.error", function(msg, trace) {
    this.echo("Page Error: " + msg, "ERROR");
});

// 以下、注文

casper.start("https://delivery.gnavi.co.jp/gad7000/menu14.html", function() {
    this.evaluate(function() {
         document.querySelector("input[name='n[7852997][1176338][14]']").value = 34;  // 注文数
         document.querySelector("input[src='/img/btn_order2.gif']").click();
    });
});
// 配達先の決定
casper.then(function() {
    this.capture('estimate_top.png');
    this.click('.fright a');
});
casper.then(function() {
    this.wait(1000, function() {
        this.click('.m');
    });
});
casper.then(function() {
    this.wait(1000, function() {
        this.click("td[colspan='2'] .m");
    });
});

casper.then(function(){
    this.evaluate(function() {
        document.querySelector("input[name='selectOptionGroups[0][7852995][]']").checked = true;  //ご飯の量を選択
        // ログインして注文
        // document.querySelector("input[name='memberloginid']").value = '';
        // document.querySelector("input[name='memberpassword']").value = '';
        // document.querySelector('.loginbox > a').click();
    });
    this.wait(1000, function() {
        this.capture('estimate.png');
        this.click('td.nologin div.center > a');
    });
});
casper.then(function() {
    this.wait(1000, function() {
        this.capture('guest_info.png');
        this.evaluate(function() {
            // 氏名
            document.querySelector('#consumer_name1').value = "山田";
            document.querySelector('#consumer_name2').value = "太郎";
            // 連絡先
            document.querySelector('#first_tel1').value = "0000";
            document.querySelector('#first_tel2').value = "0000"; 
            document.querySelector('#first_tel3').value = "0000";
            // Mail
            document.querySelector('#mail_address').value = "メールアドレス";
            document.querySelector('#mail_address_confirm').value = "確認用にもう一度";
            // 番地
            document.querySelector('#address_2').value = "4-1";
            // 時間指定
            document.querySelector('#immediate_no').checked = true;
        });
        this.click("input[name='image_fix']");
    });
});
casper.then(function() {
    this.wait(1000, function() {
        this.capture('temp_order.png');
        this.click('input');  // 仮注文完了
    });
});
casper.then(function() {
    this.wait(1000, function() {
        this.capture('confirm.png');
    });
});

casper.run();