export const setLayout = (layout) => ({
  type: 'LAYOUT/SET_LAYOUT',
  payload: layout
})

export const toggleMenu = (status) => ({
  type: 'LAYOUT/TOGGLE_MENU',
  payload: status,
})