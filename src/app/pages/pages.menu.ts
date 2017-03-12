export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
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
                title: 'students',
              }
            }
          }
        ]
      },
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
                title: 'stories',
              }
            }
          }
        ]
      }

    ]
  }
];
