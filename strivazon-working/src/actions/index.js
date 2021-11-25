export const REMOVE_FROM_Favo = "REMOVE_FROM_FAVO";
export const ADD_TO_Favo = "ADD_TO_Favo";

export const addToFavoAction = (favoToAdd) => ({
  type: ADD_TO_Favo,
  payload: favoToAdd,
});

export const removeFromFavoAction = (indexToRemove) => ({
  type: REMOVE_FROM_Favo,
  payload: indexToRemove,
});
