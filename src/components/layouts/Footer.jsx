import CopyRight from "../features/CopyRight";

const Footer = () => {
  return (
    <footer className="mt-32 bg-[#F6F6F7] text-2xl pt-24">
      <div className="container">
        <div className="flex flex-row lg:flex-col gap-16 lg:gap-32 text-[#3B3C4A] pb-24">
          {/* About Us */}
          <div className="flex-2 ml-32">
            <h2 className="text-black font-semibold text-3xl mb-6">
              درباره ما
            </h2>
            <p className="leading-relaxed">
              ما در شرکت نمونه‌ساز، با هدف ارائه محتوای باکیفیت و ابزارهای
              کاربردی در دنیای وب و فناوری فعالیت می‌کنیم. تیم ما متشکل از
              طراحان، توسعه‌دهندگان و متخصصان محتوا است که با خلاقیت و تجربه،
              بهترین تجربه دیجیتال را برای کاربران ایجاد می‌کنند. مأموریت ما
              ارتقاء تجربه کاربری و ارائه راهکارهای نوآورانه در طراحی و توسعه وب
              است.
            </p>
          </div>

          {/* Categories 1 */}
          <ul className="flex-1 flex flex-col gap-4">
            <h2 className="text-black font-semibold text-3xl mb-6">
              دسته‌بندی‌ها
            </h2>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                خانه
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                پست‌ها
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                درباره ما
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                تماس با ما
              </a>
            </li>
          </ul>

          {/* Categories 2 */}
          <ul className="flex-1 flex flex-col gap-4">
            <h2 className="text-black font-semibold text-3xl mb-6">خدمات</h2>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                طراحی وب
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                توسعه اپلیکیشن
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                بازاریابی دیجیتال
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                مشاوره UX/UI
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <CopyRight />
      </div>
    </footer>
  );
};

export default Footer;
