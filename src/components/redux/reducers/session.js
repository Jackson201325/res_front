import { userConstants } from '../constants/user';
import axios from 'axios';

// let user = JSON.parse(localStorage.getItem('user'));

// axios
//   .get("http://localhost:3000/logged_in", { withCredentials: true })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// let user;
// user = async function getUserSession() {
//   let userData;
//   await axios
//     .get("http://localhost:3000/logged_in", { withCredentials: true }).then((response) => {
//       // console.log(response.data.user);
//       userData = response.data.user;
//       // return {
//       //   user: response.data.user
//       // }
//     })

//   return userData

// }
// console.log({ user })
// let user;
// async function getUserSession() {
//   return await axios.get("http://localhost:3000/logged_in", { withCredentials: true }).then(response => response.data.user)
// }

// try {
//   user = getUserSession();
// } catch (error) {
//   console.log(error);
// }

// async function getNews() {
//   const response = await axios.get("http://localhost:3000/logged_in", { withCredentials: true });

//   const news = response.data.user;
//   return {
//     user: news
//   }
// }

// const isAuthenticated = () => {
//   return axios.get("http://localhost:3000/logged_in", { withCredentials: true }).then(response => {
//     // returning the data here allows the caller to get it through another .then(...)
//     return response.data
//   }).catch(error => console.log(error));
// };

// const a = isAuthenticated().then(data => ({
//   data
// }))

// getNews();
// console.log({ user, a })

function initialState() {
  let user;
  async function getUserSession() {
    return await axios.get("http://localhost:3000/logged_in", { withCredentials: true }).then(response => response.data.user)
  }

  try {
    user = getUserSession();
  } catch (error) {
    console.log(error);
  }

  return user ? { loggedIn: true, user: user } : { loggedIn: false, user: null };

}
initialState()
console.log(initialState())
export function session(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.usere3
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false
      };
    case userConstants.LOGOUT:
      return {
        loggedIn: false
      };
    default:
      return state
  }
}