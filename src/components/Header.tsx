interface props {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

function Header({ title, subtitle, children }: props) {
  return (
    <header>
      <span>
        <h2>{title}</h2>
        <span className="desktop-only">
          <h2>{subtitle}</h2>
        </span>
      </span>
      <p>{children}</p>
    </header>
  );
}

export default Header;
