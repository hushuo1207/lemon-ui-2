module.exports = {
    title: '柠檬 UI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav : [
            {text: '主页',  link: '/'},
            {text: '文档',  link: '/guide/'},
            {text: '交流',  link: '/https://google.com'},
        ],
        sidebar: [
          {
            title: '入门',   // 必要的
            // path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              '/install/',
              '/start/'
            ]
          },
          {
            title: '组件',
            children: [ 
                '/components/buttondemo',
                '/components/tabsdemo',
                '/components/inputdemo',
                '/components/griddemo',
                '/components/layoutdemo',
                '/components/toastdemo',
                '/components/collapsedemo',
                '/components/popoverdemo',
                
             ],
             collapsable: false, // 可选的, 默认值是 true,
            //initialOpenGroupIndex: -1 // 可选的, 默认值是 0
          }
         ]
    }
}