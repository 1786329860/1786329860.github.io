import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: '',  //你网站的URL
  favicon: "https://i.postimg.cc/3xyvkspK/2b7852822c40d8771a7bdb03761e2c6.jpg",	// 网页图标链接
  lang: 'zh-CN',  //默认语言
  title: "欢迎",  //网站标题
  subtitle: '开心每一天',//网站副标题
  author: {
    name: '乐享星期日',//博主名称
    avatar: "https://i.postimg.cc/MKspbWhv/20250616233755.png",	//头像链接
    status: {
      emoji: '💛'	// 头像旁边的emoji
    },
  },
  
  description: '慢慢长大的小白',  //简介
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',  //这个是博客自带的RSS订阅，尽量留着，方便其他博友为你订阅
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/dashboard',  //这里填写你的GitHub地址，不需要的话删除此字段即可
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'QQ音乐',
      link: 'https://y.qq.com/',  //这里填写你的网易云音乐地址，不需要的话删除此字段即可
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/126010586?spm_id_from=333.1007.0.0',  //这里填写你的BiliBili地址，不需要的话删除此字段即可
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
  ],

  search: {
    enable: true,
  },
    comment: {
      enable: true
    },
    statistics: {
      enable: true,
      readTime: {
        /**
         * 阅读速度
         */
        speed: {
          cn: 300,
          en: 200,
        },
      },
    },

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: '', //这里填写你的支付宝收款码图片链接
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: '微信支付',
        url: '',//这里填写你的微信收款码图片链接
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})