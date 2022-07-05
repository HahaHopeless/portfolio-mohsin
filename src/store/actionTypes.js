export const SET_GLOBAL_LANGUAGE = "SET_GLOBAL_LANGUAGE";

export const setGlobalLanguage = (payload) => {
  return {
    type: "SET_GLOBAL_LANGUAGE",
    payload,
  };
};
