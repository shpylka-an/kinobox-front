import { useCallback, useState } from "react";
import axios from 'axios';

export default () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const makeRequest = useCallback(async (method, url, data = null, headers = {}) => {
    setLoading(true)

    headers['Content-Type'] = 'application/json'

    if (localStorage.getItem('token')) {
      headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
    }

    try {
      const axiosInstance = axios.create({
        baseURL: 'http://localhost:8000/api/',
        headers
      })

      const res = await axiosInstance({method, url, data})
      setLoading(false)

      return res.data
    } catch (e) {
      setLoading(false)
      setError(e.message)
    }
  }, [])

  const clearError = useCallback(() => setError(null), [])

  return {loading, makeRequest, error, clearError}
}
