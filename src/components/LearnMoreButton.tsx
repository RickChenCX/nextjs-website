import Link from "next/link";
import Union from "./../svgs/Union.svg";

export default function LearnMoreButton() {
  return (
    <Link href="/">
      <div className="cursor-pointer">
        <span className={`text-primary text-sm text-center`}>
          Learn more
        </span>
        <Union className="inline-block ml-1.5" />
      </div>
    </Link>
  )
}