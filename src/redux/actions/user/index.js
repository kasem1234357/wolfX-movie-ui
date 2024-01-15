import { jwtDecode } from "jwt-decode";
export const user_layout_actions = {
  addUser: (state, action) => {
    state.status = "succeeded";
    state.user = jwtDecode(action.payload);
    localStorage.setItem("userToken", JSON.stringify(action.payload));
    localStorage.setItem("movies", JSON.stringify(state.user.favMovies));
  },
  verifiedUser: (state, action) => {
    state.status = "succeeded";
    state.user.verified = true;
    localStorage.setItem("isVerified", true);
  },
  getUser: (state, action) => {
    state.status = "succeeded";
    const data = localStorage.getItem("userToken");

    const decodedUser = jwtDecode(data);
    state.user = decodedUser;
    state.verified = Boolean(localStorage.getItem('isVerified'));
    state.user.verified = Boolean(localStorage.getItem('isVerified'));
    !localStorage.getItem("movies") &&
      localStorage.setItem("movies", JSON.stringify(decodedUser.favMovies));
  },
  clearUser: (state) => {
    localStorage.removeItem("userToken");
    state.status = "idle";
    state.user = null;
  },
};
