import {
  Oxanium,
  Sora,
  Space_Grotesk,
} from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-tech",
});

const whatsappNumber = "5591981226843";
const whatsappDisplay = "(91) 98122-6843";
const whatsappUrl = `https://wa.me/${whatsappNumber}`;

const instagramUrl =
  "https://www.instagram.com/sixexpressltda/";
const instagramDisplay = "@sixexpressltda";

const email = "sixexpress@outlook.com.br";
const mailtoUrl = `mailto:${email}`;

/* ======================================================
   ÍCONES SOCIAIS
====================================================== */

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.5 0 .15 5.36.15 11.95c0 2.11.55 4.16 1.6 5.97L.05 24l6.22-1.63a11.9 11.9 0 0 0 5.8 1.48h.01c6.58 0 11.94-5.36 11.94-11.95 0-3.19-1.24-6.19-3.5-8.42Z"
        fill="currentColor"
      />
      <path
        d="M17.42 14.53c-.3-.15-1.75-.87-2.02-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.23-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.19 1.87.12.57-.09 1.75-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"
        fill="#050506"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4.2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17.4" cy="6.8" r="1.15" fill="currentColor" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="2.5"
        y="4.5"
        width="19"
        height="15"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ======================================================
   ÍCONES DO SITE
====================================================== */

function PackageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m4.5 7.5 7.5 4.3 7.5-4.3M12 12v9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7.5 4.9 15.5 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="10"
        r="2.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 19 6v5.5c0 4.3-2.8 7.5-7 9.5-4.2-2-7-5.2-7-9.5V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m8.8 12 2 2 4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
      <path
        d="m15 9 5-5M17 4h3v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="2.7"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m3 8 4-3 4 2-3 3 3 3 2-2 5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m21 8-4-3-4 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m7 14 3 3c1.1 1.1 2.4 1.1 3.5 0l1.5-1.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 19 6v5.5c0 4.3-2.8 7.5-7 9.5-4.2-2-7-5.2-7-9.5V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13.5 2 6 13h5l-.5 9L18 10h-5l.5-8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main
      className={`siteHome ${spaceGrotesk.variable} ${sora.variable} ${oxanium.variable}`}
    >
      <div className="backgroundEffects">
        <div className="glow glowOne" />
        <div className="glow glowTwo" />
        <div className="heroGridEffect" />
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="container headerContent">
          <a href="#inicio" className="logo">
            <img src="/logo.png" alt="SIX Express" />
          </a>

          <nav className="nav">
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#empresa">A SIX</a>
            <a href="#essencia">Missão e Visão</a>
            <a href="#valores">Valores</a>
            <a href="#trabalhe">Trabalhe Conosco</a>
            <a href="#contato">Contato</a>
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="headerCta iconButton"
          >
            <span className="smallIcon whatsappColor">
              <WhatsAppIcon />
            </span>
            Solicitar atendimento
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="container heroContainer">
          <div className="heroContent">
            <div className="tag">
              <span />
              ENTREGAS EXPRESSAS
            </div>

            <h1>
              Entrega com
              <strong> velocidade.</strong>
              <br />
              Feita com excelência.
            </h1>

            <p>
              Soluções rápidas, seguras e confiáveis em transporte expresso
              para empresas e pessoas que não podem parar.
            </p>

            <div className="heroButtons">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="primaryButton heroWhatsapp"
              >
                <span className="buttonSocialIcon">
                  <WhatsAppIcon />
                </span>

                Solicitar atendimento
                <span className="arrow">→</span>
              </a>

              <a href="#trabalhe" className="secondaryButton">
                Trabalhe conosco
              </a>
            </div>

            <div className="coverage">
              <span>Atendimento regional</span>
              <strong>Ananindeua</strong>
              <i />
              <strong>Marituba</strong>
              <i />
              <strong>Barcarena</strong>
              <i />
              <strong>e região</strong>
            </div>

            <div className="miniBenefits">
              <div className="miniBenefit">
                <span>⚡</span>
                <div>
                  <strong>Agilidade</strong>
                  <small>Atendimento rápido</small>
                </div>
              </div>

              <div className="miniBenefit">
                <span>✓</span>
                <div>
                  <strong>Segurança</strong>
                  <small>Cuidado em cada entrega</small>
                </div>
              </div>

              <div className="miniBenefit">
                <span>◆</span>
                <div>
                  <strong>Confiança</strong>
                  <small>Serviço profissional</small>
                </div>
              </div>
            </div>
          </div>

          <div className="heroImageArea">
            <div className="redCircle" />
            <div className="heroImageGlow" />

            <img
              src="/motoqueiro.png"
              alt="Entregador SIX Express"
              className="heroRider"
            />

            <div className="floating floatingTop">
              <div className="floatIcon">⚡</div>

              <div>
                <strong>Entrega expressa</strong>
                <span>Agilidade quando você precisa</span>
              </div>
            </div>

            <div className="floating floatingBottom">
              <div className="floatIcon">✓</div>

              <div>
                <strong>Transporte seguro</strong>
                <span>Confiança em cada trajeto</span>
              </div>
            </div>

            <div className="sixCard">
              <span>PADRÃO SIX</span>
              <strong>Velocidade com responsabilidade.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="section services" id="servicos">
        <div className="container">
          <div className="sectionHeader">
            <div>
              <span className="sectionTag">NOSSOS SERVIÇOS</span>

              <h2>
                Transporte para quem
                <strong> não pode esperar.</strong>
              </h2>
            </div>

            <p>
              Atendimento pensado para oferecer rapidez, organização,
              comunicação e segurança do início ao fim.
            </p>
          </div>

          <div className="serviceGrid">
            <article className="serviceCard">
              <span className="number">01</span>

              <div className="serviceIcon modernCardIcon">
                <PackageIcon />
              </div>

              <h3>Entregas Expressas</h3>

              <p>
                Soluções rápidas para documentos, cartas, cartões, pequenos
                volumes e outras demandas que exigem prioridade.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inlineSocialLink"
              >
                <span className="tinySocialIcon whatsappColor">
                  <WhatsAppIcon />
                </span>

                Solicitar atendimento <span>→</span>
              </a>
            </article>

            <article className="serviceCard featured">
              <span className="number">02</span>

              <div className="serviceIcon modernCardIcon">
                <MapPinIcon />
              </div>

              <h3>Cobertura Regional</h3>

              <p>
                Atendimento para diferentes municípios da região, com foco em
                rapidez, proximidade e eficiência.
              </p>

              <a href="#empresa">
                Ver atuação da SIX <span>→</span>
              </a>
            </article>

            <article className="serviceCard">
              <span className="number">03</span>

              <div className="serviceIcon modernCardIcon">
                <ShieldCheckIcon />
              </div>

              <h3>Transporte Profissional</h3>

              <p>
                Organização, responsabilidade e cuidado em todas as etapas da
                entrega.
              </p>

              <a href="#empresa">
                Conhecer a SIX <span>→</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="section company" id="empresa">
        <div className="container companyGrid">
          <div className="companyImageCard">
            <img
              src="/regiao.jpeg"
              alt="Cobertura regional e serviços da SIX Express"
            />
          </div>

          <div className="companyContent">
            <span className="sectionTag">QUEM SOMOS</span>

            <h2>
              Mais que entregar.
              <strong> Fazer acontecer.</strong>
            </h2>

            <p>
              A SIX Express nasceu para oferecer soluções em transporte
              expresso com velocidade, segurança, proximidade e excelência.
            </p>

            <p>
              Trabalhamos para conectar pessoas e empresas por meio de uma
              operação ágil, organizada e comprometida com cada entrega.
            </p>

            <p>
              Nosso foco é oferecer uma experiência simples para o cliente e
              eficiente durante todo o trajeto.
            </p>

            <div className="companyPhrase">
              <span>“</span>

              <div>
                <strong>
                  Entrega com velocidade, feita com excelência.
                </strong>

                <small>
                  Agilidade que conecta. Compromisso que entrega.
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO E VISÃO */}
      <section className="section identity" id="essencia">
        <div className="container">
          <div className="identityTitle">
            <span className="sectionTag">NOSSA ESSÊNCIA</span>

            <h2>
              O que direciona
              <strong> a SIX Express.</strong>
            </h2>
          </div>

          <div className="identityGrid">
            <article className="identityCard mission">
              <div className="identityTop">
                <span>01</span>

                <div className="identityIcon">
                  <TargetIcon />
                </div>
              </div>

              <span className="identityLabel">
                MISSÃO
              </span>

              <h3>
                Entregar soluções rápidas e confiáveis em transporte expresso.
              </h3>

              <p>
                Facilitar a rotina de nossos clientes por meio de um serviço
                ágil, responsável e profissional.
              </p>

              <div className="identityLine" />
            </article>

            <article className="identityCard vision">
              <div className="identityTop">
                <span>02</span>

                <div className="identityIcon">
                  <EyeIcon />
                </div>
              </div>

              <span className="identityLabel">
                VISÃO
              </span>

              <h3>
                Ser reconhecida como a empresa de entregas expressas mais
                confiável e eficiente da região.
              </h3>

              <p>
                Crescer mantendo proximidade, qualidade e compromisso em cada
                atendimento.
              </p>

              <div className="identityLine" />
            </article>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="section valuesSection" id="valores">
        <div className="container">
          <div className="valuesHeading">
            <span className="sectionTag">NOSSOS VALORES</span>

            <h2>
              Quatro pilares.
              <strong> Um só padrão.</strong>
            </h2>
          </div>

          <div className="valuesGrid">
            <article className="valueCard">
              <span className="valueNumber">01</span>

              <div className="valueIcon modernValueIcon">
                <HandshakeIcon />
              </div>

              <h3>Confiança</h3>

              <p>
                Construímos relações sólidas por meio de responsabilidade,
                transparência e compromisso.
              </p>
            </article>

            <article className="valueCard">
              <span className="valueNumber">02</span>

              <div className="valueIcon modernValueIcon">
                <ShieldIcon />
              </div>

              <h3>Segurança</h3>

              <p>
                Tratamos cada entrega com cuidado e responsabilidade durante
                todo o processo.
              </p>
            </article>

            <article className="valueCard">
              <span className="valueNumber">03</span>

              <div className="valueIcon modernValueIcon">
                <BoltIcon />
              </div>

              <h3>Agilidade</h3>

              <p>
                Entendemos que tempo importa e buscamos respostas e soluções
                rápidas.
              </p>
            </article>

            <article className="valueCard">
              <span className="valueNumber">04</span>

              <div className="valueIcon modernValueIcon">
                <StarIcon />
              </div>

              <h3>Excelência</h3>

              <p>
                Buscamos qualidade em cada atendimento, processo e entrega.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section how">
        <div className="container">
          <div className="centerTitle">
            <span className="sectionTag">COMO FUNCIONA</span>

            <h2>
              Simples para você.
              <strong> Ágil do começo ao fim.</strong>
            </h2>
          </div>

          <div className="steps">
            <article>
              <span>01</span>
              <h3>Solicite</h3>
              <p>Entre em contato e informe os dados da sua entrega.</p>
            </article>

            <article>
              <span>02</span>
              <h3>Organizamos</h3>
              <p>Nossa equipe avalia a demanda e organiza o atendimento.</p>
            </article>

            <article>
              <span>03</span>
              <h3>Transportamos</h3>
              <p>
                A entrega segue com rapidez, responsabilidade e cuidado.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Concluímos</h3>
              <p>
                Finalizamos o atendimento com eficiência e profissionalismo.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* TRABALHE CONOSCO */}
      <section className="section work" id="trabalhe">
        <div className="container">
          <div className="workBox">
            <div className="workGlow" />

            <div className="workInfo">
              <span className="sectionTag">FAÇA PARTE DA SIX</span>

              <h2>
                Pessoas fazem
                <strong> grandes entregas.</strong>
              </h2>

              <p>
                Quer trabalhar com a SIX Express? Cadastre-se no nosso Banco
                de Talentos e deixe seu perfil disponível para futuras
                oportunidades.
              </p>

              <div className="workActions">
                <a
                  href="/trabalhe-conosco"
                  className="primaryButton"
                >
                  Quero trabalhar na SIX
                  <span>→</span>
                </a>

                <a
                  href={mailtoUrl}
                  className="secondaryButton iconButton"
                >
                  <span className="smallIcon">
                    <EmailIcon />
                  </span>

                  Enviar e-mail
                </a>
              </div>
            </div>

            <div className="workContact">
              <div className="workContactItem contactInfoWithIcon">
                <div className="workSocialIcon whatsappColor">
                  <WhatsAppIcon />
                </div>

                <div>
                  <span>WHATSAPP</span>
                  <strong>{whatsappDisplay}</strong>
                </div>
              </div>

              <div className="workContactItem contactInfoWithIcon">
                <div className="workSocialIcon instagramColor">
                  <InstagramIcon />
                </div>

                <div>
                  <span>INSTAGRAM</span>
                  <strong>{instagramDisplay}</strong>
                </div>
              </div>

              <div className="workContactItem contactInfoWithIcon">
                <div className="workSocialIcon emailColor">
                  <EmailIcon />
                </div>

                <div>
                  <span>E-MAIL</span>
                  <strong>{email}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="section contact" id="contato">
        <div className="container">
          <div className="contactIntro">
            <span className="sectionTag">FALE COM A SIX</span>

            <h2>
              Escolha o canal
              <strong> mais fácil para você.</strong>
            </h2>

            <p>
              Nossa equipe está pronta para receber solicitações, dúvidas e
              oportunidades.
            </p>
          </div>

          <div className="contactGrid">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="contactCard whatsappCard"
            >
              <div className="contactIcon whatsappIcon">
                <WhatsAppIcon />
              </div>

              <div className="contactText">
                <span>WHATSAPP</span>
                <strong>{whatsappDisplay}</strong>
                <small>Atendimento rápido e direto</small>
              </div>

              <b>→</b>
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="contactCard"
            >
              <div className="contactIcon instagramIcon">
                <InstagramIcon />
              </div>

              <div className="contactText">
                <span>INSTAGRAM</span>
                <strong>{instagramDisplay}</strong>
                <small>Acompanhe a SIX nas redes sociais</small>
              </div>

              <b>→</b>
            </a>

            <a
              href={mailtoUrl}
              className="contactCard"
            >
              <div className="contactIcon emailIcon">
                <EmailIcon />
              </div>

              <div className="contactText">
                <span>E-MAIL</span>
                <strong>{email}</strong>
                <small>Envie uma mensagem para nossa equipe</small>
              </div>

              <b>→</b>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container footerGrid">
          <div className="footerBrand">
            <img src="/logo.png" alt="SIX Express" />

            <p>
              Entrega com velocidade, feita com excelência.
            </p>

            <div className="footerSocial">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className="footerSocialIcon whatsappColor">
                  <WhatsAppIcon />
                </span>
                WhatsApp
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className="footerSocialIcon instagramColor">
                  <InstagramIcon />
                </span>
                Instagram
              </a>

              <a href={mailtoUrl}>
                <span className="footerSocialIcon emailColor">
                  <EmailIcon />
                </span>
                E-mail
              </a>
            </div>
          </div>

          <div className="footerLinks">
            <h4>Navegação</h4>

            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#empresa">A SIX</a>
            <a href="#essencia">Missão e Visão</a>
            <a href="#valores">Valores</a>
            <a href="#trabalhe">Trabalhe Conosco</a>
            <a href="#contato">Contato</a>
          </div>

          <div className="footerContact">
            <h4>Contato</h4>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="footerContactLink"
            >
              <span className="footerSocialIcon whatsappColor">
                <WhatsAppIcon />
              </span>
              {whatsappDisplay}
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="footerContactLink"
            >
              <span className="footerSocialIcon instagramColor">
                <InstagramIcon />
              </span>
              {instagramDisplay}
            </a>

            <a
              href={mailtoUrl}
              className="footerContactLink"
            >
              <span className="footerSocialIcon emailColor">
                <EmailIcon />
              </span>
              {email}
            </a>
          </div>
        </div>

        <div className="container footerBottom">
          © SIX Express. Todos os direitos reservados.
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="floatingWhatsapp modernWhatsapp"
        aria-label="Falar com a SIX Express pelo WhatsApp"
      >
        <WhatsAppIcon />
      </a>

      <style>{`
        .siteHome {
          font-family:
            var(--font-space),
            Arial,
            sans-serif;
        }

        .siteHome h1,
        .siteHome h2 {
          font-family:
            var(--font-tech),
            var(--font-space),
            sans-serif;
        }

        .siteHome h3,
        .siteHome .serviceCard h3,
        .siteHome .identityCard h3,
        .siteHome .valueCard h3,
        .siteHome .steps h3 {
          font-family:
            var(--font-sora),
            var(--font-space),
            sans-serif;
          font-weight: 600;
        }

        .siteHome .serviceCard p,
        .siteHome .identityCard p,
        .siteHome .valueCard p,
        .siteHome .steps p {
          font-family:
            var(--font-sora),
            var(--font-space),
            sans-serif;
          font-weight: 400;
          letter-spacing: -0.1px;
        }

        .siteHome .sectionTag,
        .siteHome .tag,
        .siteHome .identityLabel,
        .siteHome .number,
        .siteHome .valueNumber {
          font-family:
            var(--font-sora),
            sans-serif;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .siteHome h1 {
          font-weight: 600;
          letter-spacing: -3px;
        }

        .siteHome h2 {
          font-weight: 600;
          letter-spacing: -2px;
        }

        .iconButton {
          display: inline-flex;
          align-items: center;
          gap: 9px;
        }

        .smallIcon {
          width: 17px;
          height: 17px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .smallIcon svg,
        .buttonSocialIcon svg,
        .tinySocialIcon svg,
        .contactIcon svg,
        .workSocialIcon svg,
        .footerSocialIcon svg,
        .modernWhatsapp svg,
        .modernCardIcon svg,
        .modernValueIcon svg,
        .identityIcon svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .buttonSocialIcon {
          width: 18px;
          height: 18px;
          display: inline-flex;
        }

        .heroWhatsapp {
          display: inline-flex;
          align-items: center;
        }

        .heroWhatsapp .arrow {
          margin-left: 4px;
        }

        .tinySocialIcon {
          width: 14px;
          height: 14px;
          display: inline-flex;
        }

        .inlineSocialLink {
          display: inline-flex !important;
          align-items: center;
          gap: 7px;
        }

        .whatsappColor {
          color: #25d366;
        }

        .instagramColor {
          color: #ff3a76;
        }

        .emailColor {
          color: #ff343f;
        }

        /* SERVIÇOS */

        .modernCardIcon {
          width: 52px;
          height: 52px;
          padding: 13px;
          color: #ff2f3d;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(255, 50, 65, 0.14),
              transparent 70%
            ),
            rgba(255, 20, 35, 0.045);
          box-shadow:
            inset 0 0 0 1px rgba(255, 60, 70, 0.08),
            0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .serviceCard:hover .modernCardIcon {
          transform: translateY(-2px) scale(1.04);
          color: #ff5964;
        }

        /* MISSÃO E VISÃO */

        .identityIcon {
          width: 46px;
          height: 46px;
          padding: 11px;
          border-radius: 13px;
          color: #ff3442;
          border: 1px solid rgba(255, 45, 60, 0.18);
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(255, 50, 70, 0.16),
              transparent 75%
            ),
            rgba(255, 20, 35, 0.035);
          box-shadow:
            0 12px 28px rgba(0, 0, 0, 0.2);
        }

        .identityCard:hover .identityIcon {
          transform: translateY(-2px);
          color: #ff5964;
        }

        .identityCard h3 {
          font-size: clamp(22px, 2.1vw, 31px);
          line-height: 1.28;
          letter-spacing: -1px;
        }

        .identityCard p {
          font-size: 12px;
          line-height: 1.8;
        }

        /* VALORES */

        .modernValueIcon {
          width: 50px;
          height: 50px;
          padding: 12px;
          color: #ff3442;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(255, 50, 70, 0.15),
              transparent 70%
            ),
            rgba(255, 20, 35, 0.045);
          box-shadow:
            inset 0 0 0 1px rgba(255, 50, 60, 0.07);
        }

        .valueCard:hover .modernValueIcon {
          transform: translateY(-3px) scale(1.04);
          color: #ff5964;
        }

        .valueCard h3 {
          font-size: 18px;
          letter-spacing: -0.5px;
        }

        .valueCard p {
          font-size: 11px;
          line-height: 1.8;
        }

        /* CONTATOS */

        .contactInfoWithIcon {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .workSocialIcon {
          width: 38px;
          height: 38px;
          flex: 0 0 38px;
          padding: 9px;
          border-radius: 11px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.025);
        }

        .contactIcon {
          padding: 11px;
        }

        .contactIcon.whatsappIcon {
          color: #25d366;
        }

        .contactIcon.instagramIcon {
          color: #ff3a76;
        }

        .contactIcon.emailIcon {
          color: #ff343f;
        }

        /* FOOTER */

        .footerSocial a {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .footerSocialIcon {
          width: 15px;
          height: 15px;
          display: inline-flex;
          flex-shrink: 0;
        }

        .footerContactLink {
          display: flex !important;
          align-items: center;
          gap: 8px;
        }

        /* WHATSAPP FLUTUANTE */

        .modernWhatsapp {
          padding: 14px;
          color: #ffffff !important;
        }

        .modernWhatsapp svg {
          width: 24px;
          height: 24px;
        }
      `}</style>
    </main>
  );
}