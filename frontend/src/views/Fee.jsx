import Header from "../components/header";
import Footer from "../components/footer";
import TuitionFeePDF from "../assets/fee_instruction_缴费说明_2026_Mar.pdf"; // Change this to your actual PDF filename

export default function Fee() {
  return (
    <div className="min-h-screen bg-white text-text">

      <Header />

      {/* HERO */}
      <section
        className="
          bg-primary
          py-20
          text-center
          text-white
        "
      >
        <h1
          className="
            text-5xl
            font-bold
          "
        >
          Tuition Fee Info 学费信息
        </h1>

        <p
          className="
            mt-4
            text-lg
            text-white/80
            max-w-3xl
            mx-auto
          "
        >
          Please see the PDF file below for the details of tuition fees
          for the academic year 2026–2027.
          <br />
          <br />
          有关 2026–2027 学年度学费的详细信息，
          请参阅下面的 PDF 文件。
        </p>
      </section>

      {/* PDF VIEWER */}
      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          py-20
        "
      >
        <div
          className="
            rounded-3xl
            border
            shadow-xl
            overflow-hidden
          "
        >
          <iframe
            src={TuitionFeePDF}
            title="Tuition Fee Information"
            className="w-full h-[900px]"
          />
        </div>
      </section>

      {/* DOWNLOAD BUTTON */}
      <section
        className="
          pb-20
          text-center
        "
      >
        <a
          href={TuitionFeePDF}
          download
          className="
            inline-block
            rounded-xl
            bg-accent
            px-8
            py-4
            font-bold
            text-white
            transition
            hover:bg-highlight
            hover:text-primary
          "
        >
          Download PDF 下载 PDF
        </a>
      </section>

      <Footer />

    </div>
  );
}