import React from 'react';
import {Route} from 'react-router-dom'
const RouteWithSubRoutes=(route)=>{
    return <Route path={route.path} exact={!!route.exact} strict={!!route.strict} render={(props)=>(
        <route.component {...props}  routes={route.routes}></route.component>
    ) }></Route>
}

export default RouteWithSubRoutes;