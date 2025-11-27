import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

const FONT_WEIGHTS = {
    subtitle : {min : 100, max : 400, default : 100},
    title : {min : 400, max : 900, default : 100}
}

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, index) => (
        <span key={index} className={className} style={{fontVariationSettings : `'wght' ${baseWeight}`}}>
            {char === ' ' ? '\u00A0' : char}
        </span>
    ))
}

const setupTextHover = (container, type) => {
    if(!container) return;

    const letters = container.querySelectorAll('span');

    const {min, max, default : base} = FONT_WEIGHTS[type];

    const animateLetter = (letter, weight, duration=0.25) => {
        return gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`
        });
    }

    const handleMouseEnter = (event) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = event.clientX - left;

        letters.forEach((letter) => {
            const {left : l, width : w} = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 2000)

            animateLetter(letter, min + (max-min) * intensity);
        });
    };

    const handleMouseLeave = () => {
        letters.forEach((letter) => {
        animateLetter(letter, base, 0.3);
    })};

    container.addEventListener('mousemove', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        container.removeEventListener('mousemove', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);

    }
}



const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        const titleCleanUp = setupTextHover(titleRef.current, "title");
        const subTitleCleanUp = setupTextHover(subtitleRef.current, "subtitle");

        return () => {
            subTitleCleanUp(),
            titleCleanUp();
        }
    }, []);


    return (
        <section id="welcome" className="text-shadow-sky-200">
            <p ref={subtitleRef}>
                {
                    renderText("Hey, I'm Aditya! Welcome to my",
                        "text-3xl font-georama",
                        100
                    )
                }
            </p>

            <h1 ref={titleRef} className="mt-7">
                {
                    renderText("Portfolio", "text-9xl italic font-georama")
                }
            </h1>

            <div className="small-screen">
                <p> This portfolio is designed for desktop/tablet only. </p>
            </div>
        </section>
    )
}

export default Welcome;