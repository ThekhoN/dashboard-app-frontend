const selectedUser = (state = {selected: false, activeData: ''}, action) => {
  switch (action.type) {
    case 'ACTIVATE_SELECTED_USER':
      return {...state, selected: true};
    case 'DEACTIVATE_SELECTED_USER':
      return {...state, selected: false};
    case 'SET_SELECTED_USER':
      return {...state, activeData: action.payload};
    case 'DELETE_SELECTED_USER':
      return {...state, activeData: ''};
    default:
      return state;
  }
};

export default selectedUser;
