import React from "react";
import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <div>
      {/* about content */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutImg} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              6 Tahun Keanggunan Kopi di Desa Garahan, Jember
            </h2>
            <p className="md:w-3/4 text-neturalGrey mb-8">
              UD. Sejahtera berdiri sejak 2017, memadukan tradisi Desa Garahan
              dengan inovasi dalam meracik kopi. Kami bangga menyajikan bubuk
              kopi terbaik selama 6 tahun, menghadirkan pengalaman tak
              terlupakan. Misi kami adalah memberikan kopi herbal 100% alami
              tanpa tambahan kimia, menjalar dari Sabang hingga Merauke dan
              lebih jauh lagi. rasakan kesehatan racikan kopi rempah kami, dan
              kenikmatan dari kopi original asli kami di setiap cangkirnya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
