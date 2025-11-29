import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Download, Eye, EyeOff, Bell, Shield, FileText } from "lucide-react";
import Toggle from "../../components/Toggle";

const Preferences = () => {
  // Estados de preferencias
  const [ocultarSaldos, setOcultarSaldos] = useState(false);
  const [mostrarCentavos, setMostrarCentavos] = useState(true);
  const [resumenSemanal, setResumenSemanal] = useState(false);
  const [alertasPresupuesto, setAlertasPresupuesto] = useState(true);

  const handleExportCSV = () => {
    console.log("Iniciando descarga de CSV...");
    // Aquí iría la lógica real de exportación
    alert("Tu reporte se está generando...");
  };

  return (
    <div className="bg-background min-h-screen text-text-main font-sans pb-12">
      
      {/* --- HEADER --- */}
      <section className="px-6 py-8 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/settings"
            className="inline-flex items-center gap-2 text-text-muted hover:text-text-main mb-6 transition-colors group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Volver a Configuración
          </Link>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">
              Preferencias
            </h1>
            <p className="text-text-muted">
              Personaliza tu experiencia en FinanFlow.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 1: PRIVACIDAD --- */}
      <section className="px-6 md:px-12 lg:px-16 mb-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4 text-primary">
            <Shield size={20} />
            <h2 className="font-bold text-lg font-display uppercase tracking-wider">Privacidad y Visualización</h2>
          </div>
          
          <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm space-y-6">
            
            {/* Ocultar Saldos */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-text-main mb-1 flex items-center gap-2">
                  Modo Privacidad {ocultarSaldos ? <EyeOff size={16} className="text-text-muted"/> : <Eye size={16} className="text-text-muted"/>}
                </h3>
                <p className="text-sm text-text-muted">
                  Oculta los montos totales en el Dashboard para mayor privacidad en público.
                </p>
                {ocultarSaldos && (
                  <div className="mt-2 inline-block px-3 py-1 bg-surface border border-border rounded text-xs font-mono text-text-muted">
                    Balance: <span className="blur-sm">$12,450</span>
                  </div>
                )}
              </div>
              <Toggle enabled={ocultarSaldos} onChange={setOcultarSaldos} />
            </div>

            <hr className="border-border/50" />

            {/* Mostrar Centavos */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-text-main mb-1">
                  Mostrar centavos
                </h3>
                <p className="text-sm text-text-muted">
                  Muestra u oculta los decimales en los listados (ej. $100 vs $100.50).
                </p>
              </div>
              <Toggle enabled={mostrarCentavos} onChange={setMostrarCentavos} />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 2: NOTIFICACIONES --- */}
      <section className="px-6 md:px-12 lg:px-16 mb-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4 text-primary">
            <Bell size={20} />
            <h2 className="font-bold text-lg font-display uppercase tracking-wider">Notificaciones</h2>
          </div>

          <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm space-y-6">
            
            {/* Resumen Semanal */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-text-main mb-1">
                  Resumen semanal
                </h3>
                <p className="text-sm text-text-muted">
                  Recibe un reporte de tus gastos cada lunes por correo.
                </p>
              </div>
              <Toggle enabled={resumenSemanal} onChange={setResumenSemanal} />
            </div>

            <hr className="border-border/50" />

            {/* Alertas Presupuesto */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-text-main mb-1">
                  Alertas de presupuesto
                </h3>
                <p className="text-sm text-text-muted">
                   Avísame cuando gaste mucho en una categoría específica.
                </p>
              </div>
              <Toggle enabled={alertasPresupuesto} onChange={setAlertasPresupuesto} />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 3: DATOS --- */}
      <section className="px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4 text-primary">
            <FileText size={20} />
            <h2 className="font-bold text-lg font-display uppercase tracking-wider">Gestión de Datos</h2>
          </div>

          <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-text-main mb-1">
                  Exportar transacciones
                </h3>
                <p className="text-sm text-text-muted">
                  Descarga todo tu historial en formato CSV para Excel.
                </p>
              </div>
              
              <button 
                onClick={handleExportCSV}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-surface border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95"
              >
                <Download size={18} />
                <span>Descargar CSV</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Preferences;