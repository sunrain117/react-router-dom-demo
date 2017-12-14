import FooterTabView from '../component/footerNav';
import TabHome from '../Views/tabView/home';
import TabManager from '../Views/tabView/manage';
import TabMy from '../Views/tabView/my';
import ProductList from '../Views/product/list';
import ProductInfo from '../Views/product/info';

var routers = [
    {
        type: 'Route',
        path: '/tab',
        component: FooterTabView,
        routes: [{
            exact:true,
            type: 'Route',
            strict:true,
            path: '/tab/manage',
            component: TabManager
        }, {
            type: 'Route',
            exact:true,
            strict:true,
            path: '/tab',
            component: TabHome
        }, {
            type: 'Route',
            exact:true,
            strict:true,
            path: '/tab/my',
            component: TabMy
        }
        ]
    },
    {
        type: 'Route',
        path: '/product',
        exact:true,
        strict:true,
        component: ProductList
    },
    {
        type:'Route',
        path:'/product/:id',
        exact:true,
        strict:true,
        component:ProductInfo
    }
]

export default routers;