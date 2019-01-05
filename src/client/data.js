import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
    { text: 'Add Product', icon: <Web/>, link: '/form' },
    { text: 'View Products', icon: <GridOn/>, link: '/table' },
    { text: 'Sign out', icon: <PermIdentity/>, link: '/login' }
  ],
  tablePage: {
    items: [
      {id: 1, name: 'iPhone', price: '75000', category: 'Mobiles'},
      {id: 2, name: 'Samsung TV', price: '45000', category: 'TV'},
      {id: 3, name: 'Heater', price: '2500', category: 'Winter Elx'},
      {id: 4, name: 'Solar', price: '30000', category: 'Panels'},
      {id: 5, name: 'Dell Laptop', price: '60000', category: 'Computers'},
      {id: 6, name: 'UPS', price: '10000', category: 'Computers'},
      {id: 7, name: 'Mobile Charger', price: '500', category: 'Mobiles'},
      {id: 8, name: 'Room AC', price: '60000', category: 'Conditioners'}
    ]
  },
  dashBoardPage: {
    recentProducts: [
      {id: 1, title: 'Samsung TV', text: 'Samsung 32 1080p 60Hz LED Smart HDTV.'},
      {id: 2, title: 'Playstation 4', text: 'PlayStation 3 500 GB System'},
      {id: 3, title: 'Apple iPhone 6', text: 'Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G '},
      {id: 4, title: 'Apple MacBook', text: 'Apple MacBook Pro MD101LL/A 13.3-Inch Laptop'}
    ],
    monthlySales: [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],
    newOrders: [
      {pv: 2400},
      {pv: 1398},
      {pv: 9800},
      {pv: 3908},
      {pv: 4800},
      {pv: 3490},
      {pv: 4300}
    ],
    browserUsage: [
      {name: 'iPhone', value: 800, color: cyan600, icon: <ExpandMore/>},
      {name: 'Heater', value: 300, color: pink600, icon: <ChevronRight/>},
      {name: 'CG TV', value: 300, color: purple600, icon: <ExpandLess/>}
    ]
  }
};

export default data;
