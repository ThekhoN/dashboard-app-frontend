const interactionStates = (state = {
  leftPanel: 'active',
  rightPanel: ''
}, action) => {
  switch (action.type) {
    case 'ACTIVATE_LEFT_PANEL':
      return {...state, leftPanel: 'active'};
    case 'DEACTIVATE_LEFT_PANEL':
      return {...state, leftPanel: ''};
    case 'ACTIVATE_RIGHT_PANEL':
      return {...state, rightPanel: 'active'};
    case 'DEACTIVATE_RIGHT_PANEL':
      return {...state, rightPanel: ''};
    default:
      return state;
  }
};

export default interactionStates;
