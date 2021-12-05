import { application } from './app'

import * as dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 3333
application.listen(port)