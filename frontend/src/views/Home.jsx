import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Heart,
  Users,
} from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import Logo from "../assets/Logo.jpg";
import HeroVideo from "../assets/DOWN.MOV";
import Full from "../assets/DSCF2478.jpg";


export default function Home() {

  const stages = [
    {
  title: "Early Years",
  description:
    "A nurturing environment where curiosity, creativity, and confidence begin to grow.",
  image: Full,
},,
    {
      title: "Primary School",
      description:
        "Building strong foundations through inspiring lessons and meaningful experiences.",
      image:
        Full,
    },
    {
      title: "Secondary School",
      description:
        "Preparing students for future success through ambition and leadership.",
      image:
        Full,
    },
  ];


  const features = [
    {
      icon: <BookOpen size={42}/>,
      title: "Academic Excellence",
      text:
        "Encouraging curiosity, creativity and a lifelong love of learning.",
    },
    {
      icon: <Heart size={42}/>,
      title: "Pastoral Care",
      text:
        "Supporting every student with a caring and inclusive community.",
    },
    {
      icon: <Users size={42}/>,
      title: "Community Spirit",
      text:
        "Working together with families to help children thrive.",
    },
    {
      icon: <GraduationCap size={42}/>,
      title: "Future Ready",
      text:
        "Developing confidence, resilience and leadership skills.",
    },
  ];


  const news = [
    {
      title: "Annual Sports Festival",
      date: "15 July 2026",
      image:
        Full,
    },
    {
      title: "Science Exhibition",
      date: "10 July 2026",
      image:
        Full,
    },
    {
      title: "Music Celebration Evening",
      date: "4 July 2026",
      image:
        Full,
    },
  ];


  return (

    <div className="text-text">

      <Header />


      {/* HERO */}

<section
  className="
    relative
    h-screen
    overflow-hidden
  "
>


  {/* VIDEO BACKGROUND */}

  <video
    className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
    "
    src={HeroVideo}
    autoPlay
    loop
    muted
    playsInline
  />



  {/* OVERLAY */}

  <div
    className="
      absolute
      inset-0
      bg-primary/75
    "
  />



  {/* CONTENT */}

  <div
    className="
      relative
      z-10
      flex
      h-full
      items-center
    "
  >

    <div
      className="
        mx-auto
        max-w-7xl
        px-6
      "
    >


      <span
        className="
          rounded-full
          bg-highlight
          px-5
          py-2
          font-semibold
          text-primary
        "
      >
        Welcome To Our School
      </span>



      <h1
        className="
          mt-8
          max-w-4xl
          text-5xl
          font-bold
          text-white
          md:text-7xl
        "
      >

        Inspiring Young Minds,

        <span className="text-highlight">
          {" "}Every Day
        </span>

      </h1>




      <p
        className="
          mt-6
          max-w-2xl
          text-lg
          text-white/90
        "
      >
        A welcoming school community where every child is encouraged
        to discover their talents and achieve their potential.
      </p>




      <div
        className="
          mt-10
          flex
          gap-4
        "
      >


        <button
          className="
            rounded-xl
            bg-accent
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:bg-highlight
            hover:text-primary
          "
        >
          Arrange A Visit
        </button>



        <button
          className="
            rounded-xl
            border-2
            border-white
            px-8
            py-4
            font-semibold
            text-white
            hover:bg-white
            hover:text-primary
          "
        >
          Admissions
        </button>



      </div>


    </div>


  </div>


</section>



      {/* WELCOME */}


      <section className="mx-auto max-w-7xl px-6 py-24">


        <div className="grid gap-12 lg:grid-cols-2">


          <div>


            <p className="
              font-semibold
              uppercase
              tracking-widest
              text-accent
            ">
              Headteacher's Welcome
            </p>


            <h2 className="
              mt-4
              text-4xl
              font-bold
              text-primary
            ">
              A place where every child can flourish
            </h2>


            <p className="
              mt-6
              leading-8
              text-text/80
            ">
              We believe education is about developing confident,
              compassionate and curious individuals. Our dedicated staff
              provide outstanding learning opportunities in a supportive
              environment.
            </p>


            <button className="
              mt-8
              flex
              items-center
              gap-2
              font-semibold
              text-accent
            ">
              Learn More
              <ArrowRight size={18}/>
            </button>


          </div>



        <img
  src={Logo}
  alt="Soton Chinese School Logo"
  className="
    rounded-3xl
    shadow-xl
    object-contain
  "
/>


        </div>


      </section>




      {/* SCHOOL STAGES */}


      <section className="bg-secondary/30 py-24">


        <div className="mx-auto max-w-7xl px-6">


          <h2 className="
            text-center
            text-4xl
            font-bold
            text-primary
          ">
            Our School Stages
          </h2>



          <div className="
            mt-12
            grid
            gap-8
            md:grid-cols-3
          ">


            {stages.map(stage => (

              <div
                key={stage.title}
                className="
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  shadow-lg
                  transition
                  hover:-translate-y-2
                "
              >

                <img
                  src={stage.image}
                  className="h-60 w-full object-cover"
                />


                <div className="p-8">


                  <h3 className="
                    text-2xl
                    font-bold
                    text-primary
                  ">
                    {stage.title}
                  </h3>


                  <p className="
                    mt-4
                    text-text/70
                  ">
                    {stage.description}
                  </p>


                  <button className="
                    mt-6
                    font-semibold
                    text-accent
                  ">
                    Discover More →
                  </button>


                </div>


              </div>

            ))}


          </div>


        </div>


      </section>





      {/* FEATURES */}


      <section className="py-24">


        <div className="mx-auto max-w-7xl px-6">


          <h2 className="
            text-center
            text-4xl
            font-bold
            text-primary
          ">
            Why Choose Us
          </h2>


          <div className="
            mt-12
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-4
          ">


            {features.map(item => (

              <div
                key={item.title}
                className="
                  rounded-3xl
                  border
                  p-8
                  text-center
                  transition
                  hover:border-accent
                  hover:shadow-xl
                "
              >

                <div className="
                  flex
                  justify-center
                  text-accent
                ">
                  {item.icon}
                </div>


                <h3 className="
                  mt-5
                  text-xl
                  font-bold
                  text-primary
                ">
                  {item.title}
                </h3>


                <p className="
                  mt-4
                  text-text/70
                ">
                  {item.text}
                </p>


              </div>

            ))}


          </div>


        </div>


      </section>





      {/* STATISTICS */}


      <section className="
        bg-primary
        py-20
        text-white
      ">


        <div className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-2
          gap-10
          px-6
          text-center
          md:grid-cols-4
        ">


          {[
            ["650+", "Students"],
            ["98%", "Success Rate"],
            ["45+", "Activities"],
            ["75", "Years"],
          ].map(stat => (

            <div key={stat[1]}>

              <h3 className="
                text-5xl
                font-bold
                text-highlight
              ">
                {stat[0]}
              </h3>

              <p className="mt-2">
                {stat[1]}
              </p>

            </div>

          ))}


        </div>


      </section>




      {/* NEWS */}


      <section className="py-24">


        <div className="mx-auto max-w-7xl px-6">


          <h2 className="
            text-center
            text-4xl
            font-bold
            text-primary
          ">
            Latest News
          </h2>


          <div className="
            mt-12
            grid
            gap-8
            md:grid-cols-3
          ">


          {news.map(item => (

            <article
              key={item.title}
              className="
                overflow-hidden
                rounded-3xl
                shadow-lg
              "
            >

              <img
                src={item.image}
                className="
                  h-60
                  w-full
                  object-cover
                "
              />


              <div className="p-8">

                <p className="text-accent font-semibold">
                  {item.date}
                </p>

                <h3 className="
                  mt-3
                  text-2xl
                  font-bold
                  text-primary
                ">
                  {item.title}
                </h3>


              </div>


            </article>

          ))}


          </div>


        </div>


      </section>

      {/* CTA */}


      <section className="
        bg-accent
        py-24
        text-center
        text-white
      ">


        <h2 className="
          text-5xl
          font-bold
        ">
          Start Your Journey With Us
        </h2>


        <button className="
          mt-10
          rounded-xl
          bg-highlight
          px-10
          py-4
          font-bold
          text-primary
          transition
          hover:scale-105
        ">
          Contact Admissions
        </button>


      </section>
        <Footer />

    </div>

  );
}