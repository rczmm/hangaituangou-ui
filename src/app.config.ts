export default {
  pages: [
    'pages/index/index',
    'pages/details/details',
    'pages/category/category',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#666',
    selectedColor: '#1aad19',
    backgroundColor: '#fafafa',
    borderStyle: 'white',
    list: [{
      pagePath: 'pages/index/index',
      text: '首页'
    }, {
      pagePath: 'pages/details/details',
      text: '详情',
    }, {
      pagePath: 'pages/category/category',
      text: '分类'
    }
    ]
  }
}
