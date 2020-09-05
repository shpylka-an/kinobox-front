import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const StyledPaper = styled.div`
  ${({ theme }) => `
    margin-top: ${theme.spacing(8)}px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`

export const StyledForm = styled.form`
  ${({ theme }) => `
    width: 100%;
    margin-top: ${theme.spacing(1)}px;
  `}
`

export const StyledSubmitButton = styled(Button)`
  ${({ theme }) => `
    margin: ${theme.spacing(3, 0, 2)};
  `}
`
