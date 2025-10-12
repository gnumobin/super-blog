const AdsCard = () => {
  return (
    <div
      className="
        container
        bg-card-border 
        py-6 sm:py-8 md:py-10 
        rounded-2xl 
        w-1/2 md:w-5/6
        m-auto 
        font-semibold text-secondary text-center
        transform transition-all duration-300 
        hover:scale-105 hover:shadow-xl
      "
    >
      <p className="text-4xl md:text-3xl">اینجا جای تبلیغاته</p>
      <p className="mt-6 sm:mt-8 md:mt-10 text-3xl md:text-2xl">
        بعدا ابعاد رو مشخص میکنم
      </p>
    </div>
  );
};

export default AdsCard;
