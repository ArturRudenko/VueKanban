import Vue from 'vue'
import Vuex from 'vuex'
import tasks from "@/store/modules/tasks";
import tags from "@/store/modules/tags";
import columns from "@/store/modules/columns";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tasks,
    tags,
    columns
  }
})

