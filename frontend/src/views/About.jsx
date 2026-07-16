import Header from "../components/header";
import Footer from "../components/footer";

export default function About() {

  return (

    <div className="min-h-screen bg-white text-text">


      <Header />



      {/* HERO SECTION */}

      <section className="
        bg-primary
        py-20
        px-6
        text-center
        text-white
      ">

        <h1 className="
          text-5xl
          font-bold
        ">
          About Southampton Chinese School
        </h1>


        <p className="
          mt-5
          mx-auto
          max-w-3xl
          text-lg
          text-white/80
        ">
        Providing Chinese language education and cultural learning 
        opportunities for children and families in Southampton and surrounding areas, including Portsmouth and Salisbury.

        </p>


      </section>





      {/* WHO WE ARE */}

      <section className="
        mx-auto
        max-w-6xl
        px-6
        py-20
      ">


        <div className="
          grid
          gap-12
          md:grid-cols-2
          items-center
        ">


          {/* TEXT */}

          <div>


            <p className="
              uppercase
              tracking-widest
              font-semibold
              text-accent
            ">
              Who We Are
            </p>



            <h2 className="
              mt-4
              text-4xl
              font-bold
              text-primary
            ">
              A place to learn Chinese and embrace culture
            </h2>



            <p className="
              mt-6
              leading-8
              text-text/70
            ">
              Southampton Chinese School is dedicated to providing
              high-quality Chinese language education for students of
              different ages and abilities.
            </p>



            <p className="
              mt-5
              leading-8
              text-text/70
            ">
              Through language learning, cultural activities, and a
              supportive learning environment, we encourage students to
              develop confidence, creativity, and a deeper understanding
              of Chinese culture.
            </p>


          </div>





          {/* IMAGE / CARD */}

          <div className="
            rounded-3xl
            bg-secondary/30
            p-10
          ">


            <h3 className="
              text-2xl
              font-bold
              text-primary
            ">
              Our Mission
            </h3>



            <p className="
              mt-5
              leading-8
              text-text/70
            ">
              To inspire students to enjoy learning Chinese, build strong
              language foundations, and connect with Chinese heritage and
              culture.
            </p>


          </div>



        </div>


      </section>





      {/* CLASSES */}

      <section className="
        bg-secondary/30
        py-20
      ">


        <div className="
          mx-auto
          max-w-6xl
          px-6
        ">


          <h2 className="
            text-center
            text-4xl
            font-bold
            text-primary
          ">
            Our Classes
          </h2>




          <div className="
            mt-12
            grid
            gap-8
            md:grid-cols-3
          ">



            <div className="
              rounded-3xl
              bg-white
              p-8
              shadow-lg
            ">

              <h3 className="
                text-2xl
                font-bold
                text-primary
              ">
                Chinese Class
              </h3>


              <p className="
                mt-4
                text-text/70
              ">
                Students learn Chinese through full Chinese instruction,
                developing listening, speaking, reading, and writing skills
                in an immersive environment.
              </p>


            </div>





            <div className="
              rounded-3xl
              bg-white
              p-8
              shadow-lg
            ">

              <h3 className="
                text-2xl
                font-bold
                text-primary
              ">
                Dual Language Class
              </h3>


              <p className="
                mt-4
                text-text/70
              ">
                Students learn Chinese with support from both Chinese and
                English, helping beginners build confidence while improving
                their language skills.
              </p>


            </div>





            <div className="
              rounded-3xl
              bg-white
              p-8
              shadow-lg
            ">

              <h3 className="
                text-2xl
                font-bold
                text-primary
              ">
                GCSE Chinese
              </h3>


              <p className="
                mt-4
                text-text/70
              ">
                Preparing students for GCSE Chinese examinations with
                structured lessons and exam-focused learning.
              </p>


            </div>



          </div>


        </div>


      </section>





      {/* STATS */}

      <section className="
        bg-primary
        py-16
        text-white
      ">


        <div className="
          mx-auto
          max-w-6xl
          px-6
          grid
          grid-cols-2
          md:grid-cols-4
          gap-8
          text-center
        ">


          <div>
            <h3 className="
              text-4xl
              font-bold
              text-highlight
            ">
              20+
            </h3>

            <p className="mt-2">
              Years Teaching
            </p>
          </div>




          <div>
            <h3 className="
              text-4xl
              font-bold
              text-highlight
            ">
              100+
            </h3>

            <p className="mt-2">
              Students
            </p>
          </div>




          <div>
            <h3 className="
              text-4xl
              font-bold
              text-highlight
            ">
              3
            </h3>

            <p className="mt-2">
              Programmes
            </p>
          </div>




          <div>
            <h3 className="
              text-4xl
              font-bold
              text-highlight
            ">
              UK
            </h3>

            <p className="mt-2">
              Community
            </p>
          </div>



        </div>


      </section>





      <Footer />


    </div>

  );

}