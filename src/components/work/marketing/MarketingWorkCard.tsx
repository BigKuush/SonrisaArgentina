import ImageComponent from "@/components/tools/ImageComponent";
import { cn } from "@/lib/utils";
import { TWorkType } from "@/types";

const MarketingWorkCard = ({ data }: TWorkType) => {
  const { image, title, tags, id, external_url } = data;
  const href = external_url || "#";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("block", id === 3 && "sm:col-span-2 col-auto")}
    >
      <div
        className="has_fade_anim group"
        data-fade-from="left"
        data-delay="0.15"
      >
        <div className="overflow-hidden rounded-[12px]">
          <ImageComponent
            width={id === 3 ? 1290 : 620}
            height={id === 3 ? 790 : 420}
            src={image}
            alt={title}
            className="transition-all duration-500 w-full group-hover:scale-105 max-w-full"
          />
        </div>
        <div className="mt-[21px] xl:mt-[31px] flex items-center justify-between">
          <div>
            <h3 className="text-[24px]">{title}</h3>
            <div className="mt-4">
              <span className="text-[14px] uppercase inline-block text-text-3 group-hover:text-text transition-all duration-300">
                {tags[0]}
              </span>
            </div>
          </div>
          <span className="text-[13px] text-text-3 group-hover:text-theme transition-all duration-300 flex items-center gap-[6px]">
            Ver sitio
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
};

export default MarketingWorkCard;
