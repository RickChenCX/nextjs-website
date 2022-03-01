function Footer() {
  return (
    <footer
      className="bg-bgOne text-sm"
      style={{
        padding: "16px 16px 40px",
      }}
    >
      <article className="text-neutral12">You can also contact us</article>
      <a
        href="mailto:Contact@getbossbuilding.com"
        className="text-primary pt-2 hover:text-primary"
      >
        Contact@getbossbuilding.com
      </a>
      <article className="text-xs text-neutral7 pt-6">
        The information you provide will be used in accordance with the terms of
        our <span className="text-primary">Privacy Policy.</span>
      </article>
    </footer>
  );
}

export default Footer;