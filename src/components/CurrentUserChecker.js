import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/currentUser";
import useHttp from "../hooks/useHttp";

const CurrentUserChecker = ({children}) => {
  const [, dispatch] = useContext(CurrentUserContext)
  const {makeRequest} = useHttp()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      dispatch({type: 'SET_UNAUTHORIZED'})
      return;
    }
    
    makeRequest('POST', 'users/current').then(res => {
      dispatch({type: 'SET_AUTHORIZED', payload: res})
    })

  }, [dispatch, makeRequest])

  return children
}

export default CurrentUserChecker
