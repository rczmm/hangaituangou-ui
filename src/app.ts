import { createApp } from 'vue'

import './app.scss'

import './assests/font/iconfont.css'

const App = createApp({
  onShow() {
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export default App
