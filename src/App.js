import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";
import { Header } from "./components/Header";
import { ClientHistory } from "./components/ClientHistory";
import { AboutUs } from "./components/AboutUs";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { OurServices } from "./components/OurServices";
import { ContactUs } from "./components/ContactUs";
import { Testimonials } from "./components/Testimonials";
import { OurTeam } from "./components/OurTeam";
import { LatestBlog } from "./components/LatestBlog";
import { OurClient } from "./components/OurClient";
import { Footer } from "./components/Footer";
import { MOtionDemo } from "./components/MOtionDemo";

function App() {
  return (
    <>
      <Helmet>
        <link href="img/favicon.ico" rel="icon" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        <link
          href="lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link href="lib/animate/animate.min.css" rel="stylesheet" />

        <link href="css/bootstrap.min.css" rel="stylesheet" />

        <link href="css/style.css" rel="stylesheet" />
      </Helmet>
      <body>
        <div
          id="spinner"
          class="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div class="spinner"></div>
        </div>
        <Header/>
        <ClientHistory/>
        <AboutUs/>
        <WhyChooseUs/>
        <OurServices/>
        <ContactUs/>
        <Testimonials/>
        <OurTeam/>
        <LatestBlog/>
        <OurClient/>
        <Footer/>
        
      </body>
      
      <Helmet>
        
      </Helmet>
    </>
  );
}

export default App;
