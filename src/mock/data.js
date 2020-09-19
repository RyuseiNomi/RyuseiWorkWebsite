import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ryusei a work website', // e.g: 'Name | Developer'
  lang: 'jp', // e.g: en, es, fr, jp
  description: 'RyuseiのWork Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_icon.jpg',
  name: 'Ryusei Nomi',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  qiita: 'https://qiita.com/27ma4_ryusei',
  resume: 'https://www.resume.id/27ma4_tonto', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'okure_train.png',
    title: '遅れトレイン',
    info: 'Ruby on Railsで作成した、全国の鉄道路線の運行情報を掲載するWebアプリ',
    info2: '鉄道の遅延情報をAPIより取得し、その情報を変換して掲載をしている。',
    url: 'https://train-delay-reporter.herokuapp.com/',
    repo: 'https://github.com/RyuseiNomi/DelayReporter', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'delay_list_fetcher.png',
    title: 'Delay List Fetcher',
    info: '路線遅延情報を変換してAWS S3バケットにアップロードするLambda関数',
    info2: '上記の遅れトレインアプリで表示している全国の路線の運行情報を作成しているAWS Lambda関数である。',
    url: '',
    repo: 'https://github.com/RyuseiNomi/DelayListFetcher', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bookmark_fzf.jpg',
    title: 'bookmark_fzf',
    info: 'Explore starter from your bookmark via the terminal.',
    info2: 'fzfを用いて、ターミナルからGoogle Chromeのお気に入りを選択して開くことが出来るシェルスクリプト',
    url: '',
    repo: 'https://github.com/RyuseiNomi/DelayListFetcher', // if no repo, the button will not show up
  },
];

// WORK DATA
export const workData = [
  {
    id: nanoid(),
    img: '',
    title: '事業概要',
    info: '石川県金沢市を拠点に、Webアプリ、モバイルアプリ等の受託開発を行っております。',
    info2: 'LaravelやGinなどのフレームワークを用いたWebアプリの制作・保守、iOSアプリケーションの開発などをお手伝いします。',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: '過去のお仕事',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
]

// CONTACT DATA
export const contactData = {
  cta: '能美 龍星',
  btn: '',
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
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
