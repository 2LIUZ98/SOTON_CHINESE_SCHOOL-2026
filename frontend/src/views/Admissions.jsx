import Header from "../components/header";
import Footer from "../components/footer";

export default function Admissions() {
  const steps = [
    {
      number: "01",
      title: "Enquiry or Visit Us",
      chinese: "咨询或参观学校",
      description:
        "There are many ways you can reach out to us through email, phone or other authorised social media platforms. Contact us if you have any questions or would like to arrange a school visit.",
      chineseDescription:
        "您可以通过学校邮件、电话或其他官方认证的社交媒体平台联系我们。如有任何疑问，欢迎咨询我们，或预约参观学校。",
    },
    {
      number: "02",
      title: "Registration",
      chinese: "注册",
      description:
        "Complete the online application form on our official website and submit the required information.",
      chineseDescription:
        "所有注册流程均可在线完成。请在学校官网填写并提交申请表。",
    },
    {
      number: "03",
      title: "Payment",
      chinese: "缴费",
      description:
        "Transfer the tuition fee to the school's bank account. Please keep your payment record. Contact us if you require assistance.",
      chineseDescription:
        "请按照学校提供的银行账户完成转账并保留付款记录。如需帮助，请联系学校工作人员。",
    },
    {
      number: "04",
      title: "On Boarding",
      chinese: "入学",
      description:
        "After successful registration and payment, you will receive an admission confirmation together with a welcome pack and onboarding information.",
      chineseDescription:
        "完成注册及付款后，学校将发送录取确认及欢迎手册，并安排正式入学。",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-text">

      <Header />

      {/* HERO */}
      <section className="bg-primary text-white py-20 text-center">
        <h1 className="text-5xl font-bold">
          Admission Process
        </h1>

        <p className="mt-4 text-xl">
          入学流程
        </p>

        <p className="mt-8 max-w-4xl mx-auto text-white/80 leading-8">
          Welcome to Southampton Chinese School!
          <br />
          欢迎加入南安普顿中文学校！
          <br /><br />
          We hope to make our admission process as simple as possible.
          Please follow the steps below to begin your journey with us.
          <br />
          遵循简单高效的原则，请参考以下入学流程。
        </p>
      </section>

      {/* STEPS */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step) => (

            <div
              key={step.number}
              className="rounded-3xl border bg-white shadow-lg p-8"
            >

              <div className="text-5xl font-bold text-accent">
                {step.number}
              </div>

              <h2 className="mt-6 text-2xl font-bold text-primary">
                {step.title}
              </h2>

              <p className="font-semibold text-accent mt-2">
                {step.chinese}
              </p>

              <p className="mt-6 leading-7 text-text/80">
                {step.description}
              </p>

              <p className="mt-5 leading-7 text-text/70">
                {step.chineseDescription}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* PAYMENT */}
      <section className="bg-secondary/30 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-primary">
            Payment Information
          </h2>

          <p className="text-xl mt-2">
            学费支付信息
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-10">

            <div className="rounded-3xl bg-white shadow-lg p-8">

              <h3 className="text-2xl font-bold text-primary">
                School Bank Account
              </h3>

              <div className="mt-6 space-y-3">

                <p><strong>Account Name:</strong> Southampton Chinese School</p>
                <p><strong>Sort Code:</strong> 60-20-44</p>
                <p><strong>Account Number:</strong> 44512309</p>
                <p><strong>Currency:</strong> GBP</p>

              </div>

            </div>

            <div className="rounded-3xl bg-white shadow-lg p-8">

              <h3 className="text-2xl font-bold text-primary">
                Payment Example
              </h3>

              <div className="mt-6 space-y-3">

                <p><strong>Account:</strong> Southampton Chinese School</p>
                <p><strong>Sort Code:</strong> 60-20-44</p>
                <p><strong>Account Number:</strong> 44512309</p>
                <p><strong>Amount:</strong> £xxx</p>
                <p><strong>Reference:</strong> Class Code + Student Name</p>

                <p className="text-accent font-semibold">
                  Example: 2D Amy Chen
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* NOTES */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-primary">
          Payment Notes
        </h2>

        <ul className="mt-8 space-y-4 list-disc pl-6 leading-8">

          <li>
            Use the correct payment reference when making bank transfers.
          </li>

          <li>
            Always use the student's full name exactly as entered on the registration form.
          </li>

          <li>
            Mandarin-only class codes begin with <strong>C</strong>.
          </li>

          <li>
            Bilingual class codes begin with <strong>D</strong>.
          </li>

        </ul>

      </section>

      {/* REFUND */}
      <section className="bg-primary text-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Withdrawal & Refund Policy
          </h2>

          <p className="mt-8 leading-8 text-white/90">

            Students may withdraw at any time.

            Refunds are available only if the withdrawal request is submitted
            within the first <strong>6 weeks</strong> of the academic year.

            Refunds will be calculated as:

          </p>

          <ul className="mt-8 space-y-4 list-disc pl-6 leading-8 text-white/90">

            <li>
              50% of tuition fee refunded.
            </li>

            <li>
              £20 administration fee deducted.
            </li>

            <li>
              £20 registration fee is non-refundable.
            </li>

            <li>
              If withdrawing before the academic year begins, the full tuition fee
              will be refunded minus the £20 administration fee.
            </li>

            <li>
              If books have been issued, an additional deduction of
              £10–£40 will apply depending on the books received.
            </li>

          </ul>

        </div>

      </section>

      <Footer />

    </div>
  );
}