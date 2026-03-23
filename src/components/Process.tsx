import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    title: "Предпосылки",
    description:
      "Формирование идеологических концепций всегда было ответом на внутренние кризисы или внешние вызовы. Государство искало смысловую основу для консолидации общества.",
  },
  {
    number: "02",
    title: "Институционализация",
    description:
      "Идеология закреплялась через церковь, школу, армию и государственный аппарат. Создавались механизмы трансляции и воспроизводства официального мировоззрения.",
  },
  {
    number: "03",
    title: "Кризис и трансформация",
    description:
      "Каждая идеологическая система переживала внутренние противоречия. Разрыв между декларируемыми ценностями и реальностью становился источником социального напряжения.",
  },
  {
    number: "04",
    title: "Преемственность",
    description:
      "Несмотря на революционные разрывы, в российской идеологии прослеживается устойчивая преемственность: патернализм, державность и особая роль государства.",
  },
]

export function Process() {
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
    <section ref={sectionRef} id="process" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Sticky Header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p
                className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Закономерности
              </p>
              <h2
                className={`font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Логика
                <span className="italic"> цикла</span>
              </h2>
              <p
                className={`text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                История государственных идеологий в России подчиняется повторяющейся логике: рождение, расцвет,
                внутреннее противоречие и замена новым проектом.
              </p>
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`group py-10 lg:py-14 border-t border-border last:border-b transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="flex gap-8 lg:gap-12">
                    <span className="font-serif text-4xl lg:text-5xl text-stone/50 group-hover:text-sage transition-colors duration-500">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed max-w-xl">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
