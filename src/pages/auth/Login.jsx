import React from "react";
import { Link } from "react-router-dom";
import { Mail, Lock } from 'lucide-react'; // Agregamos iconos para mejorar UX
import logo from "../../assets/logo_finance_flow.png"; 

const Login = () => {
    return (
      <section className="bg-background min-h-screen flex items-center justify-center"> {/* Fondo general oscuro */}
        
        <div className="w-full bg-surface rounded-2xl shadow-2xl md:mt-0 sm:max-w-md xl:p-0 border border-border">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              
              {/* Logo y Header */}
              <div className="flex flex-col items-center justify-center mb-6">
                <img src={logo} alt="FinanFlow Logo" className="w-12 mb-4" />
                <h1 className="text-xl font-bold font-display leading-tight tracking-tight text-text-main md:text-2xl">
                    Bienvenido de nuevo
                </h1>
                <p className="text-sm font-normal text-text-muted mt-2">
                    Ingresa tus credenciales para continuar
                </p>
              </div>

              <form className="space-y-4 md:space-y-6" action="#">
                  
                  {/* Input Correo */}
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-text-main">Tu correo</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Mail size={18} className="text-text-muted" />
                        </div>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="bg-background border border-border text-text-main text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 placeholder-text-muted/50" 
                            placeholder="usuario@example.com" 
                            required
                        />
                      </div>
                  </div>

                  {/* Input Password */}
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-text-main">Contraseña</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Lock size={18} className="text-text-muted" />
                        </div>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="••••••••" 
                            className="bg-background border border-border text-text-main text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 placeholder-text-muted/50" 
                            required
                        />
                      </div>
                  </div>

                  {/* Options Row */}
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-border rounded bg-background focus:ring-3 focus:ring-primary" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-text-muted">Recordarme</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary hover:underline">¿Olvidaste tu contraseña?</a>
                  </div>

                  {/* Botón Principal */}
                  <button type="submit" className="w-full text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-primary/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all shadow-lg shadow-primary/20">
                    Iniciar sesión
                  </button>

                  {/* Footer */}
                  <p className="text-sm font-light text-text-muted text-center">
                      ¿Aún no tienes una cuenta? <Link to="/register" className="font-medium text-primary hover:underline">Regístrate</Link>
                  </p>
              </form>
            </div>
        </div>
      </section>
    );
}
export default Login;