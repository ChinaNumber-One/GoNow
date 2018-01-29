export default {
  getCity (state, city) {
    state.city = city
  },
  getRecommend (state, list) {
    state.recommend = list
  },
  getStartPlace (state, startPlace) {
    state.startPlace = startPlace
  },
  getEndPlace (state, endPlace) {
    state.endPlace = endPlace
  }
}
