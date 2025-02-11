'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [_necessary, _setNecessary] = useState(true)
  const [preference, setPreference] = useState(true)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    // Implement your save logic here
    setShowDetails(false)
  }

  if (!isVisible) return null

  return (
    <section style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: '#fff',
      boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.08)',
      padding: '12px 0'
    }}>
      <div style={{ 
        maxWidth: 1392,
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
          flexDirection: showDetails ? 'column' : 'row'
        }}>
          <div style={{ flex: 1, maxWidth: 680, width: '100%' }}>
            <p style={{
              fontSize: 14,
              lineHeight: 1.3,
              color: '#444',
              margin: 0
            }}>
              Mechlabs uses cookies to offer you a better experience. See{' '}
              <Link 
                href="/privacy-terms" 
                style={{
                  color: '#2d2d2d',
                  textDecoration: 'underline',
                  fontWeight: 500
                }}
                target="_blank"
              >
                Cookie Notice
              </Link>{' '}
              for details.
            </p>
          </div>
          
          {!showDetails ? (
            <nav style={{
              display: 'flex',
              gap: 8,
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', gap: 8 }}>
                <div>
                  <button 
                    style={{
                      background: 'none',
                      border: '1px solid #ddd',
                      padding: '8px 16px',
                      borderRadius: 6,
                      fontSize: 14,
                      color: '#444',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    aria-label="More options"
                    type="button"
                    onClick={() => setShowDetails(true)}
                  >
                    More options
                  </button>
                </div>
                <div>
                  <button 
                    style={{
                      background: 'none',
                      border: '1px solid #ddd',
                      padding: '8px 16px',
                      borderRadius: 6,
                      fontSize: 14,
                      color: '#444',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    aria-label="Reject all cookies"
                    type="button"
                    onClick={handleReject}
                  >
                    Reject all
                  </button>
                </div>
              </div>
              
              <div>
                <button 
                  style={{
                    background: '#2d2d2d',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: 6,
                    fontSize: 14,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  aria-label="Accept all cookies"
                  type="button"
                  onClick={handleAccept}
                >
                  Accept all
                </button>
              </div>
            </nav>
          ) : (
            <>
              <div style={{ width: '100%', marginTop: 16 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {/* Necessary Cookies */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 4,
                    justifyContent: 'space-between',
                    width: '100%'
                  }}>
                    <label style={{ flex: 1, maxWidth: 'calc(100% - 50px)' }}>
                      <p style={{ fontWeight: 500, fontSize: 14, margin: 0 }}>Strictly necessary</p>
                      <p style={{ fontSize: 12, color: '#666', margin: '2px 0 0 0' }}>
                        Essential for the site to function. Always On.
                      </p>
                    </label>
                    <div style={{ 
                      flexShrink: 0,
                      marginLeft: 4
                    }}>
                      <button 
                        style={{
                          background: _necessary ? '#2d2d2d' : '#ddd',
                          width: 40,
                          height: 24,
                          borderRadius: 12,
                          border: 'none',
                          cursor: 'not-allowed',
                          opacity: 0.7
                        }}
                        disabled
                      >
                        <div style={{
                          background: '#fff',
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          transform: `translateX(${_necessary ? 16 : 2}px)`,
                          transition: 'all 0.2s ease'
                        }} />
                      </button>
                    </div>
                  </div>

                  {/* Preference Cookies */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 4,
                    justifyContent: 'space-between',
                    width: '100%'
                  }}>
                    <label style={{ flex: 1, maxWidth: 'calc(100% - 50px)' }}>
                      <p style={{ fontWeight: 500, fontSize: 14, margin: 0 }}>Functional</p>
                      <p style={{ fontSize: 12, color: '#666', margin: '2px 0 0 0' }}>
                        Used to remember preference selections and provide enhanced features.
                      </p>
                    </label>
                    <div style={{ 
                      flexShrink: 0,
                      marginLeft: 4
                    }}>
                      <button 
                        style={{
                          background: preference ? '#2d2d2d' : '#ddd',
                          width: 40,
                          height: 24,
                          borderRadius: 12,
                          border: 'none',
                          cursor: 'pointer'
                        }}
                        onClick={() => setPreference(!preference)}
                      >
                        <div style={{
                          background: '#fff',
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          transform: `translateX(${preference ? 16 : 2}px)`,
                          transition: 'all 0.2s ease'
                        }} />
                      </button>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 4,
                    justifyContent: 'space-between',
                    width: '100%'
                  }}>
                    <label style={{ flex: 1, maxWidth: 'calc(100% - 50px)' }}>
                      <p style={{ fontWeight: 500, fontSize: 14, margin: 0 }}>Analytics</p>
                      <p style={{ fontSize: 12, color: '#666', margin: '2px 0 0 0' }}>
                        Used to measure usage and improve your experience.
                      </p>
                    </label>
                    <div style={{ 
                      flexShrink: 0,
                      marginLeft: 4
                    }}>
                      <button 
                        style={{
                          background: analytics ? '#2d2d2d' : '#ddd',
                          width: 40,
                          height: 24,
                          borderRadius: 12,
                          border: 'none',
                          cursor: 'pointer'
                        }}
                        onClick={() => setAnalytics(!analytics)}
                      >
                        <div style={{
                          background: '#fff',
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          transform: `translateX(${analytics ? 16 : 2}px)`,
                          transition: 'all 0.2s ease'
                        }} />
                      </button>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 4,
                    justifyContent: 'space-between',
                    width: '100%'
                  }}>
                    <label style={{ flex: 1, maxWidth: 'calc(100% - 50px)' }}>
                      <p style={{ fontWeight: 500, fontSize: 14, margin: 0 }}>Marketing</p>
                      <p style={{ fontSize: 12, color: '#666', margin: '2px 0 0 0' }}>
                        Used for targeted advertising.
                      </p>
                    </label>
                    <div style={{ 
                      flexShrink: 0,
                      marginLeft: 4
                    }}>
                      <button 
                        style={{
                          background: marketing ? '#2d2d2d' : '#ddd',
                          width: 40,
                          height: 24,
                          borderRadius: 12,
                          border: 'none',
                          cursor: 'pointer'
                        }}
                        onClick={() => setMarketing(!marketing)}
                      >
                        <div style={{
                          background: '#fff',
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          transform: `translateX(${marketing ? 16 : 2}px)`,
                          transition: 'all 0.2s ease'
                        }} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <nav style={{ 
                width: '100%',
                marginTop: 16,
                display: 'flex',
                justifyContent: 'flex-end'
              }}>
                <button 
                  style={{
                    background: '#2d2d2d',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: 6,
                    fontSize: 14,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  aria-label="Done"
                  type="button"
                  onClick={handleSavePreferences}
                >
                  Done
                </button>
              </nav>
            </>
          )}
        </div>
      </div>
    </section>
  )
} 