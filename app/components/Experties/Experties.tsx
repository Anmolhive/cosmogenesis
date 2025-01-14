import ExpertiesGrid from "../ExpertiesGrid/ExpertiesGrid";

const Experties = () => {
  return (
    <section className="overflow-hidden ">
      <div className="white-mask w-full h-full grid place-items-center py-10 ">
        <div className="container mx-auto ">
          <h2 className="text-5xl text-steel-blue text-center font-bold">
            Our Expertise.
          </h2>
          <ExpertiesGrid />
        </div>
      </div>
    </section>
  );
};

export default Experties;
