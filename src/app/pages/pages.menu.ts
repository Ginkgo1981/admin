const PAGES_STAFF_MENU = [
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
            path: 'message-list',
            data: {
              menu: {
                title: '消息列表',
              }
            }
          },
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


const PAGES_Staff_MENU = [
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
            path: 'message-list',
            data: {
              menu: {
                title: '消息列表',
              }
            }
          },
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

const PAGES_TEACHER_MENU = [
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
            path: 'message-list',
            data: {
              menu: {
                title: '消息列表',
              }
            }
          },
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
            path: 'detail',
            data: {
              menu: {
                title: '高校',
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


export {
    PAGES_STAFF_MENU,
    PAGES_TEACHER_MENU
}


