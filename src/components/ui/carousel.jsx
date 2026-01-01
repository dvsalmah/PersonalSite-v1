import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

const Carousel = React.forwardRef(({ children, className, ...props }, ref) => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  return (
    <CarouselContext.Provider value={{ emblaApi }}>
      <div ref={ref} className={`relative ${className}`} {...props}>
        <div ref={emblaRef} className="overflow-hidden">
          {children}
        </div>
      </div>
    </CarouselContext.Provider>
  )
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`flex ${className}`} {...props} />
))
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`min-w-0 shrink-0 grow-0 basis-full ${className}`} {...props} />
))
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef(({ className, ...props }, ref) => {
  const { emblaApi } = useCarousel()
  return (
    <button
      ref={ref}
      className={`absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white ${className}`}
      onClick={() => emblaApi?.scrollPrev()}
      {...props}
    >
      ←
    </button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef(({ className, ...props }, ref) => {
  const { emblaApi } = useCarousel()
  return (
    <button
      ref={ref}
      className={`absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white ${className}`}
      onClick={() => emblaApi?.scrollNext()}
      {...props}
    >
      →
    </button>
  )
})
CarouselNext.displayName = "CarouselNext"

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }
