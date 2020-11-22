export const getValidationErrors = (errors, name) => {
  console.log({ errors })
  if (errors) {
    const error = errors.find(error => error.property === name)
    if (error && error.constraints) {
      return Object.values(error.constraints)
    }
  }
}
