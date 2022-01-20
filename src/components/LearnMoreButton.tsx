import Link from "next/link";
import LinkArrow from "../svgs/LinkArrow.svg";

interface ILearnMoreButtonProps {
  linkUrl: string;
}

export default function LearnMoreButton({ linkUrl }: ILearnMoreButtonProps) {
  return (
    <Link href={linkUrl}>
      <a>
        <div className="cursor-pointer">
          <span className={`text-primary text-sm text-center`}>Learn more</span>
          <LinkArrow className="inline-block ml-1.5" />
        </div>
      </a>
    </Link>
  );
}
