import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Apply() {


  const [loading, setLoading] = useState(false);



  const [form, setForm] = useState({

    // =========================
    // SECTION 1: STUDENT INFORMATION
    // =========================

    English_Family_Name: "",
    English_First_Name: "",
    Chinese_Name: "",

    Date_of_Birth: "",

    Address_Line1: "",
    Address_Line2: "",
    City: "",
    County: "",
    Postcode: "",

    Mainstream_School_Name: "",
    Mainstream_School_Year: "",

    Language_Spoken_At_Home: "",

    Chinese_Level: "",

    Preferred_Class: "",



    // =========================
    // SECTION 2: CONTACT INFORMATION
    // =========================

    Contact_English_Name: "",
    Contact_Chinese_Name: "",
    Contact_Relationship: "",
    Contact_Number: "",
    Contact_Email: "",



    // =========================
    // SECTION 3: OTHERS
    // =========================

    Health_Information: "",
    Medical_Declaration: false,



    // =========================
    // SECTION 4: CONSENT
    // =========================

    Website_Photo_Consent: false,
    Social_Media_Photo_Consent: false,
    School_Regulations_Agreement: false,

  });





  function handleChange(e) {

    const {
      name,
      value
    } = e.target;


    setForm((prev) => ({

      ...prev,

      [name]: value,

    }));

  }







  async function handleSubmit(e) {

    e.preventDefault();


    setLoading(true);



    try {


      console.log("Application Submitted:", form);



      /*
        Replace this later with your backend API:

        await fetch(
          "YOUR_BACKEND_URL/apply",
          {
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(form)
          }
        )

      */



      alert(
        "Application submitted successfully!"
      );



    } catch (error) {


      console.error(
        "Application Error:",
        error
      );


      alert(
        "Unable to submit application."
      );


    }



    setLoading(false);

  }








  return (

    <div className="
      min-h-screen
      bg-white
      text-text
    ">


      <Header />





      {/* ================= HERO ================= */}


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

          Application Form 申请表

        </h1>



        <p className="
          mt-4
          text-white/80
          text-lg
        ">

          Southampton Chinese School

          <br />

          南安普敦中文学校

        </p>


      </section>







      {/* ================= FORM ================= */}


      <section className="
        mx-auto
        max-w-5xl
        px-6
        py-20
      ">



      <form

        onSubmit={handleSubmit}

        className="
          rounded-3xl
          border
          bg-white
          p-10
          shadow-xl
          space-y-10
        "

      >







      {/* ================================================= */}
      {/* SECTION 1: STUDENT INFORMATION */}
      {/* ================================================= */}


      <h2 className="
        text-3xl
        font-bold
        text-primary
      ">

        1. Student Information 学生资料

      </h2>







      <div className="
        grid
        md:grid-cols-2
        gap-6
      ">





      {/* English Family Name */}

      <input

        type="text"

        name="English_Family_Name"

        placeholder="
        English Family Name 英文姓氏
        "

        value={form.English_Family_Name}

        onChange={handleChange}

        required

        className="
          rounded-xl
          border
          p-4
        "

      />





      {/* English First Name */}

      <input

        type="text"

        name="English_First_Name"

        placeholder="
        English First Name 英文名字
        "

        value={form.English_First_Name}

        onChange={handleChange}

        required

        className="
          rounded-xl
          border
          p-4
        "

      />







      {/* Chinese Name */}

      <input

        type="text"

        name="Chinese_Name"

        placeholder="
        Chinese Name 中文名字
        "

        value={form.Chinese_Name}

        onChange={handleChange}

        className="
          rounded-xl
          border
          p-4
        "

      />







      {/* Date of Birth */}

      <div>


      <label className="
        block
        mb-2
        font-semibold
      ">

        Date of Birth 出生日期

      </label>



      <input

        type="date"

        name="Date_of_Birth"

        value={form.Date_of_Birth}

        onChange={handleChange}

        required

        className="
          w-full
          rounded-xl
          border
          p-4
        "

      />


      <p className="
        mt-2
        text-sm
        text-gray-500
      ">

        Minimum age: 5 years old

        <br />

        最低年龄：5岁

      </p>


      </div>






      </div>








      {/* ================= ADDRESS ================= */}


      <h3 className="
        text-xl
        font-bold
        text-primary
      ">

        Address 地址

      </h3>





      <input

        type="text"

        name="Address_Line1"

        placeholder="
        Address Line 1 地址第一行
        "

        value={form.Address_Line1}

        onChange={handleChange}

        required

        className="
          w-full
          rounded-xl
          border
          p-4
        "

      />





      <input

        type="text"

        name="Address_Line2"

        placeholder="
        Address Line 2 地址第二行
        "

        value={form.Address_Line2}

        onChange={handleChange}

        className="
          w-full
          rounded-xl
          border
          p-4
        "

      />






      <div className="
        grid
        md:grid-cols-3
        gap-6
      ">


      <input

        type="text"

        name="City"

        placeholder="City 城市"

        value={form.City}

        onChange={handleChange}

        required

        className="
          rounded-xl
          border
          p-4
        "

      />



      <input

        type="text"

        name="County"

        placeholder="County 郡/地区"

        value={form.County}

        onChange={handleChange}

        className="
          rounded-xl
          border
          p-4
        "

      />



      <input

        type="text"

        name="Postcode"

        placeholder="Postcode 邮编"

        value={form.Postcode}

        onChange={handleChange}

        required

        className="
          rounded-xl
          border
          p-4
        "

      />



      </div>

            {/* ================= CURRENT SCHOOL ================= */}


      <div className="
        grid
        md:grid-cols-2
        gap-6
      ">


      <div>

      <label className="
        block
        mb-2
        font-semibold
      ">

        Name of current mainstream school 当前主流学校的名称

      </label>


      <input

        type="text"

        name="Mainstream_School_Name"

        value={form.Mainstream_School_Name}

        onChange={handleChange}

        className="
          w-full
          rounded-xl
          border
          p-4
        "

      />


      </div>






      <div>

      <label className="
        block
        mb-2
        font-semibold
      ">

        Year of current mainstream school 当前主流学校的年级

      </label>



      <input

        type="text"

        name="Mainstream_School_Year"

        value={form.Mainstream_School_Year}

        onChange={handleChange}

        placeholder="Example: Year 3"

        className="
          w-full
          rounded-xl
          border
          p-4
        "

      />


      </div>


      </div>







      {/* ================= LANGUAGE ================= */}



      <div>


      <label className="
        block
        mb-3
        font-semibold
      ">

        Language spoken at home 在家使用的语言 *

      </label>





      <div className="
        flex
        gap-8
      ">



      <label className="
        flex
        items-center
        gap-3
      ">


      <input

        type="radio"

        name="Language_Spoken_At_Home"

        value="Chinese"

        checked={
          form.Language_Spoken_At_Home === "Chinese"
        }

        onChange={handleChange}

        required

      />


      Chinese 华语


      </label>








      <label className="
        flex
        items-center
        gap-3
      ">


      <input

        type="radio"

        name="Language_Spoken_At_Home"

        value="Non-Chinese"

        checked={
          form.Language_Spoken_At_Home === "Non-Chinese"
        }

        onChange={handleChange}

      />


      Non-Chinese 非华语


      </label>



      </div>


      </div>








      {/* ================= CHINESE LEVEL ================= */}



      <div>


      <label className="
        block
        mb-3
        font-semibold
      ">


      Chinese Knowledge/Level 中文知识/水平


      </label>





      <textarea

        name="Chinese_Level"

        rows="6"

        maxLength="2000"

        value={form.Chinese_Level}

        onChange={handleChange}

        placeholder="
        Please describe your child's Chinese level.

        如果选班级有困惑，请在此栏留言。
        "

        className="
          w-full
          rounded-xl
          border
          p-4
        "

      />




      <p className="
        mt-2
        text-sm
        text-gray-500
      ">

        Maximum length: 2000 characters

      </p>


      </div>








      {/* ================= PREFERRED CLASS ================= */}



      <div>


      <label className="
        block
        mb-3
        font-semibold
      ">


      Preferred Class 首选班


      </label>





      <p className="
        mb-5
        text-sm
        text-gray-500
      ">


      If you are confused about choosing a class,
      please leave a message in the
      'Chinese level' field.


      <br />


      如果选班级有困惑,
      请在 '中文水平' 一栏里留言。


      </p>







      <div className="
        space-y-4
      ">



      <label className="
        flex
        items-start
        gap-3
      ">


      <input

        type="radio"

        name="Preferred_Class"

        value="Chinese Only Teaching Class"

        checked={
          form.Preferred_Class ===
          "Chinese Only Teaching Class"
        }

        onChange={handleChange}

        required

        className="mt-1"

      />


      <span>

      <strong>
      Chinese only teaching class
      </strong>


      <br />


      全中文教学班


      </span>


      </label>








      <label className="
        flex
        items-start
        gap-3
      ">


      <input

        type="radio"

        name="Preferred_Class"

        value="Chinese and English Dual Language Teaching Class"

        checked={
          form.Preferred_Class ===
          "Chinese and English Dual Language Teaching Class"
        }

        onChange={handleChange}

        className="mt-1"

      />


      <span>

      <strong>
      Chinese and English dual language teaching class
      </strong>


      <br />


      中英双语教学班


      </span>


      </label>



      </div>


     </div>










      {/* ================================================= */}
      {/* SECTION 2: CONTACT INFORMATION */}
      {/* ================================================= */}



      <h2 className="
        text-3xl
        font-bold
        text-primary
      ">


      2. Contact Information 联系方式


      </h2>







      <input

        type="text"

        name="Contact_English_Name"

        placeholder="
        Name of Contact in English - Full Name 联系人英文全名
        "

        value={form.Contact_English_Name}

        onChange={handleChange}

        required

        className="
          w-full
          rounded-xl
          border
          p-4
        "

      />







      <input

        type="text"

        name="Contact_Chinese_Name"

        placeholder="
        Name of Contact in Chinese 联系人中文姓名
        "

        value={form.Contact_Chinese_Name}

        onChange={handleChange}

        className="
          w-full
          rounded-xl
          border
          p-4
        "

      />







      <input

        type="text"

        name="Contact_Relationship"

        placeholder="
        Contact Relationship 联系人关系
        "

        value={form.Contact_Relationship}

        onChange={handleChange}

        required

        className="
          w-full
          rounded-xl
          border
          p-4
        "

      />








      <div>


      <input

        type="tel"

        name="Contact_Number"

        placeholder="
        Contact Number 联系人电话
        "

        value={form.Contact_Number}

        onChange={handleChange}

        required

        pattern="[0-9]{11}"

        maxLength="11"

        className="
          w-full
          rounded-xl
          border
          p-4
        "

      />



      <p className="
        mt-2
        text-sm
        text-gray-500
      ">

      Required format:
      11 digits, without any space in between.

      <br />

      Example: 02381234567

      </p>


      </div>







      <div>


      <input

        type="email"

        name="Contact_Email"

        placeholder="
        Contact Email Address 联系人电邮地址
        "

        value={form.Contact_Email}

        onChange={handleChange}

        required

        className="
          w-full
          rounded-xl
          border
          p-4
        "

      />



      <p className="
        mt-2
        text-sm
        text-gray-500
      ">


      Required format:
      only letters, numbers, and '@ . -' are allowed.


      <br />


      Please do not provide Hotmail,
      Live or Outlook email accounts.


      <br />


      (e.g. no @hotmail.com,
      @live.co.uk or @outlook.com)


      </p>


      </div>

            {/* ================================================= */}
      {/* SECTION 3: OTHERS */}
      {/* ================================================= */}


      <h2 className="
        text-3xl
        font-bold
        text-primary
      ">

        3. Others 其他

      </h2>








      <div>


      <label className="
        block
        mb-3
        font-semibold
      ">

        Student Health Information 学生健康情况

      </label>





      <p className="
        mb-4
        text-sm
        text-gray-500
      ">

        Please mention, in brief, if there is any history of previous
        illness, allergy or physical / psychological conditions that
        the school needs to be aware of.

        <br /><br />

        请简而言之，如果有任何学校需要注意的既往疾病史、
        过敏史或身体/心理状况。

      </p>







      <textarea

        name="Health_Information"

        rows="6"

        maxLength="2000"

        value={form.Health_Information}

        onChange={handleChange}

        placeholder="
        Please provide relevant health information.

        请填写学生健康情况。
        "

        className="
          w-full
          rounded-xl
          border
          p-4
        "

      />




      <p className="
        mt-2
        text-sm
        text-gray-500
      ">

        Maximum length: 2000 characters

      </p>


      </div>








      {/* Medical Declaration */}


      <label className="
        flex
        items-start
        gap-3
      ">


      <input

        type="checkbox"

        name="Medical_Declaration"

        checked={form.Medical_Declaration}

        onChange={(e)=>

          setForm((prev)=>({

            ...prev,

            Medical_Declaration:
            e.target.checked

          }))

        }

        required

        className="
          mt-1
          h-5
          w-5
        "

      />



      <span className="text-sm leading-6">


        We declare that all relevant medical conditions are correctly
        reported on the admission form.


        <br /><br />


        我们声明所有相关的医疗条件都正确地报告在录取表格上。


        <span className="text-accent">
          *
        </span>


      </span>


      </label>









      {/* ================================================= */}
      {/* SECTION 4: CONSENT */}
      {/* ================================================= */}



      <h2 className="
        text-3xl
        font-bold
        text-primary
      ">


        Consent & Authorization 授权与同意声明


      </h2>








      {/* Website Consent */}


      <label className="
        flex
        items-start
        gap-3
      ">


      <input

        type="checkbox"

        name="Website_Photo_Consent"

        checked={form.Website_Photo_Consent}

        onChange={(e)=>

          setForm((prev)=>({

            ...prev,

            Website_Photo_Consent:
            e.target.checked

          }))

        }

        className="
          mt-1
          h-5
          w-5
        "

      />



      <span className="text-sm leading-6">


        I acknowledge and give consent to the publication of my child’s
        first name and photos at special occasions (e.g. festival
        events, year-end events, and school promotion events) on school
        websites for promotion purposes.


        <br /><br />


        本人确认并同意，学校可在特殊活动场合（如节日庆典、
        年终活动及学校宣传活动等），出于宣传目的，在学校官方网站上发布本人孩子的名字及照片。


      </span>


      </label>









      {/* Social Media Consent */}


      <label className="
        flex
        items-start
        gap-3
      ">


      <input

        type="checkbox"

        name="Social_Media_Photo_Consent"

        checked={form.Social_Media_Photo_Consent}

        onChange={(e)=>

          setForm((prev)=>({

            ...prev,

            Social_Media_Photo_Consent:
            e.target.checked

          }))

        }

        className="
          mt-1
          h-5
          w-5
        "

      />



      <span className="text-sm leading-6">


        I acknowledge and give consent to the publication of my child’s
        first name and photos at special occasions (e.g. festival
        events, year-end events, and school promotion events) on social
        media platforms (including but not limited to Facebook,
        Twitter, WeChat, WhatsApp, etc.) for promotion purposes.


        <br /><br />


        本人确认并同意，学校可在特殊活动场合（如节日庆典、
        年终活动及学校宣传活动等），出于宣传目的，在社交媒体平台
        （包括但不限于 Facebook、Twitter、微信、WhatsApp 等）
        发布本人孩子的名字及照片。


      </span>


      </label>









      {/* Regulations Agreement */}


      <label className="
        flex
        items-start
        gap-3
      ">


      <input

        type="checkbox"

        name="School_Regulations_Agreement"

        checked={form.School_Regulations_Agreement}

        onChange={(e)=>

          setForm((prev)=>({

            ...prev,

            School_Regulations_Agreement:
            e.target.checked

          }))

        }

        required

        className="
          mt-1
          h-5
          w-5
        "

      />



      <span className="text-sm leading-6">


        I have read, understood and accepted the regulations and
        guidelines of Southampton Chinese School and agree to abide by
        them.


        <br /><br />


        本人已阅读、理解并接受南安普敦中文学校的各项规章制度及相关指引，并承诺遵守。


        <span className="text-accent">
          *
        </span>


      </span>


      </label>









      {/* ================= SUBMIT BUTTON ================= */}



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
          ?
          "Submitting..."
          :
          "Submit Application 提交申请"
        }


      </button>





      </form>


      </section>







      <Footer />



    </div>

  );


}