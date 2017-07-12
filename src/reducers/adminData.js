const adminData = (state = {email: '', data: []}, action) => {
  switch (action.type) {
    case 'FETCH_ADMIN_DATA':
      return {...state, email: action.payload};
    default:
      return state;
  }
};

export default adminData;
