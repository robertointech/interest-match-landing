'use client'

import { useState } from 'react'
import { Heart, CheckCircle } from 'lucide-react'
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
      setMessage('✅ ¡Genial! Te avisaremos cuando estemos listos.')
      setEmail('')
    } catch (error: any) {
      if (error.message.includes('already on the waitlist')) {
        setMessage('📧 Este email ya está en la lista de espera.')
      } else {
        setMessage('❌ Hubo un error. Por favor intenta de nuevo.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-primary-500" fill="currentColor" />
            <span className="text-2xl font-bold gradient-text">Interest Match</span>
          </div>
          <a href="#waitlist" className="btn-primary text-sm py-2 px-6">Únete a la Lista</a>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Encuentra el Amor a Través de
                <span className="gradient-text"> Pasiones Compartidas</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Citas reinventadas. Conecta con personas que comparten tus intereses, valores y visión de vida.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingresa tu email"
                  required
                  className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-primary-400 focus:outline-none text-lg"
                />
                <button type="submit" disabled={loading} className="btn-primary whitespace-nowrap">
                  {loading ? 'Enviando...' : 'Acceso Anticipado'}
                </button>
              </form>
              {message && <p className="text-center sm:text-left text-sm mt-2">{message}</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Precios <span className="gradient-text">Simples</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Gratis</h3>
              <div className="text-4xl font-bold mb-4">S/ 0</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>5 swipes por día</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Chat básico</span>
                </li>
              </ul>
              <button className="w-full btn-secondary">Únete Gratis</button>
            </div>

            <div className="card border-2 border-primary-500 transform scale-105">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <div className="text-4xl font-bold mb-4">S/ 24.90<span className="text-lg">/mes</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span>Swipes ilimitados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span>Filtros avanzados</span>
                </li>
              </ul>
              <button className="w-full btn-primary">Obtener Premium</button>
            </div>

            <div className="card border-2 border-purple-500">
              <h3 className="text-2xl font-bold mb-2">Elite</h3>
              <div className="text-4xl font-bold mb-4">S/ 54.90<span className="text-lg">/mes</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="font-semibold">🎫 Eventos exclusivos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span>Contenido premium</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg">Obtener Elite</button>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para Encontrar tu Match?</h2>
            <p className="text-xl mb-8 opacity-90">Únete a la lista de espera y sé de los primeros en probar la app.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu email"
                required
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none"
              />
              <button type="submit" disabled={loading} className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-full">
                {loading ? 'Enviando...' : 'Unirme a la Lista'}
              </button>
            </form>
            {message && <p className="mt-4 text-sm">{message}</p>}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-primary-500" fill="currentColor" />
            <span className="text-xl font-bold">Interest Match</span>
          </div>
          <p className="text-gray-400">© 2024 Interest Match. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  )
}
