import { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/Button";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/hero.css";
import "../styles/solution.css";
import Header from "../components/Header";
import Card from "../components/Card";
import "../styles/testimonials.css";
import TestimonialCard from "../components/TestimonialCard";
import "../styles/pricing.css";
import Check from "../assets/check.svg";
import "../styles/contact.css";
import BolachaImg from "../assets/images/bolacha.jpg";
import CaseiroImg from "../assets/images/caseiro.jpg";
import EntregaImg from "../assets/images/entrega.jpg";
import "../styles/footer.css";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendContactEmail() {
    setEmail("");
    setMessage("");
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        message,
      }),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      throw new Error(body.error ?? "Erro ao enviar mensagem.");
    }
  }
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo Bolachas da nona" height={80} />
          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Ínicio</a>
              </li>
              <li>
                <a
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  href="#solution"
                >
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
          <div className="desktop-only">
            <div className="flex items-center">
              <Button text="Peça pelo WhatsApp" />
            </div>
          </div>
          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a href="#">Início</a>
                    </li>
                    <li>
                      <a href="#solution">Diferenciais</a>
                    </li>
                    <li>
                      <a href="#testimonials">Depoimentos</a>
                    </li>
                    <li>
                      <a href="#pricing">Preços</a>
                    </li>
                    <li>
                      <a href="#contact">Contato</a>
                    </li>
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>

      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
        </span>
        <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

        <div className="container content">
          <p className="desktop-only">Olá</p>
          <h1>Bolachas artesanais feitas com carinho, como na casa da nona.</h1>
          <p>
            Receitas de família preparadas à mão, com ingredientes selecionados
            e aquele sabor que traz boas lembranças.
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="WhatsApp" />
            </span>
            <span className="desktop-only">
              <Button text="Ver sabores" secondary />
            </span>
          </div>
        </div>
      </section>

      <section className="container" id="solution">
        <Header title="Por que escolher a Nona?" subtitle="Feitas com carinho">
          Receitas de família preparadas artesanalmente, com ingredientes
          selecionados e aquele sabor caseiro que traz boas lembranças em cada
          mordida.
        </Header>

        <section className="even-columns">
          <Card
            img={BolachaImg}
            alt="bolacha artesanal"
            title="Receitas de Família"
            text="Cada bolacha é feita seguindo receitas tradicionais passadas de geração em geração."
          />

          <Card
            img={CaseiroImg}
            alt="feito com carinho"
            title="Feitas à Mão"
            text="Produção artesanal em pequenos lotes para garantir sabor e qualidade."
          />

          <Card
            img={EntregaImg}
            alt="entrega"
            title="Sempre Fresquinhas"
            text="Preparadas com ingredientes selecionados e embaladas com cuidado."
          />
        </section>
      </section>

      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">Quem prova, aprova</p>
            <h2>O que nossos clientes dizem</h2>
          </span>
          <p>
            Nada nos deixa mais felizes do que ver nossos clientes satisfeitos.
            Confira alguns comentários de quem já experimentou as bolachas da
            Nona.
          </p>
        </header>

        <section className="carousel">
          <div className="carousel-content">
            <TestimonialCard
              profileImg="https://yt3.googleusercontent.com/ytc/AIdro_mGeqR-RurqK4fcF27t8wlUDrLoX1dtgUeLHxsf2sUPlQ=s900-c-k-c0x00ffffff-no-rj"
              testimony="As bolachas de coco são maravilhosas, lembram as que minha avó fazia."
              rating={5}
              name="Érick Jacquin"
            />

            <TestimonialCard
              profileImg="https://pbs.twimg.com/media/BuDSyPwCQAEDds4.jpg"
              testimony="Muito saborosas e sempre fresquinhas. Recomendo!"
              rating={5}
              name="Neymar Jr"
            />

            <TestimonialCard
              profileImg="https://randomuser.me/api/portraits/women/44.jpg"
              testimony="Comprei para o café da tarde e toda a família adorou."
              rating={5}
              name="Maria Oliveira"
            />

            <TestimonialCard
              profileImg="https://randomuser.me/api/portraits/men/32.jpg"
              testimony="Ótimo atendimento e bolachas deliciosas."
              rating={5}
              name="Carlos Souza"
            />

            <TestimonialCard
              profileImg="https://randomuser.me/api/portraits/women/68.jpg"
              testimony="A bolacha pintada é linda e muito gostosa."
              rating={5}
              name="Ana Ferreira"
            />

            <TestimonialCard
              profileImg="https://randomuser.me/api/portraits/men/15.jpg"
              testimony="As bolachas de coco são as melhores que já provei."
              rating={5}
              name="João Martins"
            />

            <TestimonialCard
              profileImg="https://randomuser.me/api/portraits/women/25.jpg"
              testimony="Chegaram fresquinhas e muito bem embaladas."
              rating={5}
              name="Fernanda Lima"
            />
          </div>
        </section>
      </section>

      <section id="pricing" className="container">
        <header>
          <p className="desktop-only">Nossos produtos</p>
          <h2>Kits e Encomendas</h2>
        </header>

        <section className="even-columns gap-1.5">
          <div className="pricing-card">
            <span className="plan">
              <h3>Bolacha de Coco</h3>
              <p>
                Receita tradicional de coco, crocante e feita artesanalmente.
              </p>
            </span>

            <h2>R$ 20,00</h2>

            <Button text="Pedir pelo WhatsApp" secondary />

            <span className="hr" />

            <span className="features">
              <img src={Check} alt="check" width={24} height={24} />
              <p>10 unidades</p>
            </span>
          </div>

          <div className="pricing-card premium">
            <span className="bonus">
              <p>MAIS VENDIDA</p>
            </span>

            <span className="plan">
              <h3>Bolacha Pintada</h3>
              <p>Decorada e preparada com o carinho da Nona.</p>
            </span>

            <h2>R$ 15,00</h2>

            <Button text="Pedir pelo WhatsApp" />

            <span className="hr" />

            <span className="features">
              <img src={Check} alt="check" width={24} height={24} />
              <p>10 unidades</p>
            </span>
          </div>

          <div className="pricing-card">
            <span className="plan">
              <h3>Bolacha Tradicional</h3>
              <p>O sabor clássico das receitas de família.</p>
            </span>

            <h2>R$ 10,00</h2>

            <Button text="Pedir pelo WhatsApp" secondary />

            <span className="hr" />

            <span className="features">
              <img src={Check} alt="check" width={24} height={24} />
              <p>10 unidades</p>
            </span>
          </div>
        </section>
      </section>

      <section id="contact" className="container">
        <header>
          <span>
            <p className="desktop-only">Faça seu pedido</p>
            <h2>Entre em contato</h2>
          </span>
          <p>
            Ficou com vontade de experimentar? Entre em contato para fazer seu
            pedido, tirar dúvidas ou saber mais sobre nossas bolachas
            artesanais. Será um prazer atender você. 🍪
          </p>
        </header>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendContactEmail();
          }}
        >
          <label>
            <input
              type="email"
              placeholder="Seu melhor email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>

          <label>
            <input
              type="text"
              placeholder="Como podemos ajudar?"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </label>

          <button type="submit">Enviar</button>
        </form>
      </section>

      <footer id="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <img src={Logo} alt="Bolachas da Nona" />

            <p>
              Bolachas artesanais feitas com carinho, seguindo receitas de
              família que atravessam gerações.
            </p>
          </div>

          <div className="footer-links">
            <h4>Navegação</h4>

            <a href="#">Início</a>
            <a href="#solution">Diferenciais</a>
            <a href="#pricing">Sabores</a>
            <a href="#testimonials">Depoimentos</a>
            <a href="#contact">Contato</a>
          </div>

          <div className="footer-contact">
            <h4>Contato</h4>

            <p>WhatsApp: (45) 99999-9999</p>
            <p>Cascavel - PR</p>
            <p>contato@bolachasdanona.com.br</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Bolachas da Nona. Feito com muito
            carinho.
          </p>
        </div>
      </footer>
    </>
  );
}
