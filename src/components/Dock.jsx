import { dockApps } from "#constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import { gsap } from "gsap";




const Dock = () => {

    const dockRef = useRef(null);

    useGSAP(() => {
        const dock = dockRef.current;
        if(!dock) return;

        const icons = dock.querySelectorAll('.dock-icon');

        const animateIcon = (mouseX) => {
            const { left } = dock.getBoundingClientRect();

            icons.forEach((icon) => {
                const { left : iconLeft, width : iconWidth } = icon.getBoundingClientRect();
                const center = iconLeft - left + iconWidth / 2;
                const distance = Math.abs(mouseX - center);
                const intensity = Math.exp(-(distance ** 2.7) / 20000);

                gsap.to(icon, {
                    scale : 1 + 0.25 * intensity,
                    y : -15 * intensity,
                    duration : 0.2,
                    ease : "power1.out",
                });
            });
        };

        const handleMouseMove = (event) => {
            const { left } = dock.getBoundingClientRect();
            animateIcon(event.clientX - left);
        };

        const resetIcons = () => {
            icons.forEach((icon) => {
                gsap.to(icon, {
                    scale : 1,
                    y : 0,
                    duration : 0.3,
                    ease : "power1.out",
                })
            });
        };

        dock.addEventListener('mousemove', handleMouseMove);
        dock.addEventListener('mouseleave', resetIcons);

        return () => {
            dock.removeEventListener('mousemove', handleMouseMove);
            dock.removeEventListener('mouseleave', resetIcons);
        };

    }, []);

    const toggleApp = (app) => {}


    return (
       <section id="dock" >
        <div ref={dockRef} className="dock-container">
            {
                dockApps.map(({id, name, icon, canOpen}) => (
                    <div key={id} className="relative flex justify-center">
                        <button 
                            type="button"
                            aria-label={name}
                            className="dock-icon"
                            data-tooltip-id="dock-tooltip"
                            data-tooltip-content={name}
                            data-tooltip-delay-show={500}
                            disabled={!canOpen}
                            onClick={() => toggleApp({id, canOpen})}
                        >
                            <img 
                                src={`/images/${icon}`}
                                alt={name}
                                loading="lazy"
                                className={canOpen ? "" : "opacity-60"}
                            />
                        </button>
                    </div>
                ))
            };

            <Tooltip 
                id="dock-tooltip"
                place="top"
                className="tooltip"
            />
        </div>
       </section>
    )
}

export default Dock;