"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { X, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { AnimatedHeading } from "@/components/AnimatedHeading"
import { FancyText } from "@/components/FancyText"
import { portfolioServices, type PortfolioService } from "@/data/portfolio-data"

const PREFETCH_INITIAL_COUNT = 6
const MIN_LOADER_DURATION = 800 // ms

// Lazy Image Component with Intersection Observer
const LazyImage = ({
  src,
  fallbackSrc,
  alt,
  style,
  onLoad,
  onError,
  ...props
}: {
  src: string
  fallbackSrc?: string
  alt: string
  style?: React.CSSProperties
  onLoad?: () => void
  onError?: () => void
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [currentSrc, setCurrentSrc] = useState<string | null>(null)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = imgRef.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: "50px" }
    )

    observer.observe(currentRef)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (isInView) {
      setCurrentSrc(src)
    }
  }, [isInView, src])

  const handleLoad = () => {
    setIsLoaded(true)
    if (onLoad) onLoad()
  }

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
      return
    }
    if (onError) onError()
  }

  return (
    <div ref={imgRef} style={style}>
      {isInView && currentSrc && (
        <Image
          src={currentSrc}
          alt={alt}
          width={1200}
          height={1200}
          className="w-full h-full object-contain"
          style={{
            opacity: isLoaded ? 1 : 0.7,
            transition: "opacity 0.3s ease-in-out",
          }}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          unoptimized
        />
      )}
    </div>
  )
}

// Lazy Video Component with Intersection Observer
const LazyVideo = ({
  src,
  fallbackSrc,
  style,
  onLoadedData,
  onError,
  ...props
}: {
  src: string
  fallbackSrc?: string
  style?: React.CSSProperties
  onLoadedData?: () => void
  onError?: () => void
} & React.VideoHTMLAttributes<HTMLVideoElement>) => {
  const [isInView, setIsInView] = useState(false)
  const [currentSrc, setCurrentSrc] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const currentRef = videoRef.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: "50px" }
    )

    observer.observe(currentRef)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (isInView) {
      setCurrentSrc(src)
    }
  }, [isInView, src])

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
      return
    }
    if (onError) onError()
  }

  return (
    <video
      ref={videoRef}
      src={isInView ? currentSrc || undefined : undefined}
      style={style}
      preload="metadata"
      onLoadedData={onLoadedData}
      onError={handleError}
      {...props}
    />
  )
}

interface PortfolioModalProps {
  isOpen: boolean
  onClose: () => void
  service: PortfolioService | null
}

