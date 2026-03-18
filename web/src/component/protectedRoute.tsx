import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute ({children} : {children : React.ReactNode}) {

    const [status, setStatus] = useState<'loading' | 'valid' | 'invalid' >('loading');
    

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem('token');

            if (!token){
                setStatus('invalid');
                return;
            }
        
        try {
            const response = await fetch('http://localhost:3000/user', {
                headers : {
                    'Authorization' : `Bearer ${token}`
                }
            });

            if(response.ok){
                setStatus('valid');
            } else {
                localStorage.removeItem('token');
                setStatus('invalid');

            }

        } catch (error){
            console.error('Gagal verifikasi token', error);
            localStorage.removeItem('token');
            setStatus("invalid");
        }
    }
        verifyToken();
    }, []);

if (status==='loading'){
    return (
        <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    );
}

 if (status === 'invalid') {
    return <Navigate to="/login" />;
  }

  return children;
}


export default ProtectedRoute;