import React, { Suspense } from 'react'
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom'

const HomePage = React.lazy(() => import('../pages/Home/index'))
const DetailPage = React.lazy(() => import('../pages/Detail/index'))

const {PUBLIC_URL} = process.env

function RootRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path={`${PUBLIC_URL}/`} component={HomePage} />
          <Route path={`${PUBLIC_URL}/detail/:id`} component={DetailPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default RootRouter
