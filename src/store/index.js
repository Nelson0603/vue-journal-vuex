import {createStore} from 'vuex'

import journal from '../modules/daybook/store/journal'


const store  = createStore({
    modules:{
        journal: journal
    }
})

export default store // Ponemos nuestro estore en elpunto mas alto para nuestros componentes tengan acceso 