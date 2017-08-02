import React from 'react'
import ReactDOM from 'react-dom'
import { css } from 'glamor'

import { baseStyles } from './index.glamor.js'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

css.insert(baseStyles)

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
