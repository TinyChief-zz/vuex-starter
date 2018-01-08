import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {			// состояние приложения
		showImg: true, 
	},
	getters: {			// отправить данные в компоненты
		showImg (state) {
			return state.showImg
		}
	},
	mutations: {			// изменить состояние приложения
		toggle (state) {
			state.showImg = !state.showImg
		}
	},
	actions: {			// получить действия из компонентов
		toggle (context) {
			context.commit('toggle')
		}
	}
})