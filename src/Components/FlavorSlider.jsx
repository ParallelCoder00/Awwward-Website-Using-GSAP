import React, { useRef } from 'react'
import { flavorlists } from '../Constants'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

const FlavorSlider = () => {

  const sliderRef = useRef()

  useGSAP(() => {
    const section = document.querySelector(".flavor-section")
    const getScrollAmount = () => {
      const sectionX = Number(gsap.getProperty(section, "x")) || 0
      const sliderLeft = sliderRef.current.getBoundingClientRect().left - sectionX

      return Math.max(0, sliderRef.current.scrollWidth + sliderLeft - window.innerWidth)
    }

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:".flavor-section",
        start:"2% top",
        // A minimum duration keeps the following section from arriving before
        // the horizontal animation has had time to complete.
        end: () => `+=${Math.max(getScrollAmount(), 1800)}px`,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
      }
    })

    tl.to(".flavor-section" , {
      x: () => -getScrollAmount(),
      ease: "power1.inOut"
    })

    const titleTl = gsap.timeline({
      scrollTrigger:{
        trigger:".flavor-section",
        start:"top top",
        end:"bottom 80%",
        scrub: true,
      }
    })

    titleTl.to(".first-text-split",{
      xPercent:-30,
      ease:"power1.inOut",
    }).to(".flavor-text-scroll",{
      xPercent:-22,
      ease:"power1.inOut",
    },"<").to(".second-text-split",{
      xPercent:-10,
      ease:"power1.inOut",
    },"<")
  })

  return (
    <div ref={sliderRef} className='slider-wrapper'>
      <div className='flavors'>
          {
            flavorlists.map((flavor) => (
              <div key={flavor.name} className={`relative z-30 lg:w-[50vh] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50] h-80 flex-none ${flavor.rotation}`}>
                <img src={`public/images/${flavor.color}-bg.svg`} alt="" className='absolute bottom-0 left-1/2 w-[150%] max-w-none -translate-x-1/2' />

                <img src={`public/images/${flavor.color}-drink.webp`} alt="" className='drinks'/>

                <img src={`public/images/${flavor.color}-elements.webp`} alt="" className='elements' />

                <h1>{flavor.name}</h1>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default FlavorSlider