const PortfolioModal = ({ isOpen, onClose, service }: PortfolioModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showMockup, setShowMockup] = useState(false)

  useEffect(() => {
    if (service && isOpen) {
      setShowMockup(false)
    }
  }, [service, currentImageIndex, isOpen])

  if (!isOpen || !service) {
    return null
  }

  const samples = service.samples
  const sampleCount = samples.length || 1
  const currentSample = samples[currentImageIndex] ?? samples[0]
  
  if (!currentSample) {
    return null
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % sampleCount)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + sampleCount) % sampleCount)
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10000,
          padding: "1rem",
        }}
        onClick={handleBackdropClick}
      >
        <div
          className="portfolio-modal"
          style={{
            background: "rgba(30,30,40,0.95)",
            borderRadius: 16,
            padding: "2rem",
            maxWidth: 900,
            width: "90%",
            maxHeight: "80vh",
            overflow: "auto",
            border: "1px solid rgba(162,89,247,0.2)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
            position: "relative",
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "none",
              border: "none",
              color: "#a7a7a7",
              cursor: "pointer",
              padding: 8,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s",
            }}
          >
            <X size={24} />
          </button>

          <div
            style={{
              marginBottom: 40,
              borderBottom: "1px solid rgba(162,89,247,0.2)",
              paddingBottom: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 16,
              }}
            >
              <div style={{ flex: 1 }}>
                <h2
                  style={{
                    color: "#a259f7",
                    fontSize: "2.2rem",
                    fontWeight: 700,
                    margin: "0 0 12px 0",
                    lineHeight: 1.2,
                  }}
                >
                  {service.service}
                </h2>
                <p
                  style={{
                    color: "#bdbdbd",
                    fontSize: "1.1rem",
                    margin: 0,
                    lineHeight: 1.5,
                    maxWidth: "600px",
                  }}
                >
                  {service.description}
                </p>
              </div>
              <div
                style={{
                  background: "rgba(76,175,80,0.1)",
                  border: "1px solid rgba(76,175,80,0.2)",
                  borderRadius: 8,
                  padding: "12px 16px",
                  marginLeft: 24,
                  marginTop: 40,
                  minWidth: "200px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "fit-content",
                }}
              >
                <span
                  style={{
                    color: "#4CAF50",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    lineHeight: 1.3,
                  }}
                >
                  {service.results.split(", ").map((part, index) => (
                    <div
                      key={index}
                      style={{
                        marginBottom:
                          index < service.results.split(", ").length - 1
                            ? "4px"
                            : 0,
                      }}
                    >
                      {part}
                    </div>
                  ))}
                </span>
              </div>
            </div>
          </div>

          <div style={{ position: "relative", marginBottom: 24 }}>
            <div
              style={{
                width: "100%",
                maxHeight: "min(70vh, 520px)",
                borderRadius: 12,
                overflow: "hidden",
                position: "relative",
                background: "#111",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {currentSample.mediaType === "video" ? (
                <LazyVideo
                  src={currentSample.img}
                  fallbackSrc={currentSample.fallbackImg}
                  style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "min(70vh, 520px)",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <LazyImage
                  src={currentSample.img}
                  fallbackSrc={currentSample.fallbackImg}
                  alt={currentSample.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "min(70vh, 520px)",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              )}

              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                style={{
                  position: "absolute",
                  left: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.7)",
                  border: "none",
                  color: "white",
                  padding: 12,
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                }}
              >
                <ArrowLeft size={20} />
              </button>

              <button
                onClick={nextImage}
                style={{
                  position: "absolute",
                  right: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.7)",
                  border: "none",
                  color: "white",
                  padding: 12,
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                }}
              >
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Image counter */}
            <div
              style={{
                position: "absolute",
                bottom: 16,
                right: 16,
                background: "rgba(0,0,0,0.8)",
                color: "white",
                padding: "8px 12px",
                borderRadius: 20,
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            >
              {currentImageIndex + 1} / {service.samples.length}
            </div>
          </div>

          <div
            style={{
              background: "rgba(30,30,40,0.6)",
              borderRadius: 12,
              padding: "20px 24px",
              marginBottom: 24,
              border: "1px solid rgba(162,89,247,0.1)",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "#e7e7e7",
                fontSize: "1.3rem",
                fontWeight: 700,
                marginBottom: 8,
                textAlign: "center",
              }}
            >
              {currentSample.title}
            </h3>
            <p
              style={{
                color: "#bdbdbd",
                fontSize: "1rem",
                lineHeight: 1.6,
                textAlign: "center",
                margin: 0,
              }}
            >
              {currentSample.description}
            </p>
            {currentSample.mockup && (
              <div
                style={{
                  marginTop: 16,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={() => setShowMockup(true)}
                  style={{
                    background: "linear-gradient(90deg,#7f42a7,#a259f7)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 999,
                    padding: "0.65rem 1.5rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: "0 6px 18px rgba(162,89,247,0.35)",
                  }}
                >
                  Interactive Preview
                </button>
                <button
                  onClick={() =>
                    window.open(currentSample.mockup, "_blank", "noopener,noreferrer")
                  }
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "#e7e7e7",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: 999,
                    padding: "0.65rem 1.5rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Open in New Tab
                </button>
              </div>
            )}
          </div>

          {/* Thumbnail navigation */}
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "flex-start",
              marginTop: 24,
              flexWrap: "wrap",
              padding: "16px 0",
              borderTop: "1px solid rgba(162,89,247,0.1)",
            }}
          >
            {service.samples.map((sample, index) => {
              const isVideo = sample.mediaType === "video"
              return (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 8,
                    overflow: "hidden",
                    border:
                      currentImageIndex === index
                        ? "2px solid #a259f7"
                        : "2px solid transparent",
                    cursor: "pointer",
                    background: "none",
                    padding: 0,
                    position: "relative",
                  }}
                >
                  {isVideo ? (
                    <LazyVideo
                      src={sample.img}
                      fallbackSrc={sample.fallbackImg}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      muted
                      playsInline
                    />
                  ) : (
                    <LazyImage
                      src={sample.img}
                      fallbackSrc={sample.fallbackImg}
                      alt={sample.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  )}

                  {/* Video indicator for thumbnails */}
                  {isVideo && (
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        background: "rgba(162,89,247,0.8)",
                        borderRadius: "50%",
                        width: 20,
                        height: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pointerEvents: "none",
                      }}
                    >
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: "6px solid white",
                          borderTop: "4px solid transparent",
                          borderBottom: "4px solid transparent",
                          marginLeft: 1,
                        }}
                      />
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>
      {currentSample.mockup && showMockup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 20000,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "4rem 2rem 2rem",
          }}
        >
          <div
            style={{
              background: "#05050b",
              borderRadius: 16,
              border: "1px solid rgba(162,89,247,0.3)",
              width: "100%",
              maxWidth: "1100px",
              height: "90vh",
              position: "relative",
              boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button
              onClick={() => setShowMockup(false)}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "rgba(255,255,255,0.08)",
                border: "none",
                borderRadius: 999,
                color: "#fff",
                padding: "0.4rem 0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              Close
            </button>
            <iframe
              title={currentSample.title}
              src={currentSample.mockup}
              style={{
                flex: 1,
                border: "none",
                borderRadius: "inherit",
                marginTop: "2.25rem",
                background: "#fff",
              }}
              sandbox="allow-same-origin allow-scripts allow-forms allow-pointer-lock allow-popups"
            />
          </div>
        </div>
      )}
    </>
  )
}

