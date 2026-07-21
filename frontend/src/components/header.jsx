import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";


export default function Header() {

  const [open, setOpen] = useState(false);
  const [academicOpen, setAcademicOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);


  return (

    <>

      {/* ================= DESKTOP HEADER ================= */}

      <nav
        className="
        hidden md:flex
        sticky top-0 z-50
        bg-primary
        text-white
        px-10 py-5
        items-center
        justify-between
        shadow-lg
        "
      >


        {/* LOGO */}

        <Link
          to="/"
          className="
          text-2xl
          font-bold
          tracking-wide
          "
        >
          SOTON CHINESE SCHOOL
        </Link>



        {/* NAV LINKS */}

        <div className="flex items-center gap-8">


          <Link
            to="/"
            className="hover:text-highlight transition"
          >
            Home
          </Link>



          <Link
            to="/about"
            className="hover:text-highlight transition"
          >
            About Us
          </Link>



          {/* ACADEMICS DROPDOWN */}

          <div
            className="relative group"
          >

            <button
              className="
              flex
              items-center
              gap-1
              hover:text-highlight
              transition
              "
            >

              Academics

              <ChevronDown size={16}/>

            </button>


            <div
              className="
              absolute
              hidden
              group-hover:block
              top-8
              left-0
              bg-white
              text-text
              rounded-xl
              shadow-xl
              w-48
              p-3
              "
            >

              <Link
                to="/courses"
                className="
                block
                p-3
                rounded-lg
                hover:bg-secondary
                "
              >
                Courses
              </Link>


              <Link
                to="/activities"
                className="
                block
                p-3
                rounded-lg
                hover:bg-secondary
                "
              >
                Activities
              </Link>


              <Link
                to="/teachers"
                className="
                block
                p-3
                rounded-lg
                hover:bg-secondary
                "
              >
                Teachers
              </Link>


            </div>


          </div>




          {/* ADMISSIONS DROPDOWN */}

          <div className="relative group">

            <button
              className="
                flex
                items-center
                gap-1
                hover:text-highlight
                transition
              "
            >
              Admissions
              <ChevronDown size={16} />
            </button>

            <div
              className="
                absolute
                hidden
                group-hover:block
                top-8
                left-0
                bg-white
                text-text
                rounded-xl
                shadow-xl
                w-64
                p-3
              "
            >

              <Link
                to="/admissions"
                className="
                  block
                  rounded-lg
                  p-3
                  hover:bg-secondary
                "
              >
                Admission Process
              </Link>

              <Link
                to="/apply"
                className="
                  block
                  rounded-lg
                  p-3
                  hover:bg-secondary
                "
              >
                Application Form
              </Link>

              <Link
                to="/tuition-fees"
                className="
                  block
                  rounded-lg
                  p-3
                  hover:bg-secondary
                "
              >
                Tuition Fee Information
              </Link>

            </div>

          </div>



          <Link
            to="/news"
            className="hover:text-highlight transition"
          >
            News
          </Link>



          <Link
            to="/contact"
            className="hover:text-highlight transition"
          >
            Contact
          </Link>




          <Link
            to="/apply"
            className="
            bg-accent
            px-6 py-3
            rounded-full
            font-semibold
            hover:bg-highlight
            hover:text-primary
            transition
            "
          >
            Apply Now
          </Link>



        </div>


      </nav>






      {/* ================= MOBILE HEADER ================= */}


      <header
        className="
        md:hidden
        sticky top-0 z-50
        bg-primary
        text-white
        px-5 py-4
        flex
        justify-between
        items-center
        "
      >


        <Link
          to="/"
          className="font-bold text-lg"
        >
          SOTON CHINESE SCHOOL
        </Link>



        <button
          onClick={() => setOpen(!open)}
        >

          {open
            ? <X size={26}/>
            : <Menu size={26}/>
          }

        </button>


      </header>






      {/* ================= MOBILE MENU ================= */}


      {open && (

        <div
          className="
          md:hidden
          fixed
          top-[64px]
          left-0
          right-0
          z-40
          bg-primary
          text-white
          p-6
          flex
          flex-col
          gap-5
          shadow-xl
          "
        >


          <Link
            to="/"
            onClick={()=>setOpen(false)}
          >
            Home
          </Link>


          <Link
            to="/about"
            onClick={()=>setOpen(false)}
          >
            About Us
          </Link>


          <Link
            to="/courses"
            onClick={()=>setOpen(false)}
          >
            Academics
          </Link>


          <div>

            <button
              onClick={() => setAdmissionsOpen(!admissionsOpen)}
              className="
                flex
                w-full
                items-center
                justify-between
              "
            >
              Admissions
              <ChevronDown
                size={18}
                className={
                  admissionsOpen
                    ? "rotate-180 transition"
                    : "transition"
                }
              />
            </button>

            {admissionsOpen && (

              <div className="ml-4 mt-3 flex flex-col gap-3">

                <Link
                  to="/admissions"
                  onClick={() => setOpen(false)}
                >
                  Admission Process
                </Link>

                <Link
                  to="/apply"
                  onClick={() => setOpen(false)}
                >
                  Application Form
                </Link>

                <Link
                  to="/tuition-fees"
                  onClick={() => setOpen(false)}
                >
                  Tuition Fee Information
                </Link>

              </div>

            )}

          </div>


          <Link
            to="/news"
            onClick={()=>setOpen(false)}
          >
            News
          </Link>


          <Link
            to="/contact"
            onClick={()=>setOpen(false)}
          >
            Contact
          </Link>


          <Link
            to="/apply"
            onClick={()=>setOpen(false)}
            className="
            bg-accent
            text-center
            py-3
            rounded-full
            font-semibold
            "
          >
            Apply Now
          </Link>


        </div>

      )}


    </>

  );

}