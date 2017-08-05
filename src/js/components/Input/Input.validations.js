export const vRequired = value => (value ? undefined : 'This is required')

export const vEmail = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const vPasswordIdentical = (val, { confirmPassword, password }) => (
  confirmPassword !== password
  ? 'Passwords not identical'
  : undefined
)