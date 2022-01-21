function Footer({ page }: { page: "contactUs" | "bookDemo" }) {
  return (
    <footer
      className={`${page === "contactUs" ? "pt-72" : "pt-96"}  pb-10 text-sm`}
    >
      <div className="pb-1">You can also contact us</div>
      <a href="mailto:sydney.cheng@reinventventures.com" className="text-white">
        sydney.cheng@reinventventures.com
      </a>
      <div className="text-neutral7 pt-6">
        The information you provide will be used in accordance with the terms of
        our <span className="text-white">Privacy Policy</span>.
      </div>
    </footer>
  );
}

export default Footer;
