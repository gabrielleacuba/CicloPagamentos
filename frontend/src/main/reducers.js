import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
 import CicloDePagamentosReducer from '../CicloDePagamentos/CicloDePagamentosReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: CicloDePagamentosReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer