export default {
  pages: [
    'pages/index/index',
    'pages/details/details',
    'pages/category/category',
    'pages/my/my',
    'pages/address/address',
    'pages/class/class'
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
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      }, {
        pagePath: 'pages/my/my',
        text: '我的'
      }, {
        pagePath: 'pages/address/address',
        text: '地址'
      }, {
        pagePath: 'pages/class/class',
        text: '类别'
      }
    ]
  }
}
