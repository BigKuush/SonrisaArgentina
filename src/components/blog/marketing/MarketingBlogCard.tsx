import ButtonSwap from "@/components/elements/button/ButtonSwap";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { convertWithBrSpan } from "@/lib/helper/converter";
import { TBlogType } from "@/types";
const MarketingBlogCard = ({ data, slug }: TBlogType) => {
  const {
    title2,
    title,
    short_description,
    location,
  } = data;
  const displayTitle = title2 || title || "";
  return (
    <article className="grid gap-[20px_60px] grid-cols-1 md:grid-cols-[auto_410px] xl:grid-cols-[auto_470px] 2xl:grid-cols-[auto_520px] justify-between items-start ">
      {/* Автора скрываем — оставляем только контент */}
      <div>
        <div>
          {location ? (
            <div className="flex items-center gap-[7px] text-xs uppercase ">
              <span className="py-1 px-2 bg-[#F1F1F4] dark:bg-[#333333] text-primary rounded-[20px] inline-block">
                {location}
              </span>
            </div>
          ) : null}
          <h2
            className="text-[26px] xl:text-[30px] mt-[15px]"
            dangerouslySetInnerHTML={convertWithBrSpan(displayTitle as string)}
          />

          <p className="mt-[15px]">{short_description}</p>
        </div>
        <div className="mt-[33px]">
          <ButtonSwap
            link={`/blog/${slug}`}
            bgColor={
              "bg-background border group-hover:bg-theme group-hover:border-theme"
            }
            textColor={"text-sm text-text group-hover:text-text-fixed"}
            arrowWidthHeight="w-[40px] h-[40px]"
            textClassName="px-[22px] font-normal"
            buttonText="Leer mas"
            rootClassName="wc-swap-btn-sm group"
          />
        </div>
      </div>
    </article>
  );
};

export default MarketingBlogCard;
