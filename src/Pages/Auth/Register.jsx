import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false) 
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const res = await fetch('/api/register',{
        method: 'post',
        body: JSON.stringify(formData)
      })
      
      const data = await res.json()
  
      if (data.errors) {
        setErrors(data.errors)
      } else {
        
        navigate('/')
      }
    } catch (error) {
      console.log(error)
      setErrors({ general: "An unexpected error occurred" });
    } finally {
      setIsLoading(false);
    }

    setIsLoading(false)
  }

  return (
    <div className="container mx-auto p-4 ">
      <div className=" flex min-h-screen items-center py-16">
        <main className="w-full max-w-md mx-auto p-6">
          <div className="mt-7  border border-gray-200 rounded-xl shadow-sm  dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <h1 className="mt-4 text-2xl font-black text-foreground/90 tracking-tight sm:text-3xl md:text-4xl">Daftar Akun</h1>

              <form onSubmit={handleRegister}>
                <div className="mb-4">
                  <label htmlFor="hs-hero-email-2" className="block text-sm font-medium">
                    <span className="sr-only">Email</span>
                  </label>
                  <input
                    type="email"
                    id="hs-hero-email-2"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={isLoading}
                  />
                  {errors.email && <p className="text-red-500">{errors.email[0]} </p>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium">
                    <span className="sr-only">Password</span>
                  </label>
                  <input
                    type="password"
                    id="hs-hero-password-2"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    disabled={isLoading}
                  />
                  {errors.password && <p className="text-red-500">{errors.password[0]} </p>}
                </div>

                <div className="grid">
                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    disabled={isLoading}
                  >
                    Daftar
                  </button>
                  <p className="text-sm text-center mt-2">
                    <span className="text-gray-400 mr-2">Sudah punya akun?</span>
                    <Link to="/" className="text-blue-500 font-semibold hover:underline hover:text-blue-500">
                      Masuk yuk!
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Register;
