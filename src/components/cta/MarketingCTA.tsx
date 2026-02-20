import MarketingSectionTitle from "@/components/sectionTitle/MarketingSectionTitle";
import FlexibleForm from "@/components/form/branding/FlexibleForm";

type Props = {
  title: string;
  sub_title: string;
  description: string;
};

const MarketingCTA = ({ title, sub_title, description }: Props) => {
  return (
    <section>
      <div className="inner-container">
        <div className="pt-[60px] pb-[60px] xl:pt-[120px] xl:pb-[120px]">
          <div className="bg-background-3 rounded-[30px] p-[30px] md:p-[50px] lg:p-[70px] xl:p-[90px]">
            <div className="grid gap-y-[40px] gap-x-[60px] grid-cols-1 lg:grid-cols-2">
              <div>
                <p className="text-[16px] uppercase font-medium tracking-[0.08em] text-theme mb-[15px]">
                  {sub_title}
                </p>
                <MarketingSectionTitle
                  title={title}
                  className="!font-light text-text-fixed-2 max-w-[500px]"
                  animation=""
                />
                <p className="mt-[20px] text-text-fixed-3 leading-[1.6] max-w-[450px]">
                  {description}
                </p>
              </div>
              <div>
                <FlexibleForm btnText="Enviar consulta" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingCTA;
