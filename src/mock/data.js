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
  img: 'profile.JPG',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resume.id/27ma4_tonto', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
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
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

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
