'use client'
import { useEffect, useRef } from 'react'

const AnimatedText = () => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp')
        }
      },
      {
        threshold: 0.1
      }
    )

    const element = ref.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <div style={{ flex: 1, paddingRight: '20px' }}>
      <p className="text-2xl animate-fadeInUp text-left font-mono">
       A <b className="text-[#81B7FF]">IntegraTech</b> é uma equipe dedicada à tecnologia, formada
        durante o hackathon do Trilhas Inova. Nosso objetivo é mobilizar pessoas para as Estações
        Tech. Promovemos essas estações como espaços de inclusão digital e desenvolvimento.
        </p>
    </div>
  )
}

export default AnimatedText
