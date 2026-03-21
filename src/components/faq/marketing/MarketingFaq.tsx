import FaqSection from "@/components/faq/branding/FaqSection";
import MarketingSectionTitle from "@/components/sectionTitle/MarketingSectionTitle";

type Props = {
  title: string;
  sub_title: string;
  description: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

const MarketingFaq = ({ title, sub_title, description, faqs }: Props) => {
  return (
    <section>
      <div className="inner-container">
        <div className="pt-[60px] pb-[60px] xl:pt-[120px] xl:pb-[120px] grid gap-y-[40px] gap-x-[60px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_600px] xl:grid-cols-[minmax(0,1fr)_740px]">
          <div>
            <p className="text-[16px] uppercase font-medium tracking-[0.08em] text-theme mb-[15px]">
              {sub_title}
            </p>
            <MarketingSectionTitle
              title={title}
              className="!font-light max-w-[400px]"
              animation=""
            />
            <div className="mt-[22px]">
              <p className="max-w-[350px] text-text leading-[1.6]">
                {description}
              </p>
            </div>
          </div>
          <div>
            <FaqSection faqs={faqs} className="font-plusjakartasans" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingFaq;
