export const onLogin = data => {
  return dispatch => {
    dispatch({
      type: "LOGIN",
      payload: data
    });
  };
};
