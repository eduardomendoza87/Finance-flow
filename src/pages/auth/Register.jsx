import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, Loader2, AlertCircle } from 'lucide-react'; 
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logo_finance_flow.png"; 

const Register = () => {
    const navigate = useNavigate();
    const { signUp } = useAuth();

    const [formData, setFormData] = useState({
      nombre: "",
      email: "",
      password: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      
      // Validación simple
      if (formData.password.length < 6) {
        setError("La contraseña debe tener al menos 6 caracteres.");
        return;
      }

      setLoading(true);

      try {
        await signUp(formData.email, formData.password, formData.nombre);
        // Supabase por defecto inicia sesión tras registrarse si no requiere confirmación de email
        // O puedes mostrar un mensaje de "Revisa tu correo"
        navigate("/dashboard"); 
      } catch (err) {
        console.error("Error en registro:", err);
        setError("Error al crear la cuenta. El correo podría ya estar en uso.");
      } finally {
        setLoading(false);
      }
    };

    return (
      <section className="bg-background min-h-screen flex items-center justify-center"> 
        
        <div className="w-full bg-surface rounded-2xl shadow-2xl md:mt-0 sm:max-w-md xl:p-0 border border-border m-4">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              
              <div className="flex flex-col items-center justify-center mb-6">
                <img src={logo} alt="FinanFlow Logo" className="w-12 mb-4" />
                <h1 className="text-xl font-bold font-display leading-tight tracking-tight text-text-main md:text-2xl">
                    Crea tu cuenta
                </h1>
                <p className="text-sm font-normal text-text-muted mt-2">
                    Empieza a controlar tus finanzas en 30 segundos
                </p>
              </div>

              {error && (
                <div className="bg-danger/10 border border-danger/20 text-danger text-sm rounded-lg p-3 flex items-center gap-2 animate-in fade-in">
                  <AlertCircle size={16} />
                  {error}
                </div>
              )}

              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  
                 <div>
                    <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-text-main">Nombre completo</label>
                     <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <User size={18} className="text-text-muted" />
                        </div>
                        <input 
                            type="text" 
                            name="nombre" 
                            id="nombre" 
                            className="bg-background border border-border text-text-main text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 placeholder-text-muted/50 focus:outline-none transition-all" 
                            placeholder="Ej. Juan Pérez" 
                            required
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                     </div>
                 </div>

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
                            className="bg-background border border-border text-text-main text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 placeholder-text-muted/50 focus:outline-none transition-all" 
                            placeholder="usuario@example.com" 
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                      </div>
                  </div>

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
                            className="bg-background border border-border text-text-main text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 placeholder-text-muted/50 focus:outline-none transition-all" 
                            required
                            value={formData.password}
                            onChange={handleChange}
                            minLength={6}
                        />
                      </div>
                      <p className="mt-1 text-xs text-text-muted">Mínimo 6 caracteres.</p>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-primary/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all shadow-lg shadow-primary/20 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? <Loader2 className="animate-spin" size={20} /> : "Registrarse ahora"}
                  </button>

                  <p className="text-sm font-light text-text-muted text-center">
                      ¿Ya tienes cuenta? <Link to="/login" className="font-medium text-primary hover:underline">Inicia sesión</Link>
                  </p>
              </form>
            </div>
        </div>
      </section>
    );
}
export default Register;