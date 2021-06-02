import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ryusei a work website', // e.g: 'Name | Developer'
  lang: 'jp', // e.g: en, es, fr, jp
  description: 'RyuseiのWork Website', // e.g: Welcome to my website
};

// TOP DATA
export const topData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_picture.jpg',
  name: 'Ryusei Nomi',
  subTitle: 'An engineer at Kanazawa',
  paragraphOne: '金沢市でエンジニアをやっております。主にWebアプリのバックエンドやモバイルアプリを触っています。',
  paragraphTwo: '新卒で事業会社に入社し、3年弱ほど少人数チームでQAやAPI設計実装を行っていました。',
  paragraphThree: '2020年9月からは個人事業主として仕事を受けています。',
  twitter: 'https://twitter.com/skn_ton10_v1',
  github: 'https://github.com/RyuseiNomi',
  qiita: 'https://qiita.com/27ma4_ryusei',
  resume: 'https://www.resume.id/27ma4_tonto', // if no resume, the button will not show up
};

// Keywords DATA
export const keywordsData = [
    {
      id: nanoid(),
      name: 'PHP',
      isHobby: false,
    },
    {
      id: nanoid(),
      name: 'Go',
      isHobby: false,
    },
    {
      id: nanoid(),
      name: 'Swift',
      isHobby: false,
    },
    {
      id: nanoid(),
      name: '🚗ドライブ',
      isHobby: true,
    },
    {
      id: nanoid(),
      name: '☕️コーヒー',
      isHobby: true,
    },
    {
      id: nanoid(),
      name: '🎮音ゲー',
      isHobby: true,
    },
    {
      id: nanoid(),
      name: '📷カメラ',
      isHobby: true,
    },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'makasete_choice.png',
    title: 'まかせてチョイス',
    info: '友達と遊んでいる時、グループワークを始めたい時、ゲームを始める時、授業で演習を始める時など、グループ分けが必要なシチュエーションが多くあります。そんな時、ランダムでグループを振り分けてくれるのが「まかせてチョイス」です。メンバーとグループ数を入力するだけで簡単にグループ分けをすることが出来ます。',
    info2: '',
    url: 'https://apps.apple.com/us/app/%E3%81%BE%E3%81%8B%E3%81%9B%E3%81%A6%E3%83%81%E3%83%A7%E3%82%A4%E3%82%B9/id1513168700',
    repo: 'https://github.com/RyuseiNomi/MakaseteChoice_iOS',
  },
  {
    id: nanoid(),
    img: 'pokemon_tribe_rate_searcher.png',
    title: 'ポケモン種族値サーチ',
    info: 'ポケモン剣盾シリーズに登場するポケモンの種族値を検索するWebアプリです。ランクマッチなどで意表を突くポケモン選出に当たった時、「このポケモン何の能力が強かったっけ…？」という時に役立ちます。ポケモンの名前を入力するだけでHP・こうげき・ぼうぎょ・とくこう・とくぼう・すばやさ・合計値を瞬時に表示することが出来ます。',
    info2: '',
    url: 'https://pokemon-tribe-rate-searcher.netlify.app/',
    repo: 'https://github.com/RyuseiNomi/PokemonTribeRateSearcher',
  },
  {
    id: nanoid(),
    img: 'bookmark_fzf.jpg',
    title: 'bookmark_fzf',
    info: 'fzfを用いて、ターミナルからGoogle Chromeのお気に入りを選択して開くことが出来るシェルスクリプト',
    info2: '',
    url: '',
    repo: 'https://github.com/RyuseiNomi/DelayListFetcher',
  },
];

// WORK DATA
export const workData = [
  {
    id: nanoid(),
    img: 'hokurikucar.png',
    title: '【北陸くるま情報サイト運用支援】',
    info: 'suncat氏が運営する、北陸のドライブスポットや車に関するお役立ち情報を発信するWebサイトの運用をお手伝いしています。',
    info2: '主にSNSを通した広報活動の自動化を担当しています。',
    url: 'https://hokurikucar.com/',
    repo: '', // if no repo, the button will not show up
  },
]

// CONTACT DATA
export const contactData = {
  email: 'ryusakine0507@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/skn_ton10_v1',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/RyuseiNomi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
