import AuthContext from '../context/AuthContext'

const AuthProvider = ({children}) => {
  
    return (
        <>
          <AuthContext>
            {children}
            </AuthContext>  
        
        </>
    )


}

export default AuthProvider