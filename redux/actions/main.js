import * as t from "../types";

// all courses
export const getCoursesData = () => async dispatch => {
    let courses_data = "";
    const courses = await fetch('https://staging.get-licensed.co.uk/api/protect/courses')
    .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            return response.json();
        }
    })
    .then(function (response) {
        courses_data = response.data
        // history.push("/enquiry");
    })
    .catch(function (error) {
        // toast.error(error.message);
    });
    // console.log("courses: ", courses_data);
    dispatch({
        type: t.GET_COURSES,
        payload: courses_data
    });
}

// export const userSignUp = ({ name, age, email, password }) => async dispatch => {
//     try {
//         dispatch({
//             type: t.LOADING,
//             payload: true
//         })
//         const apiResponse = await axios.post(process.env.API_ADDRESS+`/api/auth/register`, {name, age, email, password});

//         if(apiResponse.data.success){
//             localStorage.setItem("user_info", JSON.stringify(apiResponse.data.user))
//             dispatch({
//                 type: t.REGISTER,
//                 payload: apiResponse.data.user
//             })
//         }

//     }catch(error){
//         dispatch({
//             type: t.LOADING,
//             payload: false
//         })
//         dispatch({
//             type: t.ERROR,
//             payload: error.response.data.error
//         })
//     }
// }
