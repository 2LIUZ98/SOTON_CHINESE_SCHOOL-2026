import { Link } from "react-router-dom";


export default function Footer() {

  return (

    <footer className="bg-primary text-white">


      <div className="mx-auto max-w-7xl px-6 py-14">


        <div className="
          grid
          grid-cols-1
          gap-10
          md:grid-cols-4
        ">


          {/* SCHOOL INFO */}

          <div>

            <h2 className="
              text-2xl
              font-bold
              mb-5
            ">
              SOTON CHINESE SCHOOL
            </h2>


            <p className="
              text-white/80
              leading-7
            ">
              Providing quality Chinese language education,
              cultural learning, and a supportive community
              for students in Southampton.
            </p>


          </div>





          {/* QUICK LINKS */}

          <div>

            <h3 className="
              text-lg
              font-semibold
              mb-5
            ">
              Quick Links
            </h3>


            <ul className="space-y-3">


              <li>
                <Link
                  to="/"
                  className="hover:text-highlight transition"
                >
                  Home
                </Link>
              </li>


              <li>
                <Link
                  to="/about"
                  className="hover:text-highlight transition"
                >
                  About Us
                </Link>
              </li>


              <li>
                <Link
                  to="/news"
                  className="hover:text-highlight transition"
                >
                  News
                </Link>
              </li>


              <li>
                <Link
                  to="/contact"
                  className="hover:text-highlight transition"
                >
                  Contact
                </Link>
              </li>


            </ul>


          </div>






          {/* ACADEMICS */}

          <div>

            <h3 className="
              text-lg
              font-semibold
              mb-5
            ">
              Academics
            </h3>


            <ul className="space-y-3">


              <li>
                <Link
                  to="/courses"
                  className="hover:text-highlight transition"
                >
                  Chinese Courses
                </Link>
              </li>


              <li>
                <Link
                  to="/activities"
                  className="hover:text-highlight transition"
                >
                  Cultural Activities
                </Link>
              </li>


              <li>
                <Link
                  to="/teachers"
                  className="hover:text-highlight transition"
                >
                  Our Teachers
                </Link>
              </li>


              <li>
                <Link
                  to="/admissions"
                  className="hover:text-highlight transition"
                >
                  Admissions
                </Link>
              </li>


            </ul>


          </div>







          {/* CONTACT */}

          <div>


            <h3 className="
              text-lg
              font-semibold
              mb-5
            ">
              Contact
            </h3>


            <ul className="
              space-y-3
              text-white/80
            ">


              <li>
                📍 Southampton, UK
              </li>


              <li>
                📧 info@sotonchineseschool.org
              </li>


              <li>
                💬 WeChat: SotonChineseSchool
              </li>


            </ul>


          </div>


        </div>







        {/* BOTTOM BAR */}


        <div className="
          mt-12
          border-t
          border-white/20
          pt-6
          flex
          flex-col
          gap-4
          text-sm
          text-white/70
          md:flex-row
          md:justify-between
          md:items-center
        ">


          <p>
            © 2026 Soton Chinese School. All rights reserved.
          </p>



          <div className="
            flex
            gap-6
          ">


            <Link
              to="/privacy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>


            <Link
              to="/terms"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </Link>


            <Link
              to="/contact"
              className="hover:text-white transition"
            >
              Contact
            </Link>


          </div>


        </div>


      </div>


    </footer>

  );

}nt