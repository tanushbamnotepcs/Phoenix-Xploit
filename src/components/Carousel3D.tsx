import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../css/carousel.css"
import { Card, CardContent } from "./ui/card"

interface SliderOptions {
  track: {
    details: {
      progress: number
      abs: number
      rel: number
    }
  }
  container: HTMLElement
  slides: HTMLElement[]
  on: (name: string, callback: (...args: unknown[]) => void) => void
}

const carousel = (slider: SliderOptions) => {
  const z = 400 // Increased depth
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element: HTMLElement, idx: number) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  
  slider.on("detailsChanged", rotate)
}

interface CardData {
  title: string
  content: string
}

const cardsData: CardData[] = [
  {
    title: "Android Exploitation",
    content: "Android security is a critical aspect of mobile application development and penetration testing. With a large user base and open-source nature, Android is a popular target for attackers."
  },
  {
    title: "iOS Security",
    content: "iOS platforms are known for their security features. This section explores the unique challenges and approaches to securing applications on Apple's mobile operating system."
  },
  {
    title: "Web App Security",
    content: "Web applications face numerous threats. Understanding common vulnerabilities like XSS, CSRF, and SQL injection is essential for building secure web applications."
  },
  {
    title: "Network Security",
    content: "Network infrastructure requires robust security measures. This overview covers essential concepts in securing networks against various attack vectors."
  },
  {
    title: "Cloud Security",
    content: "As organizations migrate to cloud platforms, understanding cloud security principles becomes increasingly important for protecting sensitive data and applications."
  },
  {
    title: "IoT Security",
    content: "Internet of Things devices present unique security challenges. This section examines approaches to securing interconnected smart devices and systems."
  }
]

export default function Carousel3D() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  
  const [sliderRef] = useKeenSlider({
    loop: true,
    selector: ".carousel__cell",
    renderMode: "custom",
    mode: "free-snap",
    slides: cardsData.length,
    slideChanged(s) {
      // Use the details to determine current slide
      setCurrentSlide(s.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  }, [carousel])

  return (
    <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          {cardsData.map((card, index) => (
            <div 
              key={index} 
              className={`carousel__cell number-slide${index + 1} ${loaded && index === currentSlide ? "active-slide" : ""}`}
            >
              <Card className="card-custom w-full h-full overflow-hidden">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="card-bg-wrapper h-full relative overflow-hidden">
                    {/* Blur background layer */}
                    <div className="blur-background"></div>
                    
                    {/* Background image */}
                    <div className={`absolute inset-0 rounded-[20px] overflow-hidden shadow-lg transition-opacity duration-700 bg-image z-[10]`}>
                      <div className="w-full h-full bg-cover bg-center" 
                           style={{ backgroundImage: "url('/images/1.png')" }}>
                      </div>
                    </div>
                    
                    {/* Circular overlay */}
                    <div className="absolute inset-0 z-[15] flex items-center justify-center">
                      <div className={`circle-overlay transition-all duration-500`}></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-[20] h-full flex flex-col items-center justify-center p-6 text-white">
                      <div className="text-content flex flex-col items-center">
                        <h3 className="font-extrabold text-center font-post-no-bills truncate max-w-full">
                          {card.title}
                        </h3>
                        <p className="text-center font-post-no-bills font-bold">
                          {card.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}