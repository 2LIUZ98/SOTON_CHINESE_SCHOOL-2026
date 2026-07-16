import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function ContactForm() {

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });


  function handleChange(e) {

    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

  }



  async function handleSubmit(e) {

    e.preventDefault();

    setLoading(true);


    try {

      // Replace with your backend API endpoint
      const response = await fetch(
        "https://your-backend-url.com/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(form),
        }
      );


      if (!response.ok) {

        throw new Error("Submission failed");

      }


      alert(
        "Your message has been sent successfully!"
      );


      setForm({
        Name: "",
        Email: "",
        Phone: "",
        Message: "",
      });


    } catch (error) {

      console.error(error);

      alert(
        "Unable to send your message. Please try again."
      );

    }


    setLoading(false);

  }




  return (

    <div className="min-h-screen bg-white text-text">


      <Header />



      {/* HERO */}

      <section className="
        bg-primary
        py-20
        text-center
        text-white
      ">

        <h1 className="
          text-5xl
          font-bold
        ">
          Contact Us
        </h1>


        <p className="
          mt-4
          text-white/80
          text-lg
        ">
          Get in touch with Southampton Chinese School
        </p>


      </section>





      {/* CONTACT FORM */}

      <section className="
        mx-auto
        max-w-3xl
        px-6
        py-20
      ">


        <form

          onSubmit={handleSubmit}

          className="
            rounded-3xl
            border
            p-10
            shadow-xl
            space-y-6
            bg-white
          "

        >


          <h2 className="
            text-3xl
            font-bold
            text-primary
          ">
            Send Us A Message
          </h2>




          <input

            type="text"

            name="Name"

            placeholder="Your Name"

            value={form.Name}

            onChange={handleChange}

            required

            className="
              w-full
              rounded-xl
              border
              p-4
              focus:outline-none
              focus:border-accent
            "

          />





          <input

            type="email"

            name="Email"

            placeholder="Email Address"

            value={form.Email}

            onChange={handleChange}

            required

            className="
              w-full
              rounded-xl
              border
              p-4
              focus:outline-none
              focus:border-accent
            "

          />





          <input

            type="tel"

            name="Phone"

            placeholder="Phone Number"

            value={form.Phone}

            onChange={handleChange}

            required

            className="
              w-full
              rounded-xl
              border
              p-4
              focus:outline-none
              focus:border-accent
            "

          />





          <textarea

            name="Message"

            rows="6"

            placeholder="Your Message"

            value={form.Message}

            onChange={handleChange}

            required

            className="
              w-full
              rounded-xl
              border
              p-4
              focus:outline-none
              focus:border-accent
            "

          />





          <button

            type="submit"

            disabled={loading}

            className="
              w-full
              rounded-xl
              bg-accent
              py-4
              font-bold
              text-white
              transition
              hover:bg-highlight
              hover:text-primary
            "

          >

            {
              loading
              ? "Sending..."
              : "Send Message"
            }

          </button>



        </form>


      </section>





      {/* VISIT US */}

      <section className="
        mx-auto
        max-w-3xl
        px-6
        pb-20
        text-center
      ">


        <h2 className="
          text-3xl
          font-bold
          text-primary
        ">
          Visit Us
        </h2>



        <p className="
          mt-4
          leading-8
          text-text/70
        ">
          Please feel free to reach out to us if you have any enquiries.
          <br />
          Alternatively, you are welcome to visit us at our location during
          our opening hours.
        </p>




        <div className="
          mt-8
          rounded-3xl
          bg-secondary/30
          p-8
        ">


          <h3 className="
            text-xl
            font-bold
            text-primary
          ">
            Southampton Chinese School
          </h3>



          <p className="
            mt-4
            leading-7
            text-text/80
          ">

            Saturday: 1:00 PM - 3:00 PM

            <br />
            <br />

            Violet Road
            <br />

            Southampton
            <br />

            SO16 3GJ
            <br />

            United Kingdom

          </p>


        </div>


      </section>





      <Footer />


    </div>

  );

}