import { StayOnTrackCard } from "@/components/marketing/StayOnTrackCard";

type ArticleConversionFooterProps = {
  /** UTM / App Store campaign slug */
  campaign?: string;
  className?: string;
};

export function ArticleConversionFooter({
  campaign = "article_footer_card",
  className,
}: ArticleConversionFooterProps) {
  return (
    <StayOnTrackCard
      campaign={campaign}
      placement="article_footer_card"
      className={className}
    />
  );
}
