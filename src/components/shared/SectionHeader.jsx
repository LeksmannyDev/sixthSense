const SectionHeader = ({ subtitle, title }) => {
  return (
    <div className="text-center mb-12">
      <p className="text-red text-xl sm:text-[20px] md:text-[24px] font-semibold uppercase">
        {subtitle}
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-[40px] font-medium text-blue mt-2">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
