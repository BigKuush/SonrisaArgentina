import ImageComponent from "../tools/ImageComponent";

type Props = {
  image: string;
  video?: string;
};

const MarketingImage = ({ image }: Props) => {
  return (
    <div className="relative after:content-[''] after:absolute after:w-full after:h-[calc(100%-70px)] after:md:h-[calc(100%-120px)] after:2xl:h-[calc(100%-200px)]  after:top-[70px] after:md:top-[120px] after:2xl:top-[200px] after:start-0 after:bg-theme after:z-[-1]">
      <div className="inner-container">
        <div>
          <div
            style={{
              marginInlineEnd:
                "calc(((100vw + 24px) - var(--container-max-widths)) / -2)",
            }}
          >
            <ImageComponent
              src={image}
              width={1605}
              height={800}
              alt="Marketing dental para clínicas"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingImage;
