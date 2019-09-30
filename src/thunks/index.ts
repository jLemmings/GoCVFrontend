import {Action} from "redux"
import {sendUser} from "../actions/actions";
import {AppState} from "../store";
import {ThunkAction} from "redux-thunk"
import {User} from "../model/user";

export const thunkSendUser = (
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    const url = process.env.REACT_APP_BASE_URL + "/users/" + process.env.REACT_APP_USER_ID;
    console.log(url);
    const response = await fetch(url, {
        method: 'get'
    });
    const data = await response.json();
    const user: User = data.data;
    dispatch(
        sendUser({
            Bio: user.Bio,
            Education: user.Education,
            Email: user.Email,
            Experience: user.Experience,
            FirstName: user.FirstName,
            GithubProfile: user.GithubProfile,
            LastName: user.LastName,
            Password: user.Password,
            ID: user.ID
        })
    )
};
