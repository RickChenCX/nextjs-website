function Footer() {
  return (
    <footer
      style={{
        paddingTop: "330px",
        paddingBottom: "40px",
        fontSize: "14px",
        lineHeight: "22px",
      }}
    >
      <div>You can also contact us</div>
      <a href="mailto:sydney.cheng@reinventventures.com" className="pt-1 pb-6">
        sydney.cheng@reinventventures.com
      </a>
      <div className="text-neutral7">
        The information you provide will be used in accordance with the terms of
        our <span className="text-white">Privacy Policy</span>.
      </div>
    </footer>
  );
}

export default Footer;
