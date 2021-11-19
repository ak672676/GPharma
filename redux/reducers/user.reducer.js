import { SETTING_USER_SUCCESS } from "../actionType";
// import { AsyncStorageStatic } from "react-native";

const initialState = {
  user: null,
  orderBook: null,
};


export const userReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SETTING_USER_SUCCESS:
      return {
        ...prevState,
        user: payload,
      };

    default:
      return prevState;
  }
};
