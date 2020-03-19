export const getValidationErrors = (errors, name) => {
  if (errors) {
    const error = errors.find(error => error.property === name)
    if (error.constraints) {
      return Object.values(error.constraints)
    }
  }
}
