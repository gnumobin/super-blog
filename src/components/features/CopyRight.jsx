import Logo from "../ui/Logo";

const CopyRight = () => {
  return (
    <div className="text-secondary text-2xl flex justify-between items-center border-t pt-12 border-[#DCDDDF] pb-12">
      <Logo />
      <p>تمامی حقوق محفوض است</p>
    </div>
  );
};

export default CopyRight;
