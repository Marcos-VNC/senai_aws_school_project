export const getters = {  
    isAuthenticated(state) {
      return state.auth.loggedIn
    },
  
    loggedInUser(state) {
      return state.auth.user
    }
  }

  const cookieFromRequest = (request, key) => {
    if (!request.headers.cookie) {
        return;
    }
    const cookie = request.headers.cookie.split(';').find(
        c => c.trim().startsWith(`${key}=`)
    );
    if (cookie) {
        return cookie.split('=')[1];
    }
}
export const actions = {
    nuxtServerInit({ commit, dispatch, route }, { req }){
        const token = cookieFromRequest(req, 'token');
        if (!!token) {
            commit('auth/setToken', token);
        }
    }
};