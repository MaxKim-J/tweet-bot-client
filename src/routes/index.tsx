import React, { Suspense } from 'react'
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'

const HomePage = React.lazy(() => import('../pages/Home/index'))
const DetailPage = React.lazy(() => import('../pages/Detail/index'))
const NotFoundPage = React.lazy(() => import('../pages/NotFound/index'))


const {PUBLIC_URL} = process.env

function RootRouter() {
  return (
    <BrowserRouter>
      <Header/>
      <Suspense fallback={<div>로딩</div>}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/detail/:id' component={DetailPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default RootRouter
