<!-- classes: title -->

import { YouTube } from '../src/youtube'
import { Sanko } from '../src/sanko'
import { LinkImage } from '../src/link-image'

<!-- ![](https://www.conoha.jp/wing/wptheme/sango/images/preview_image01.png) -->


# SANGO WEBINAR

2023.8.30

---

## ご案内

- チャット欄は参加者と発表者がコミュニケーションをするためにご活用ください
- セッションに関する質問はチャット欄にご記入ください
- ハッシュタグは**#sangowp**です
- 発表スライドは後で公開します


---


## steelydylan



<!-- block-start: grid -->

<!-- block-start: column -->

![](https://avatars.githubusercontent.com/u/2508691?v=4)

- SANGO 現開発者
- 息子 2歳！！


<div style={{ display: 'flex' }}>
<a href="https://twitter.com/steelydylan" className="twitter-btn" style={{ marginRight: '20px' }}>@steelydylan</a>

<a href="https://twitter.com/sangowp" className="twitter-btn">@sangowp</a>
</div>

<!-- block-end: column -->

<!-- block-start: column -->

2021年の1月よりSANGOの開発を引き継いでいます。

<Sanko 
  url="https://saruwakakun.com/sango/sango-team"
  title="SANGOの運営チームについて"
  subtitle="SANGOカスタマイズガイド"
/>

<!-- block-end: column -->

<!-- block-end: grid -->

---

## ちょっと宣伝！！ブログのカスタマイズにお勧め！

https://mosya.dev

![](/assets/mosya.png)


---


## この勉強会の目的

<!-- block-start: grid -->

<!-- block-start: column -->

- SANGO 3.0の機能を抑える
- SANGO Landの活用方法を押さえる
- ヘッダー、フッター、サイドメニューのカスタマイズ方法をおさえる


<!-- block-end -->

<!-- block-start: column -->

![](https://www.conoha.jp/wing/wptheme/sango/images/preview_image02.png)

<!-- block-end -->

<!-- block-end -->

---

## 今日のアジェンダ

| 時刻          | 内容                                                       | 発表者       | 
| ------------- | ---------------------------------------------------------- | ------------ | 
| 20:00 ~ 20:10              | オープニング                                               |              | 
| 20:10 ~ 20:50 | サイドメニューやヘッターなどのカスタマイズ	                             | <img src="https://avatars.githubusercontent.com/u/2508691?v=4" style={{ width: '40px', height: '40px', verticalAlign: 'middle', borderRadius: '50%' }} /> | 
| 20:50 ~ 21:00 | SANGO Landで追加されたブロックの紹介                              | <img src="https://avatars.githubusercontent.com/u/2508691?v=4" style={{ width: '40px', height: '40px', verticalAlign: 'middle', borderRadius: '50%' }} /> | 
| 21:00 ~ 21:30 | 質問への回答やフリートーク                              | <img src="https://avatars.githubusercontent.com/u/2508691?v=4" style={{ width: '40px', height: '40px', verticalAlign: 'middle', borderRadius: '50%' }} /> | 


---

<!-- classes: title -->
<!-- background: '/assets/section.jpeg' -->


# SANGO WEBINAR

---

## SANGO 3.0リリース後に追加した新機能

- 記事ごとの関連記事の選択機能

<!-- block-start: grid -->

<!-- block-start: column -->

![](/assets/kanren.png)

<!-- block-end: column -->

<!-- block-start: column -->

![](/assets/kanren-front.png)

<!-- block-end: column -->

<!-- block-end: grid -->

---

## SANGO 3.0リリース後に追加した新機能

- 記事一覧ブロックで「更新順」を追加

![](/assets/posts.png)

---

## SANGO 3.0リリース後に追加した新機能

Splideを使った新しいスライダーブロックを用意

- アクセシビリティ的にも速度的にもこちらがお勧め
- jQuery依存をなくすためにもこちらがお勧め

---

## SANGO 3.0リリース後に追加した新機能

旧スライダーから新スライダーに切り替え可能です！

![](/assets/slider-switch.png)

---

## SANGO 3.0リリース後に追加した新機能

プラグインなしでプロフィールに写真を追加できるようになりました！

![](/assets/profile.png)

---

## SANGO 3.0リリース後に追加した新機能

カスタムバリエーション機能

カスタマイズした独自のブロックを増やせる！！<br/>SANGO Landでよく使うものを独自ブロック化するのがお勧め

<!-- block-start: grid -->

<!-- block-start: column -->

![](/assets/custom-block.png)

<!-- block-end: column -->

<!-- block-start: column -->

![](/assets/custom-block2.png)

<!-- block-end: column -->

<!-- block-end: grid -->

---

## SANGO 3.0リリース後に追加した新機能

コンテンツブロックのクリック計測機能

![](/assets/click.png)

---



<!-- classes: title -->
<!-- background: '/assets/section.jpeg' -->

# SANGOのカスタマイズ紹介

---

## サイドメニューにはウィジェットグループを使おう

ウィジェットグループを使うと、タイトルとセットでサイドメニューにウィジェットを表示できます。
SANGO Landのブロックを使うのがお勧め！

https://sangoland.app/blocks/sidemenu

<!-- block-start: grid -->

<!-- block-start: column -->

![](/assets/widget-editor.png)

<!-- block-end: column -->

<!-- block-start: column -->

![](/assets/widget-group.png)

<!-- block-end: column -->

<!-- block-end: grid -->

---

## サイドメニューで部分的にウィジェットの影を消す

登録したウィジェットに`nowidget`クラスをつけてください。

<!-- block-start: grid -->

<!-- block-start: column -->

![](/assets/nowidget.png)

<!-- block-end: column -->

<!-- block-start: column -->

![](/assets/nowidget2.png)

<!-- block-end: column -->

<!-- block-end: grid -->

---

## CSSのカスタマイズには共有CSSを使おう

全てのブロックで同じCSSを使いたい場合は、共有CSSを使うと便利です。

![](/assets/share.png)


## カスタム投稿タイプに対応

### カスタム投稿タイプとは

デフォルトの投稿タイプである「投稿」と「ページ」に加えて、特定の内容やデータ構造を持つ新しい投稿タイプを追加するための機能を指します。

例えば、不動産のサイトを運営している場合、通常の「投稿」や「ページ」ではなく、「物件」というカスタム投稿タイプを作成することで、物件情報を統一的に管理・表示することが可能になります。

---

## フィルターを使った高度なカスタマイズ

「この記事を書いた人」のカスタマイズ

```php
add_filter('sng_author_label', function () {
  return "この記事の監修者";
});
```

記事一覧のカードのカスタマイズ

```php
add_filter('sng_card_link', function($html, $id) {
  return "ここに加工したHTMLを返す";
});
```

https://sangoland.app/issues/4990ee4f-ed43-4a99-b3da-aba0a1c92f41

---

## フィルターを使った高度なカスタマイズ

ヘッダーのカスタマイズ

```php
add_filter('sng_header', function($html) {
  return "ここに加工したHTMLを返す";
});
```

フッターのカスタマイズ

```php
add_filter('sng_footer', function($html) {
  return "ここに加工したHTMLを返す";
});
```

---


<!-- classes: title -->
<!-- background: '/assets/section.jpeg' -->


# SANGO WEBINAR

質問コーナー

---

<!-- classes: title -->
<!-- background: '/assets/section.jpeg' -->



# SANGO WEBINAR

ご静聴ありがとうございました！
