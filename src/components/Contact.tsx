import { useEffect, useRef, useState } from "react"

const sources = [
  { author: "Уваров С.С.", work: "Доклад Николаю I об основах народного просвещения, 1833" },
  { author: "Ключевский В.О.", work: "Курс русской истории" },
  { author: "Бердяев Н.А.", work: "Истоки и смысл русского коммунизма" },
  { author: "Пайпс Р.", work: "Россия при старом режиме" },
  { author: "Коржихина Т.П., Сенин А.С.", work: "История российской государственности" },
]

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Список источников
            </p>
            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Библиография
            </h2>
            <p
              className={`text-muted-foreground leading-relaxed mb-12 max-w-md transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Доклад основан на ключевых трудах отечественных и зарубежных исследователей
              истории российской государственности и политической мысли.
            </p>

            <div
              className={`space-y-6 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {sources.map((source, index) => (
                <div key={index} className="border-l-2 border-sage pl-4">
                  <p className="text-foreground font-medium">{source.author}</p>
                  <p className="text-muted-foreground text-sm mt-1">{source.work}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Conclusion */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">Выводы</p>
            <div className="space-y-8">
              <div className="bg-sand/50 p-8">
                <h3 className="font-serif text-2xl text-foreground mb-4">Преемственность форм</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Несмотря на революционные смены режимов, российская государственная идеология сохраняла
                  устойчивое ядро: мессианство, державность и приоритет государства над личностью.
                </p>
              </div>
              <div className="bg-sand/50 p-8">
                <h3 className="font-serif text-2xl text-foreground mb-4">Роль кризисов</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Каждый идеологический перелом был спровоцирован системным кризисом — военным, экономическим
                  или легитимационным. Идеология менялась как ответ на вызов, а не как результат органической эволюции.
                </p>
              </div>
              <div className="bg-sand/50 p-8">
                <h3 className="font-serif text-2xl text-foreground mb-4">Современный контекст</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Поиск национальной идентичности в современной России воспроизводит исторически знакомые паттерны:
                  апелляцию к особому пути, традиционным ценностям и исторической миссии государства.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
