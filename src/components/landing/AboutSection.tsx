import Title from "../ui/Title";
import Image from "next/image";

import backgroundImage from "../../../public/about/LOGO-Bod-dark-300x2472.png";
import man from "../../../public/about/c323dd78cd14292339fc7a81c07ae5ec84fcff29.png";
import logoWhite from "../../../public/Logo.png";
import logo from "../../../public/LogoTitle.png";

export default function AboutSection() {
  return (
    <section className="containe py-10 md:py-12 ">
      {/* Section Title */}
      <Title
        title="رحلتنا نحو التأثير"
        subtitle="شريكك الاستراتيجي للنمو الرقمي"
      />

      {/* Card */}
      <div className="relative rounded-3xl!  mt-10 md:mt-12 ">
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="Background Logo"
          height={100}
          width={100}
          className=" absolute inset-0 z-1 w-[80%] h-[40%] mt-10 md:w-[50%] md:h-[90%] m-auto"
        />

        {/* Color Overlay */}
        <div className="absolute inset-0 bg-[#B0F4E9] bg-opacity-50 rounded-3xl" />

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 p-4 md:p-6  items-center rounded-3xl!">
          <div className="text-right text-background space-y-6">
            {[
              "في بُعد لا نؤمن بالتسويق العشوائي، بل نصنع استراتيجيات رقمية مدروسة تُحدث فرقًا حقيقيًا في نمو أعمالك.",
              "نحن وكالة تسويق رقمي سعودية نساعد العلامات التجارية على بناء حضور قوي وتحقيق نتائج قابلة للقياس. نجمع بين التحليل العميق للسوق، الإبداع في التنفيذ، والتركيز المستمر على الأداء.",
              "نحوّل الأفكار إلى خطط، والخطط إلى نتائج ملموسة تعزز مبيعاتك وتضعك في موقع متقدم أمام منافسيك.",
              "هدفنا ليس إطلاق حملات فقط، بل بناء نمو مستدام يعكس قيمة أعمالك ويصنع أثرًا طويل المدى.",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="bg-background rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                  <Image src={logoWhite} alt="Logo" width={16} height={16} />
                </div>

                <p className="text-base md:text-lg leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Image Content */}
          <div className="relative md:static flex justify-center md:justify-end">
            {/* Logo */}
            <div className="absolute top-2 left-2 md:top-10 md:left-10 z-20">
              <Image
                src={logo}
                alt="Logo"
                width={80}
                height={80}
                className="w-16 md:w-20"
              />
            </div>

            {/* Man Image */}
            <Image
              src={man}
              alt="Founder"
              className="static md:absolute bottom-0! left-0  w-[300px] h-[300px]  md:w-[472px]  md:h-[450px]     "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