interface ServiceCardProps {
  service: PortfolioService
  onOpenModal: (service: PortfolioService) => void
}

const ServiceCard = ({ service, onOpenModal }: ServiceCardProps) => {
  const [hovered, setHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Get the first sample as thumbnail
  const thumbnail = service.samples[0]
  const isVideo = thumbnail.mediaType === "video"

  return (
    <div
      className="portfolio-item"
      tabIndex={0}
      style={{
        background: hovered
          ? "rgba(30,30,30,0.85)"
          : "rgba(30,30,30,0.65)",
        border: "2px solid rgba(127,66,167,0.18)",
        boxShadow: hovered
          ? "0 12px 40px 0 rgba(0,0,0,0.4)"
          : "0 8px 32px 0 rgba(80,80,120,0.18)",
        borderRadius: 18,
        overflow: "hidden",
        transition: "all 0.3s ease",
        cursor: "pointer",
        minHeight: 320,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        transform: hovered ? "scale(1.02)" : "scale(1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={() => onOpenModal(service)}
    >
      <div
        style={{
          width: "100%",
          height: 220,
          overflow: "hidden",
          background: "#111",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {isVideo ? (
          <LazyVideo
            src={thumbnail.img}
            fallbackSrc={thumbnail.fallbackImg}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              filter: hovered ? "none" : "grayscale(1)",
              transition: "all 0.5s",
              borderRadius: 0,
            }}
            muted
            loop
            playsInline
            onLoadedData={() => setImageLoaded(true)}
          />
        ) : (
          <LazyImage
            src={thumbnail.img}
            fallbackSrc={thumbnail.fallbackImg}
            alt={service.service}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              filter: hovered ? "none" : "grayscale(1)",
              transition: "all 0.5s",
              borderRadius: 0,
              display: "block",
              opacity: imageLoaded ? 1 : 0.7,
            }}
            onLoad={() => setImageLoaded(true)}
          />
        )}

        {/* Video play indicator */}
        {isVideo && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "rgba(162,89,247,0.8)",
              borderRadius: "50%",
              width: 60,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              transition: "opacity 0.3s",
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "20px solid white",
                borderTop: "12px solid transparent",
                borderBottom: "12px solid transparent",
                marginLeft: 4,
              }}
            />
          </div>
        )}

        {/* Image count indicator */}
        {service.samples.length > 1 && (
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              background: "rgba(0,0,0,0.8)",
              color: "white",
              padding: "4px 8px",
              borderRadius: 12,
              fontSize: "0.8rem",
              fontWeight: 600,
            }}
          >
            +{service.samples.length - 1} more
          </div>
        )}
      </div>
      <div
        style={{
          padding: "24px 24px 16px 24px",
          flex: 1,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: 120,
        }}
      >
        <h3
          style={{
            fontWeight: 700,
            fontSize: 22,
            color: "var(--color-text-primary, hsl(var(--foreground)))",
            marginBottom: 8,
          }}
        >
          <FancyText text={service.service} />
        </h3>
        <p
          style={{
            color: "var(--color-text-secondary, hsl(var(--muted-foreground)))",
            fontSize: 15,
          }}
        >
          {service.results}
        </p>
      </div>
    </div>
  )
}

