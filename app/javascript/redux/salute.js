const GET_SALUTE = 'hello-react-rails/src/redux/reducer/GET_SALUTE';
const SET_SALUTE = 'hello-react-rails/src/redux/reducer/SET_SALUTE';

const initialState = ""

export const GetSalute = () => ({
  type: GET_SALUTE,
});

export const SetSalute = (payload) => ({
    type: SET_SALUTE,
    payload,
  });
  

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SALUTE: {
        return action.payload;
      }
      case GET_SALUTE: {
        return state;
      }
      default: {
        return state;
      }
    }
  };
  
  export default reducer;
  
