import { NAME_CHANGED, PHONE_CHANGED } from '../actions/types';

const INITIAL_SATE = { name: '', phone: '' };

export default (state = INITIAL_SATE, action) => {
  switch (action.type) {
    case NAME_CHANGED:
      return { ...state, name: action.payload };
    case PHONE_CHANGED:
      return { ...state, phone: action.payload };
    case SAVE:
      return { ...state, loading: true, error: '' };
    case SAVE_SUCCESS:
      return { ...state, user: action.payload, error: '', loading: false, };
    case SAVE_FAIL:
      return { ...state, error: 'Updating Failed.', loading: false };
    default:
      return state;
  }
};
