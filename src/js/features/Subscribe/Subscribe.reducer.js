import i from 'icepick'

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  hidden: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