export function PortfolioPage() {
  const [selectedService, setSelectedService] = useState<PortfolioService | null>(
    null
  )
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showLoader, setShowLoader] = useState(true)
  const [prefetchProgress, setPrefetchProgress] = useState(0)

  const allSamples = useMemo(
    () => portfolioServices.flatMap((service) => service.samples),
    []
  )
  const initialPrefetchSamples = useMemo(
    () => allSamples.slice(0, PREFETCH_INITIAL_COUNT),
    [allSamples]
  )

  useEffect(() => {
    if (!initialPrefetchSamples.length) {
      setShowLoader(false)
      return
    }

    let isMounted = true
    const startTime = performance.now()

    // Simulate prefetching
    const timer = setTimeout(() => {
      if (isMounted) {
        setPrefetchProgress(100)
        const elapsed = performance.now() - startTime
        const wait = Math.max(MIN_LOADER_DURATION - elapsed, 0)
        setTimeout(() => {
          if (isMounted) {
            setShowLoader(false)
          }
        }, wait)
      }
    }, 300)

    return () => {
      isMounted = false
      clearTimeout(timer)
    }
  }, [initialPrefetchSamples])

  const handleOpenModal = (service: PortfolioService) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  const loaderProgress = initialPrefetchSamples.length
    ? Math.min(
        Math.round((prefetchProgress / initialPrefetchSamples.length) * 100),
        100
      )
    : 100

  return (
    <div
      style={{
        minHeight: "100vh",
        color: "var(--color-text-primary, hsl(var(--foreground)))",
        padding: "0 0 3rem 0",
        marginTop: "-5rem",
        fontFamily: "inherit",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1rem",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        {showLoader && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(5,5,12,0.92)",
              zIndex: 999,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              paddingTop: "5rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              style={{
                background: "rgba(20,20,30,0.9)",
                border: "1px solid rgba(162,89,247,0.25)",
                borderRadius: 24,
                padding: "2rem",
                width: "100%",
                maxWidth: 420,
                textAlign: "center",
                boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
              }}
            >
              <p
                style={{
                  color: "#a259f7",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  fontSize: "0.85rem",
                  marginBottom: "1rem",
                }}
              >
                Preparing Portfolio
              </p>
              <h3
                style={{
                  margin: 0,
                  color: "#fff",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                }}
              >
                Loading showcase…
              </h3>
              <p
                style={{
                  color: "#a7a7a7",
                  margin: "0.75rem 0 1.5rem",
                }}
              >
                High-resolution images & reels are warming up in the background.
              </p>
              <div
                style={{
                  width: "100%",
                  height: 8,
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: 999,
                  overflow: "hidden",
                  marginBottom: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: `${loaderProgress}%`,
                    height: "100%",
                    background: "linear-gradient(90deg,#7f42a7,#a259f7)",
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
              <span
                style={{
                  color: "#e7e7e7",
                  fontSize: "0.9rem",
                  letterSpacing: "0.02em",
                }}
              >
                {loaderProgress}%
              </span>
            </div>
          </div>
        )}
        <AnimatedHeading text="Our Portfolio" />
        <p
          style={{
            fontSize: "1.15rem",
            color: "var(--color-text-secondary, hsl(var(--muted-foreground)))",
            textAlign: "center",
            marginBottom: "3rem",
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Explore our work across all services. Click on any service to view
          sample projects and designs.
        </p>

        <div
          className="portfolio-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(20px, 4vw, 32px)",
            marginBottom: 64,
            padding: "0 1rem",
          }}
        >
          {portfolioServices.map((service, idx) => (
            <ServiceCard
              key={idx}
              service={service}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <p
            style={{
              color: "var(--color-text-secondary, hsl(var(--muted-foreground)))",
              fontSize: "1.08rem",
            }}
          >
            Want to see more?{" "}
            <a
              href="/contact"
              style={{
                color: "var(--color-primary, hsl(var(--primary)))",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              Contact us
            </a>{" "}
            for a full portfolio or to discuss your project!
          </p>
        </div>
      </div>

      <PortfolioModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </div>
  )
}
