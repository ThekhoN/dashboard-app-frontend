const selectedUser = (state = {selected: false, activeData: ''}, action) => {
  switch (action.type) {
    case 'SET_SELECTED_USER':
      return {...state, activeData: action.payload};
    case 'DELETE_SELECTED_USER':
      return {...state, activeData: ''};
    default:
      return state;
  }
};

export default selectedUser;
