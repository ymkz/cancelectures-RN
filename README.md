# cancelectures for iOS/Android created by react-native

## 何

> 島根大学の休講情報を表示するアプリケーション(*`alpha build`*)です。  
以前開発したChrome Extension版の実装を改良し、ネイティブというよりリーチできる範囲のひろいプラットフォームに向けて開発を行いました。  
iOS/Androidへの両対応と、自分の持つWeb Front-endの技術や知識を活かすために`react-native`を用いています。  
アプリケーションは`create-react-native-app`を用いて作成され、expoでpublishされています。  
iOS/Androidの端末で`expo client`をインストールしている方なら`@ymkz/cancelectures`を追加することで誰でもアクセス可能です。  
フィードバックのコメントやPullRequstなども歓迎しています。  


## 課題

- [ ] 現在はComponentのmountの度に休講情報をすべて取りにいってしまうので、リクエストを減らすために休講情報データの永続化とAPIリクエストのタイミングを最適化する #1
- [ ] 使用しているライブラリのライセンス表記追加 #2
- [ ] 開発者情報のリンク追加 #3
- [ ] Expand ViewのUIデザイン最適化/アニメーション付加によるよりリッチなUXの提供 #4
- [ ] データが0件の場合のViewの作成と分岐処理 #5
