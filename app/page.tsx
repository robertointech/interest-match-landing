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
          <a href="#waitlist" className="btn-primary text-sm py-2 px-6">Join Waitlist</a>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Find Love Through
                <span className="gradient-text"> Shared Passions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Dating reimagined. Connect with people who share your interests, values, and vision for life.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-primary-400 focus:outline-none text-lg"
                />
                <button type="submit" disabled={loading} className="btn-primary whitespace-nowrap">
                  {loading ? 'Joining...' : 'Get Early Access'}
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
              Simple <span className="gradient-text">Pricing</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-4xl font-bold mb-4">$0</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>5 swipes per day</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Basic chat</span>
                </li>
              </ul>
              <button className="w-full btn-secondary">Join Waitlist</button>
            </div>

            <div className="card border-2 border-primary-500 transform scale-105">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <div className="text-4xl font-bold mb-4">$6.99<span className="text-lg">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span>Unlimited swipes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span>Advanced filters</span>
                </li>
              </ul>
              <button className="w-full btn-primary">Get Premium</button>
            </div>

            <div className="card border-2 border-purple-500">
              <h3 className="text-2xl font-bold mb-2">Elite</h3>
              <div className="text-4xl font-bold mb-4">$14.99<span className="text-lg">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="font-semibold">🎫 Exclusive events</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span>Premium content</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg">Get Elite</button>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Find Your Match?</h2>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none"
              />
              <button type="submit" disabled={loading} className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-full">
                {loading ? 'Joining...' : 'Join Waitlist'}
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
          <p className="text-gray-400">© 2024 Interest Match. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
