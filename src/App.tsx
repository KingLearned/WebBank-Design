import { useEffect, useState } from "react";
import styles from "./styles";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components/Exports";




function App() {
    
    return(
        <div className="app bg-primary overflow-x-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Business />
                    <Billing />
                    <CardDeal />
                    <Testimonials />
                    <Clients />
                    <CTA />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;