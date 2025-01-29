export default {
  pages: [
    'pages/index/index',
    'pages/details/details',
    'pages/category/category',
    'pages/my/my',
    'pages/address/address',
    'pages/classes/classes',
    'pages/cart/cart',
    'pages/order/order'
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
        pagePath: 'pages/classes/classes',
        text: '类别'
      }, {
        pagePath: 'pages/cart/cart',
        text: '购物车'
      }
    ]
  }
}
