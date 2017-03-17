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
        path: 'messages',
        data: {
          menu: {
            title: '消息',
            icon: 'ion-android-home',
            order: 0
          }
        },
        children: [
          {
            path: 'point_messages',
            data: {
              menu: {
                title: '点对点消息',
              }
            }
          },
          {
            path: 'subscription_messages',
            data: {
              menu: {
                title: '订阅消息',
              }
            }
          },
          {
            path: 'notification_messages',
            data: {
              menu: {
                title: '广播消息',
              }
            }
          }
        ]
      } ,
      {
        path: 'users',
        data: {
          menu: {
            title: '用户',
            icon: 'ion-android-home',
            order: 0
          }
        },
        children: [
          {
            path: 'students',
            data: {
              menu: {
                title: '考生列表',
              }
            }
          }
        ]
      } ,
      {
        path: 'universities',
        data: {
          menu: {
            title: '高校',
            icon: 'ion-android-home',
            order: 0
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: '高校列表',
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
      },
      {
        path: 'campaigns',
        data: {
          menu: {
            title: '活动',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: '活动列表',
              }
            }
          }
        ]
      }

    ]
  }
];
