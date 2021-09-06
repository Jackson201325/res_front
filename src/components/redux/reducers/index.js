import { alert } from './alert'
import { registration } from './registration'
import { session } from './session'

const rootReducer = () => (
  { alert, registration, session })

export default rootReducer