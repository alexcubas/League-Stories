import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                teste
            </div>
            {/* <text>aaaaaaaaaaalo</text> */}
        </>
    );
}
export default App;
