export default {
  pages: [
    'pages/index/index',
    'pages/details/details',
    'pages/my/my',
    'pages/address/address',
    'pages/classes/classes',
    'pages/cart/cart',
    'pages/order/order',
    'pages/draw/draw',
    'pages/report/report',
    'pages/feedback/feedback',
    'pages/manage/manage',
    'pages/orderDetail/orderDetail',
    'pages/returnGood/index',
    'pages/returnGood/returnForm',
    'pages/search/index',
    'pages/payment/payment',
    'pages/profit/index',
    'pages/profit/withdraw',
    'pages/profit/profit',
    'pages/OrderManage/OrderManage',
    'pages/review/review',
    'pages/seckill/seckill',
    'pages/merchant/merchant'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#666',
    selectedColor: '#ffd6e7',
    backgroundColor: '#fafafa',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assests/tabbar/home.png',
        selectedIconPath: './assests/tabbar/home-active.png'
      },
      // {
      //   pagePath: 'pages/classes/classes',
      //   text: '分类',
      //   iconPath: './assests/tabbar/category.png',
      //   selectedIconPath: './assests/tabbar/category-active.png'
      // },
      {
        pagePath: 'pages/cart/cart',
        text: '购物车',
        iconPath: './assests/tabbar/cart.png',
        selectedIconPath: './assests/tabbar/cart-active.png'
      }, {
        pagePath: 'pages/my/my',
        text: '我的',
        iconPath: './assests/tabbar/user.png',
        selectedIconPath: './assests/tabbar/user-active.png'
      }
    ]
  }
}
