import columnProperties from "@/utils/columnProperties";

export default {
  namespaced:true,
  getters: {
    allColumns() {
      return columnProperties
    }
  }
}