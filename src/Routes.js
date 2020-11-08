import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import FormScreen from './screens/formScreen'
import RequestScreen from './screens/requestScreen'

export default function Routes(){

    return(
        <div>
            <HashRouter>   
                <Switch>
                    <Route exact path="/" render={()=><FormScreen/>}/>
                    <Route exact path="/request" render={()=><RequestScreen/>}/>
                </Switch>
            </HashRouter>
        </div>


    )
}