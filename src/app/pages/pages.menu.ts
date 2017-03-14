export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'users',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: '用户列表', // menu title
            icon: 'ion-android-home', // menu icon
            order: 0
          }
        },
        children: [
          {
            path: 'students',
            data: {
              menu: {
                title: '学生列表',
              }
            }
          }
        ]
      } ,
      {
        path: 'materials',
        data: {
          menu: {
            title: '素材库',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'stories',
            data: {
              menu: {
                title: '图文列表',
              }
            }
          }
        ]
      }

    ]
  }
];
