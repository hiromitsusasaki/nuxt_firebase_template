Nuxt template with Firebase
====

## Description

## Environment

### Requirement

以下がインストールされていることを前提とします

- nodejs v10
- npm
- firebase-cli (npm module)

#### Project setup

```
$ cd functions
$ npm intall
```

#### Firebaseプロジェクトを変更する場合

##### firebaseプロジェクトの作成
```
$ firebase projects:create
```
※ ウェブのFirebaseコンソールからでも作成できます。

##### ホスティングのデプロイ先を作成したプロジェクトに変更

`.firebaserc`

{your-created-project}を作成したプロジェクトのprojectIdに変更する
```
{
  "projects": {
    "default": "{your-created-project}"
  }
}
```

##### firestoreのデータベースを作成

1. firebaseコンソールの`Database`>`Firestore`の画面で新しいDBを作成する
2. セキュリティは一旦テストモードで設定する（プロダクションではきちんとセキュリティを設定する必要がある）

##### Firebaseアプリを作成する

1. `設定`>`プロジェクト`の設定画面で`マイアプリ`>`Webアプリ（</>アイコン）`をクリックする
2. アプリのニックネームを入力し、`アプリを登録`ボタンをクリックする（Hostingの設定は不要）
3. 表示されたSDKの設定値を`functions/nuxt-app/firebase.js`に反映する

下記の`{xxxx}`を表示されたSDKの値に修正する

`functions/nuxt-app/firebase.js`
```
import firebase from 'firebase'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "{your-api-key}",
    authDomain: "{your-auth-domain}",
    databaseURL: "{your-database-url}",
    projectId: "{your-project-id}",
    storageBucket: "{your-storage-bucket}",
    messagingSenderId: "{your-messaging-sender-id}",
    appId: "{your-app-id}"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase
```

## Operation

###  開発時

SPAとしてローカルで起動

`functions/`
```
$ cd functions
$ NODE_ENV=development node nuxt-server.js
```
### デプロイ前の動作確認

SSRとしてローカルで起動

`/`
```
$ firebase serve --only functions:nuxtServer,hosting
```

### デプロイ

`functions/`
```
$ npm run prebuild
$ npm run build
$ npm run postbuild
```

`/`
```
$ firebase deploy --only functions:nuxtServer,hosting
```

##  Todo

- StagingとProdutionに環境を分ける
