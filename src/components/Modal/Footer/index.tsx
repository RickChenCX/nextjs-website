function Footer({
  page,
  color,
}: {
  page: "contactUs" | "bookDemo";
  color: string;
}) {
  return (
    <footer className={`${page === "contactUs" ? "pt-72" : "pt-96"} text-sm`}>
      <div className="pb-1">You can also contact us</div>
      <a
        href="mailto:Contact@getbossbuilding.com"
        className="text-white hover:text-primary"
      >
        Contact@getbossbuilding.com
      </a>
      <div
        className={`pt-6 ${
          color === "text-primary2" ? "text-primary2" : color
        } text-xs`}
      >
        The information you provide will be used in accordance with the terms of
        our <span className="text-white">Privacy Policy</span>.
      </div>
    </footer>
  );
}

export default Footer;
