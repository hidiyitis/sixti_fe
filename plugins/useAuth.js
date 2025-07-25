export const useAuth = () => {
  const isLoggedIn = useState('isLoggedIn', () => false) // default: belum login
  return {
    isLoggedIn
  }
}
