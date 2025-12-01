'use client'

import { useState } from 'react'
import { Heart, CheckCircle, Shield, Church, Star, Play } from 'lucide-react'
import { addToWaitlist } from '@/lib/supabase'

export default function Home() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      await addToWaitlist(email)
      setMessage('✅ ¡Gracias! Te avisaremos cuando lancemos. Que Dios te bendiga.')
      setEmail('')
    } catch (error: any) {
      if (error.message.includes('already on the waitlist')) {
        setMessage('📧 Este email ya está registrado. ¡Pronto tendrás noticias!')
      } else {
        setMessage('❌ Hubo un error. Por favor intenta de nuevo.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen">
      {/* Navegación */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-sky-600" fill="currentColor" />
            <span className="text-2xl font-bold text-sky-700">Soulmate</span>
          </div>
          <a href="#waitlist" className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-6 rounded-full transition-all">
            Unirme
          </a>
        </div>
      </nav>

      {/* Hero Section con Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video de Fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/3209211/3209211-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/70 via-sky-900/50 to-emerald-900/70"></div>
        
        {/* Contenido */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 pt-20">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Church className="w-4 h-4" />
            <span>Para católicos que buscan un amor verdadero</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Encuentra tu
            <span className="text-sky-300"> Media Naranja</span>
            <span className="text-emerald-300"> en la Fe</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Conecta con hombres y mujeres católicos que comparten tu fe, tus valores 
            y tu deseo de formar una familia bendecida por Dios.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              required
              className="flex-1 px-6 py-4 rounded-full border-0 focus:ring-2 focus:ring-sky-400 focus:outline-none text-lg"
            />
            <button type="submit" disabled={loading} className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-full transition-all whitespace-nowrap">
              {loading ? 'Enviando...' : 'Quiero Unirme'}
            </button>
          </form>
          {message && <p className="text-center text-sm mt-2 text-white">{message}</p>}
          
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span>100% Privado y Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>Comunidad Verificada</span>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Parejas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=500&fit=crop" 
              alt="Pareja católica feliz" 
              className="rounded-2xl w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=500&fit=crop" 
              alt="Pareja conversando" 
              className="rounded-2xl w-full h-64 object-cover mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=500&fit=crop" 
              alt="Pareja joven sonriendo" 
              className="rounded-2xl w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=500&fit=crop" 
              alt="Pareja en parque" 
              className="rounded-2xl w-full h-64 object-cover mt-8"
            />
          </div>
        </div>
      </section>

      {/* Por qué Soulmate */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              ¿Por qué <span className="text-sky-600">Soulmate</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No somos una app de citas más. Somos una comunidad católica donde 
              el respeto, la fe y los valores son lo primero.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Church className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Comunidad de Fe</h3>
              <p className="text-gray-600">
                Todos los miembros comparten los valores católicos. 
                Aquí encontrarás personas que entienden la importancia de Dios en una relación.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Perfiles Verificados</h3>
              <p className="text-gray-600">
                Cada perfil es revisado para garantizar que sea una persona real 
                con intenciones serias de encontrar pareja.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Relaciones Serias</h3>
              <p className="text-gray-600">
                Nuestro objetivo es ayudarte a encontrar a alguien para formar 
                una familia. No es una app para encuentros casuales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              ¿Cómo <span className="text-emerald-600">Funciona</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="font-bold mb-2 text-gray-800 text-lg">Crea tu Perfil</h3>
              <p className="text-gray-600">Cuéntanos sobre ti, tu fe y lo que buscas en una pareja.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="font-bold mb-2 text-gray-800 text-lg">Descubre Personas</h3>
              <p className="text-gray-600">Te mostramos católicos compatibles según tus valores.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="font-bold mb-2 text-gray-800 text-lg">Conversa</h3>
              <p className="text-gray-600">Chatea de forma segura y conoce mejor a esa persona especial.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="font-bold mb-2 text-gray-800 text-lg">Conócense</h3>
              <p className="text-gray-600">Queden para tomar un café y conocerse en persona.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Planes - Solo 2 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Elige tu <span className="text-sky-600">Plan</span>
            </h2>
            <p className="text-xl text-gray-600">
              Comienza gratis con todas las funciones esenciales
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plan Gratis */}
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Gratis</h3>
              <div className="text-5xl font-bold mb-2 text-gray-800">S/ 0</div>
              <p className="text-gray-500 mb-6">Para siempre</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Ver perfiles ilimitados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Mensajes ilimitados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Ver quién visitó tu perfil</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Buscar por ciudad, edad y más</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Crear tu perfil completo</span>
                </li>
              </ul>
              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 px-8 rounded-full transition-all">
                Comenzar Gratis
              </button>
            </div>

            {/* Plan Premium */}
            <div className="bg-gradient-to-br from-sky-50 to-emerald-50 rounded-2xl p-8 border-2 border-sky-500 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                  ⭐ Recomendado
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Premium</h3>
              <div className="text-5xl font-bold mb-2 text-sky-600">S/ 24.90</div>
              <p className="text-gray-500 mb-6">por mes</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Todo lo del plan Gratis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 font-semibold">Retiros y eventos católicos para solteros</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 font-semibold">Guías para relaciones desde la fe</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 font-semibold">Tu perfil aparece destacado</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Soporte prioritario</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-full transition-all">
                Elegir Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Historias de <span className="text-emerald-600">Amor y Fe</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic text-lg">
                "Después de años buscando a alguien que compartiera mi fe, encontré a María en Soulmate. 
                Hoy estamos comprometidos y planeando nuestra boda por la iglesia. ¡Gracias a Dios!"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                  alt="Juan Carlos"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-800">Juan Carlos</div>
                  <div className="text-sm text-gray-500">Lima, Perú</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic text-lg">
                "Lo que más me gustó es que todos aquí buscan algo serio. No hay juegos ni pérdida de tiempo. 
                Conocí a Pedro y desde el primer mensaje supe que era diferente."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" 
                  alt="Ana Rosa"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-800">Ana Rosa</div>
                  <div className="text-sm text-gray-500">Arequipa, Perú</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-sky-600 to-emerald-600 rounded-3xl p-12 text-white shadow-2xl">
            <Church className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tu Media Naranja te Está Esperando
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Únete a nuestra comunidad de católicos solteros que buscan un amor verdadero, 
              bendecido por Dios.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none"
              />
              <button type="submit" disabled={loading} className="bg-white text-sky-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all">
                {loading ? 'Enviando...' : 'Unirme Ahora'}
              </button>
            </form>
            {message && <p className="mt-4 text-sm">{message}</p>}
            <p className="mt-6 text-sm opacity-75">
              🔒 Tu información está segura y nunca la compartiremos
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-sky-400" fill="currentColor" />
            <span className="text-xl font-bold">Soulmate</span>
          </div>
          <p className="text-gray-400 mb-4">Conectando corazones católicos</p>
          <p className="text-gray-500 text-sm">© 2024 Soulmate. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  )
}
