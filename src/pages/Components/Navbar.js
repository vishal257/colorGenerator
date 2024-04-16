const Navbar = () => {
  return (
    <div className={`flex md:p-10 p-3 md:text-2xl text-xl`}>
      <div className="basis-full">ColorMaker</div>
      <div className="text-right md:pr-8 pr-3">About</div>
      <div>Colors</div>
    </div>
  );
};

export default Navbar;
