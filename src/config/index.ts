import dotenv from 'dotenv'
import footerIcons from './footerIcons'

let path:string = ''

switch (process.env.NODE_ENV) {
  case 'production':
    path = `${__dirname}/env/prod.env`
    break
  case 'development':
    path = `${__dirname}/env/dev.env`
    break
  case 'test':
    path = `${__dirname}/env/test.env`
    break
  default:
    path = `${__dirname}/env/dev.env`
    break
}

dotenv.config({ path })

export default {
  ENV: process.env.NODE_ENV,
  BASE_URL: process.env.BASE_URL,
  FOOTER_ICONS: footerIcons,
  API_KEY: process.env.API_KEY,
}
