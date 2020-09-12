import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const HomePage = React.lazy(() => import('../pages/Home'))
const DetailPage = React.lazy(() => import('../pages/Detail'))
const NotFoundPage = React.lazy(() => import('../pages/NotFound'))

function RootRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>로딩</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/detail/:id" component={DetailPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default RootRouter
