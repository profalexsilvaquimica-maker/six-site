"use client";

import {
  ChangeEvent,
  FormEvent,
  useMemo,
  useState,
} from "react";

type Curriculo = {
  nome: string;
  tipo: string;
  tamanho: number;
  conteudo: string;
};

type Formulario = {
  nome: string;
  cpf: string;
  rg: string;
  telefone: string;
  email: string;
  nascimento: string;
  cep: string;
  cidade: string;
  endereco: string;
  bairro: string;

  tipoVeiculo: string;
  veiculoProprio: boolean;
  numeroCnh: string;
  categoriaCnh: string;
  validadeCnh: string;
  marcaModelo: string;
  anoVeiculo: string;
  placa: string;

  areaAtuacao: string;
  disponibilidade: string;

  chavePix: string;
  banco: string;
  agencia: string;
  conta: string;
  tipoConta: string;

  contatoEmergencia: string;
  telefoneEmergencia: string;

  observacoes: string;
};

const inicial: Formulario = {
  nome: "",
  cpf: "",
  rg: "",
  telefone: "",
  email: "",
  nascimento: "",
  cep: "",
  cidade: "",
  endereco: "",
  bairro: "",

  tipoVeiculo: "Carro",
  veiculoProprio: true,
  numeroCnh: "",
  categoriaCnh: "B",
  validadeCnh: "",
  marcaModelo: "",
  anoVeiculo: "",
  placa: "",

  areaAtuacao: "",
  disponibilidade: "",

  chavePix: "",
  banco: "",
  agencia: "",
  conta: "",
  tipoConta: "Corrente",

  contatoEmergencia: "",
  telefoneEmergencia: "",

  observacoes: "",
};

const API_FINANCEIRO =
  process.env.NEXT_PUBLIC_SIX_FINANCEIRO_API ||
  "https://six-financeiro.vercel.app";

export default function TrabalheConoscoPage() {
  const [formulario, setFormulario] =
    useState<Formulario>(inicial);

  const [curriculo, setCurriculo] =
    useState<Curriculo | null>(null);

  const [carregandoCurriculo, setCarregandoCurriculo] =
    useState(false);

  const [enviando, setEnviando] =
    useState(false);

  const [sucesso, setSucesso] =
    useState(false);

  const [erro, setErro] =
    useState("");

  const exigeDadosVeiculo =
    useMemo(
      () =>
        formulario.tipoVeiculo === "Carro" ||
        formulario.tipoVeiculo === "Moto",
      [formulario.tipoVeiculo]
    );

  function alterar<K extends keyof Formulario>(
    campo: K,
    valor: Formulario[K]
  ) {
    setFormulario((atual) => ({
      ...atual,
      [campo]: valor,
    }));
  }

  function aoMudarTipoVeiculo(valor: string) {
    setFormulario((atual) => {
      const proximo = {
        ...atual,
        tipoVeiculo: valor,
      };

      if (valor === "Bicicleta") {
        proximo.numeroCnh = "";
        proximo.categoriaCnh = "";
        proximo.validadeCnh = "";
        proximo.anoVeiculo = "";
        proximo.placa = "";
      }

      if (
        valor === "Carro" &&
        !proximo.categoriaCnh
      ) {
        proximo.categoriaCnh = "B";
      }

      if (
        valor === "Moto" &&
        !proximo.categoriaCnh
      ) {
        proximo.categoriaCnh = "A";
      }

      return proximo;
    });
  }

  async function arquivoParaBase64(
    arquivo: File
  ) {
    return await new Promise<string>(
      (resolve, reject) => {
        const leitor =
          new FileReader();

        leitor.onload = () => {
          const resultado =
            String(leitor.result || "");

          const base64 =
            resultado.includes(",")
              ? resultado.split(",")[1]
              : resultado;

          resolve(base64);
        };

        leitor.onerror = () =>
          reject(
            new Error(
              "Não foi possível ler o currículo."
            )
          );

        leitor.readAsDataURL(arquivo);
      }
    );
  }

  async function adicionarCurriculo(
    evento: ChangeEvent<HTMLInputElement>
  ) {
    const arquivo =
      evento.target.files?.[0];

    evento.target.value = "";

    if (!arquivo) return;

    const extensoesPermitidas = [
      ".pdf",
      ".doc",
      ".docx",
    ];

    const nomeMinusculo =
      arquivo.name.toLowerCase();

    const permitido =
      extensoesPermitidas.some(
        (extensao) =>
          nomeMinusculo.endsWith(extensao)
      );

    if (!permitido) {
      setErro(
        "Envie o currículo em PDF, DOC ou DOCX."
      );
      return;
    }

    const limite =
      5 * 1024 * 1024;

    if (arquivo.size > limite) {
      setErro(
        "O currículo deve ter no máximo 5 MB."
      );
      return;
    }

    setErro("");
    setCarregandoCurriculo(true);

    try {
      const conteudo =
        await arquivoParaBase64(arquivo);

      setCurriculo({
        nome: arquivo.name,
        tipo:
          arquivo.type ||
          "application/octet-stream",
        tamanho: arquivo.size,
        conteudo,
      });
    } catch (error) {
      setErro(
        error instanceof Error
          ? error.message
          : "Não foi possível anexar o currículo."
      );
    } finally {
      setCarregandoCurriculo(false);
    }
  }

  function validar() {
    if (!formulario.nome.trim())
      return "Preencha o nome completo.";

    if (!formulario.cpf.trim())
      return "Preencha o CPF.";

    if (!formulario.rg.trim())
      return "Preencha o RG.";

    if (!formulario.telefone.trim())
      return "Preencha o telefone com DDD.";

    if (!formulario.nascimento)
      return "Preencha a data de nascimento.";

    if (!formulario.cidade.trim())
      return "Preencha a cidade.";

    if (!formulario.endereco.trim())
      return "Preencha o endereço.";

    if (!formulario.bairro.trim())
      return "Preencha o bairro.";

    if (exigeDadosVeiculo) {
      if (!formulario.numeroCnh.trim())
        return "Preencha o número da CNH.";

      if (!formulario.categoriaCnh.trim())
        return "Selecione a categoria da CNH.";

      if (!formulario.marcaModelo.trim())
        return "Preencha a marca/modelo do veículo.";

      if (!formulario.placa.trim())
        return "Preencha a placa do veículo.";
    }

    if (!formulario.areaAtuacao.trim())
      return "Preencha a área de atuação.";

    if (!formulario.chavePix.trim())
      return "Preencha a chave Pix.";

    return "";
  }

  async function enviar(
    evento: FormEvent
  ) {
    evento.preventDefault();

    setErro("");
    setSucesso(false);

    const validacao =
      validar();

    if (validacao) {
      setErro(validacao);
      return;
    }

    setEnviando(true);

    try {
      const resposta =
        await fetch(
          `${API_FINANCEIRO}/api/candidaturas-publicas`,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              ...formulario,
              curriculo,
            }),
          }
        );

      const dados =
        await resposta.json();

      if (!resposta.ok) {
        throw new Error(
          dados?.erro ||
            "Não foi possível enviar sua candidatura."
        );
      }

      setFormulario(inicial);
      setCurriculo(null);
      setSucesso(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      setErro(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar sua candidatura."
      );
    } finally {
      setEnviando(false);
    }
  }

  function tamanhoArquivo(
    bytes: number
  ) {
    if (bytes < 1024) {
      return `${bytes} B`;
    }

    if (
      bytes <
      1024 * 1024
    ) {
      return `${(
        bytes / 1024
      ).toFixed(1)} KB`;
    }

    return `${(
      bytes /
      1024 /
      1024
    ).toFixed(1)} MB`;
  }

  return (
    <main className="six-careers">
      <div className="six-bg-grid" />
      <div className="six-glow six-glow-left" />
      <div className="six-glow six-glow-right" />

      <header className="six-header">
        <div className="six-header-inner">
          <a
            href="/"
            className="six-logo-link"
          >
            <img
              src="/logo.png"
              alt="SIX Express"
              className="six-logo"
            />
          </a>

          <div className="six-header-right">
            <span className="six-header-label">
              BANCO DE TALENTOS
            </span>

            <a
              href="/"
              className="six-back"
            >
              ← Voltar ao site
            </a>
          </div>
        </div>
      </header>

      <div className="six-page-grid">
        <aside className="six-info-panel">
          <div className="six-panel-glow" />

          <div className="six-info-content">
            <span className="six-kicker">
              TRABALHE CONOSCO
            </span>

            <h1 className="six-title">
              Banco de Talentos

              <span>
                Seu próximo caminho pode começar aqui.
              </span>
            </h1>

            <p className="six-intro">
              Faça parte da SIX Express.
              Cadastre seu perfil e deixe
              seus dados disponíveis para
              futuras oportunidades em
              nossa equipe.
            </p>

            <div className="six-steps">
              <InfoCard
                numero="01"
                titulo="Faça seu cadastro"
                texto="Informe seus dados, disponibilidade e área de atuação."
              />

              <InfoCard
                numero="02"
                titulo="Apresente seu perfil"
                texto="Anexe seu currículo e registre suas principais informações profissionais."
              />

              <InfoCard
                numero="03"
                titulo="Fique disponível para oportunidades"
                texto="Seu cadastro ficará no Banco de Talentos da SIX Express para futuras oportunidades."
              />
            </div>

            <div className="six-mini-grid">
              <div>
                <strong>Agilidade</strong>
                <span>Cadastro simples</span>
              </div>

              <div>
                <strong>Organização</strong>
                <span>Perfil completo</span>
              </div>

              <div>
                <strong>Oportunidade</strong>
                <span>Faça parte</span>
              </div>
            </div>
          </div>
        </aside>

        <section className="six-form-column">
          <div className="six-form-heading">
            <span>
              CANDIDATO DO BANCO DE TALENTOS
            </span>

            <h2>
              Preencha seus dados
            </h2>

            <p>
              Os campos marcados com *
              são obrigatórios.
            </p>
          </div>

          {sucesso && (
            <div className="six-message six-success">
              <strong>
                Candidatura enviada com sucesso.
              </strong>

              <span>
                Seu cadastro foi encaminhado para o Banco de Talentos da SIX Express.
              </span>
            </div>
          )}

          {erro && (
            <div className="six-message six-error">
              {erro}
            </div>
          )}

          <form
            onSubmit={enviar}
            className="six-form"
          >
            <FormSectionTitle
              numero="01"
              titulo="Dados pessoais"
              descricao="Informações principais do candidato"
            />

            <div className="six-form-body">
              <div className="six-grid two">
                <Campo
                  label="Nome completo *"
                  valor={formulario.nome}
                  alterar={(valor) =>
                    alterar("nome", valor)
                  }
                  placeholder="Digite seu nome completo"
                />

                <Campo
                  label="CPF *"
                  valor={formulario.cpf}
                  alterar={(valor) =>
                    alterar("cpf", valor)
                  }
                  placeholder="000.000.000-00"
                />
              </div>

              <div className="six-grid three">
                <Campo
                  label="RG *"
                  valor={formulario.rg}
                  alterar={(valor) =>
                    alterar("rg", valor)
                  }
                  placeholder="Digite seu RG"
                />

                <Campo
                  label="Telefone com DDD *"
                  valor={formulario.telefone}
                  alterar={(valor) =>
                    alterar("telefone", valor)
                  }
                  placeholder="(91) 99999-9999"
                />

                <Campo
                  label="E-mail"
                  valor={formulario.email}
                  alterar={(valor) =>
                    alterar("email", valor)
                  }
                  tipo="email"
                  placeholder="seuemail@exemplo.com"
                />
              </div>

              <div className="six-grid three">
                <Campo
                  label="Data de nascimento *"
                  valor={formulario.nascimento}
                  alterar={(valor) =>
                    alterar(
                      "nascimento",
                      valor
                    )
                  }
                  tipo="date"
                />

                <Campo
                  label="CEP"
                  valor={formulario.cep}
                  alterar={(valor) =>
                    alterar("cep", valor)
                  }
                  placeholder="00000-000"
                />

                <Campo
                  label="Cidade *"
                  valor={formulario.cidade}
                  alterar={(valor) =>
                    alterar("cidade", valor)
                  }
                  placeholder="Digite sua cidade"
                />
              </div>

              <div className="six-grid two">
                <Campo
                  label="Endereço *"
                  valor={formulario.endereco}
                  alterar={(valor) =>
                    alterar("endereco", valor)
                  }
                  placeholder="Rua, número, complemento"
                />

                <Campo
                  label="Bairro *"
                  valor={formulario.bairro}
                  alterar={(valor) =>
                    alterar("bairro", valor)
                  }
                  placeholder="Digite seu bairro"
                />
              </div>
            </div>

            <FormSectionTitle
              numero="02"
              titulo="Veículo e CNH"
              descricao="Dados relacionados ao meio de transporte"
            />

            <div className="six-form-body">
              <div className="six-inner-card">
                <div className="six-grid four">
                  <div className="six-field">
                    <label>
                      Tipo de veículo *
                    </label>

                    <select
                      value={
                        formulario.tipoVeiculo
                      }
                      onChange={(evento) =>
                        aoMudarTipoVeiculo(
                          evento.target.value
                        )
                      }
                    >
                      <option>Carro</option>
                      <option>Moto</option>
                      <option>Bicicleta</option>
                      <option>Van</option>
                      <option>Caminhão</option>
                      <option>Outro</option>
                    </select>
                  </div>

                  {formulario.tipoVeiculo !==
                    "Bicicleta" && (
                    <>
                      <Campo
                        label={
                          exigeDadosVeiculo
                            ? "Nº da CNH *"
                            : "Nº da CNH"
                        }
                        valor={
                          formulario.numeroCnh
                        }
                        alterar={(valor) =>
                          alterar(
                            "numeroCnh",
                            valor
                          )
                        }
                        placeholder="Digite o número da CNH"
                      />

                      <div className="six-field">
                        <label>
                          Categoria CNH
                          {exigeDadosVeiculo
                            ? " *"
                            : ""}
                        </label>

                        <select
                          value={
                            formulario.categoriaCnh
                          }
                          onChange={(evento) =>
                            alterar(
                              "categoriaCnh",
                              evento.target.value
                            )
                          }
                        >
                          <option value="">
                            Selecione
                          </option>
                          <option>A</option>
                          <option>B</option>
                          <option>AB</option>
                          <option>C</option>
                          <option>D</option>
                          <option>E</option>
                        </select>
                      </div>

                      <Campo
                        label="Validade da CNH"
                        valor={
                          formulario.validadeCnh
                        }
                        alterar={(valor) =>
                          alterar(
                            "validadeCnh",
                            valor
                          )
                        }
                        tipo="date"
                      />
                    </>
                  )}
                </div>

                <label className="six-check">
                  <input
                    type="checkbox"
                    checked={
                      formulario.veiculoProprio
                    }
                    onChange={(evento) =>
                      alterar(
                        "veiculoProprio",
                        evento.target.checked
                      )
                    }
                  />

                  <span>
                    Veículo próprio
                  </span>
                </label>

                {formulario.tipoVeiculo ===
                "Bicicleta" ? (
                  <div className="six-bike-box">
                    <Campo
                      label="Marca / Modelo da bicicleta"
                      valor={
                        formulario.marcaModelo
                      }
                      alterar={(valor) =>
                        alterar(
                          "marcaModelo",
                          valor
                        )
                      }
                      placeholder="Opcional"
                    />

                    <p className="six-help">
                      Para bicicleta não é
                      necessário informar
                      CNH, placa ou ano.
                    </p>
                  </div>
                ) : (
                  <div className="six-grid three six-top-gap">
                    <Campo
                      label={
                        exigeDadosVeiculo
                          ? "Marca / Modelo *"
                          : "Marca / Modelo"
                      }
                      valor={
                        formulario.marcaModelo
                      }
                      alterar={(valor) =>
                        alterar(
                          "marcaModelo",
                          valor
                        )
                      }
                    />

                    <Campo
                      label="Ano"
                      valor={
                        formulario.anoVeiculo
                      }
                      alterar={(valor) =>
                        alterar(
                          "anoVeiculo",
                          valor
                        )
                      }
                    />

                    <Campo
                      label={
                        exigeDadosVeiculo
                          ? "Placa *"
                          : "Placa"
                      }
                      valor={formulario.placa}
                      alterar={(valor) =>
                        alterar(
                          "placa",
                          valor
                        )
                      }
                    />
                  </div>
                )}
              </div>

              <Campo
                label="Área de atuação (bairros que conhece) *"
                valor={
                  formulario.areaAtuacao
                }
                alterar={(valor) =>
                  alterar(
                    "areaAtuacao",
                    valor
                  )
                }
                placeholder="Ex.: Cidade Nova, Coqueiro, Centro..."
              />

              <Campo
                label="Disponibilidade"
                valor={
                  formulario.disponibilidade
                }
                alterar={(valor) =>
                  alterar(
                    "disponibilidade",
                    valor
                  )
                }
                placeholder="Ex.: manhã, tarde, noite, finais de semana"
              />
            </div>

            <FormSectionTitle
              numero="03"
              titulo="Dados de pagamento"
              descricao="Informações bancárias e chave Pix"
            />

            <div className="six-form-body">
              <div className="six-inner-card">
                <Campo
                  label="Chave Pix *"
                  valor={formulario.chavePix}
                  alterar={(valor) =>
                    alterar(
                      "chavePix",
                      valor
                    )
                  }
                  placeholder="Digite sua chave Pix"
                />

                <div className="six-grid four six-top-gap">
                  <Campo
                    label="Banco"
                    valor={formulario.banco}
                    alterar={(valor) =>
                      alterar("banco", valor)
                    }
                  />

                  <Campo
                    label="Agência"
                    valor={formulario.agencia}
                    alterar={(valor) =>
                      alterar("agencia", valor)
                    }
                  />

                  <Campo
                    label="Conta"
                    valor={formulario.conta}
                    alterar={(valor) =>
                      alterar("conta", valor)
                    }
                  />

                  <div className="six-field">
                    <label>
                      Tipo de conta
                    </label>

                    <select
                      value={
                        formulario.tipoConta
                      }
                      onChange={(evento) =>
                        alterar(
                          "tipoConta",
                          evento.target.value
                        )
                      }
                    >
                      <option>Corrente</option>
                      <option>Poupança</option>
                      <option>
                        Conta digital
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <FormSectionTitle
              numero="04"
              titulo="Contato de emergência"
              descricao="Pessoa para contato quando necessário"
            />

            <div className="six-form-body">
              <div className="six-inner-card">
                <div className="six-grid two">
                  <Campo
                    label="Nome"
                    valor={
                      formulario.contatoEmergencia
                    }
                    alterar={(valor) =>
                      alterar(
                        "contatoEmergencia",
                        valor
                      )
                    }
                  />

                  <Campo
                    label="Telefone"
                    valor={
                      formulario.telefoneEmergencia
                    }
                    alterar={(valor) =>
                      alterar(
                        "telefoneEmergencia",
                        valor
                      )
                    }
                  />
                </div>
              </div>

              <div className="six-field">
                <label>
                  Situação *
                </label>

                <select
                  value="Novo"
                  disabled
                  className="six-disabled"
                >
                  <option>Novo</option>
                </select>

                <p className="six-help">
                  Toda candidatura enviada
                  pelo site entra como
                  “Novo”.
                </p>
              </div>
            </div>

            <FormSectionTitle
              numero="05"
              titulo="Currículo"
              descricao="Anexe seu currículo para complementar o cadastro"
            />

            <div className="six-form-body">
              <div className="six-upload">
                <div className="six-upload-top">
                  <div>
                    <h3>
                      Anexar currículo
                    </h3>

                    <p>
                      Envie seu currículo
                      em PDF, DOC ou DOCX.
                      Tamanho máximo: 5 MB.
                    </p>
                  </div>

                  <label className="six-upload-button">
                    {carregandoCurriculo
                      ? "Anexando..."
                      : "+ Anexar currículo"}

                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={
                        adicionarCurriculo
                      }
                      disabled={
                        carregandoCurriculo
                      }
                    />
                  </label>
                </div>

                {!curriculo ? (
                  <div className="six-no-file">
                    Nenhum currículo
                    anexado.
                  </div>
                ) : (
                  <div className="six-file">
                    <div>
                      <strong>
                        📎 {curriculo.nome}
                      </strong>

                      <span>
                        {tamanhoArquivo(
                          curriculo.tamanho
                        )}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setCurriculo(null)
                      }
                    >
                      Remover
                    </button>
                  </div>
                )}
              </div>

              <div className="six-field">
                <label>
                  Observações
                </label>

                <textarea
                  value={
                    formulario.observacoes
                  }
                  onChange={(evento) =>
                    alterar(
                      "observacoes",
                      evento.target.value
                    )
                  }
                  rows={5}
                  placeholder="Caso queira, deixe alguma informação adicional..."
                />
              </div>

              <label className="six-consent">
                <input
                  type="checkbox"
                  required
                />

                <span>
                  Autorizo a SIX Express a
                  utilizar os dados
                  informados e o currículo
                  anexado para fins de
                  recrutamento e seleção.
                </span>
              </label>
            </div>

            <div className="six-actions">
              <a
                href="/"
                className="six-cancel"
              >
                Cancelar
              </a>

              <button
                type="submit"
                disabled={
                  enviando ||
                  carregandoCurriculo
                }
                className="six-submit"
              >
                {enviando
                  ? "Enviando..."
                  : "Enviar candidatura"}
              </button>
            </div>
          </form>
        </section>
      </div>

      <style jsx global>{`
        .six-careers,
        .six-careers * {
          box-sizing: border-box;
        }

        .six-careers {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          margin: 0;
          background: #050506;
          color: #ffffff;
          font-family: Inter, Arial, Helvetica, sans-serif;
        }

        .six-careers a {
          color: inherit;
          text-decoration: none;
        }

        .six-bg-grid {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.035;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.22) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.22) 1px,
              transparent 1px
            );
          background-size: 72px 72px;
        }

        .six-glow {
          position: fixed;
          border-radius: 999px;
          filter: blur(140px);
          pointer-events: none;
        }

        .six-glow-left {
          width: 550px;
          height: 550px;
          left: -250px;
          top: -180px;
          background: rgba(220, 0, 25, 0.22);
        }

        .six-glow-right {
          width: 520px;
          height: 520px;
          right: -220px;
          top: 45%;
          background: rgba(170, 0, 20, 0.16);
        }

        .six-header {
          position: relative;
          z-index: 20;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(20px);
        }

        .six-header-inner {
          width: min(calc(100% - 48px), 1560px);
          min-height: 84px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .six-logo-link {
          display: flex;
          align-items: center;
        }

        .six-logo {
          display: block;
          width: 110px;
          height: 58px;
          object-fit: contain;
        }

        .six-header-right {
          display: flex;
          align-items: center;
          gap: 26px;
        }

        .six-header-label {
          color: #696970;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.3px;
        }

        .six-back {
          padding: 11px 16px;
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.025);
          color: #e9e9ed !important;
          font-size: 12px;
          font-weight: 700;
          transition: 0.22s ease;
        }

        .six-back:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 30, 45, 0.4);
          background: rgba(255, 20, 35, 0.08);
        }

        /* AJUSTE PRINCIPAL */
        .six-page-grid {
          position: relative;
          z-index: 5;
          width: min(calc(100% - 48px), 1560px);
          margin: 0 auto;
          padding: 34px 0 54px;
          display: grid;
          grid-template-columns:
            400px
            minmax(0, 1fr);
          gap: 22px;
          align-items: start;
        }

        .six-info-panel {
          position: sticky;
          top: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 28px;
          background:
            radial-gradient(
              circle at 90% 0%,
              rgba(255, 0, 25, 0.15),
              transparent 38%
            ),
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.045),
              rgba(255, 255, 255, 0.015)
            ),
            #0a0a0d;
          box-shadow:
            0 30px 70px rgba(0, 0, 0, 0.38),
            inset 0 1px rgba(255, 255, 255, 0.025);
        }

        .six-panel-glow {
          position: absolute;
          width: 290px;
          height: 290px;
          top: -100px;
          right: -100px;
          border-radius: 50%;
          background: rgba(255, 0, 25, 0.18);
          filter: blur(95px);
        }

        .six-info-content {
          position: relative;
          z-index: 2;
          padding: 34px;
        }

        .six-kicker {
          display: inline-block;
          color: #ff4b56;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 2.2px;
        }

        .six-title {
          margin: 18px 0 0;
          color: #ffffff;
          font-size: 45px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: -2.3px;
        }

        .six-title span {
          display: block;
          margin-top: 18px;
          max-width: 330px;
          color: #ff2632;
          font-size: 31px;
          line-height: 1.1;
          letter-spacing: -1.35px;
        }

        .six-intro {
          margin: 24px 0 0;
          max-width: 320px;
          color: #a2a2aa;
          font-size: 13px;
          line-height: 1.8;
        }

        .six-steps {
          margin-top: 30px;
          display: grid;
          gap: 12px;
        }

        .six-info-card {
          padding: 17px;
          border: 1px solid rgba(255, 255, 255, 0.075);
          border-radius: 15px;
          background: rgba(0, 0, 0, 0.16);
        }

        .six-info-card-number {
          color: #ff4650;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .six-info-card strong {
          display: block;
          margin-top: 7px;
          color: #f7f7f8;
          font-size: 13px;
        }

        .six-info-card p {
          margin: 6px 0 0;
          color: #777780;
          font-size: 10px;
          line-height: 1.65;
        }

        .six-mini-grid {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 8px;
        }

        .six-mini-grid > div {
          padding: 11px 8px;
          border-radius: 11px;
          background: rgba(255, 20, 35, 0.045);
        }

        .six-mini-grid strong {
          display: block;
          font-size: 10px;
        }

        .six-mini-grid span {
          display: block;
          margin-top: 4px;
          color: #66666f;
          font-size: 8px;
          line-height: 1.3;
        }

        .six-form-column {
          min-width: 0;
        }

        .six-form-heading {
          margin-bottom: 18px;
          padding: 26px 28px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          background:
            radial-gradient(
              circle at 90% 0%,
              rgba(255, 0, 20, 0.08),
              transparent 30%
            ),
            rgba(255, 255, 255, 0.022);
          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.22);
        }

        .six-form-heading > span {
          color: #ff4a54;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .six-form-heading h2 {
          margin: 9px 0 0;
          color: #ffffff;
          font-size: 32px;
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: -1.4px;
        }

        .six-form-heading p {
          margin: 8px 0 0;
          color: #7b7b85;
          font-size: 11px;
        }

        .six-message {
          margin-bottom: 16px;
          padding: 16px 18px;
          border-radius: 14px;
          font-size: 12px;
          line-height: 1.55;
        }

        .six-message strong {
          display: block;
          margin-bottom: 4px;
          font-size: 13px;
        }

        .six-message span {
          display: block;
        }

        .six-success {
          border: 1px solid rgba(34, 197, 94, 0.3);
          background: rgba(20, 83, 45, 0.23);
          color: #86efac;
        }

        .six-error {
          border: 1px solid rgba(239, 68, 68, 0.33);
          background: rgba(127, 29, 29, 0.23);
          color: #fca5a5;
        }

        .six-form {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.085);
          border-radius: 26px;
          background: #0b0c0f;
          box-shadow:
            0 30px 75px rgba(0, 0, 0, 0.34);
        }

        .six-section-title {
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.055);
          border-bottom: 1px solid rgba(255, 255, 255, 0.055);
          background: rgba(255, 255, 255, 0.017);
        }

        .six-section-title:first-child {
          border-top: 0;
        }

        .six-section-number {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 30, 45, 0.2);
          border-radius: 10px;
          background: rgba(255, 20, 35, 0.055);
          color: #ff4b56;
          font-size: 10px;
          font-weight: 900;
        }

        .six-section-title h3 {
          margin: 0;
          color: #ffffff;
          font-size: 17px;
          font-weight: 800;
          letter-spacing: -0.3px;
        }

        .six-section-title p {
          margin: 3px 0 0;
          color: #62626b;
          font-size: 9px;
        }

        .six-form-body {
          padding: 24px;
          display: grid;
          gap: 20px;
        }

        .six-grid {
          display: grid;
          gap: 15px;
        }

        .six-grid.two {
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
        }

        .six-grid.three {
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
        }

        .six-grid.four {
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
        }

        .six-field {
          min-width: 0;
        }

        .six-field label {
          display: block;
          margin-bottom: 8px;
          color: #d7d7dc;
          font-size: 11px;
          font-weight: 700;
        }

        .six-field input,
        .six-field select,
        .six-field textarea {
          width: 100%;
          min-height: 47px;
          padding: 0 14px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 11px;
          outline: none;
          background: rgba(255, 255, 255, 0.03);
          color: #ffffff;
          font-family: inherit;
          font-size: 12px;
          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            box-shadow 0.2s ease;
        }

        .six-field textarea {
          min-height: 125px;
          padding: 13px 14px;
          resize: vertical;
        }

        .six-field input::placeholder,
        .six-field textarea::placeholder {
          color: #5e5e68;
        }

        .six-field input:focus,
        .six-field select:focus,
        .six-field textarea:focus {
          border-color: rgba(255, 40, 50, 0.55);
          background: rgba(255, 255, 255, 0.045);
          box-shadow:
            0 0 0 3px rgba(255, 30, 45, 0.06);
        }

        .six-field option {
          color: #ffffff;
          background: #17181c;
        }

        .six-inner-card {
          padding: 19px;
          border: 1px solid rgba(255, 255, 255, 0.065);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.018);
        }

        .six-check {
          margin-top: 17px;
          display: flex;
          align-items: center;
          gap: 9px;
          color: #c7c7cd;
          font-size: 11px;
          cursor: pointer;
        }

        .six-check input,
        .six-consent input {
          width: 15px;
          height: 15px;
          accent-color: #e50918;
        }

        .six-top-gap {
          margin-top: 17px;
        }

        .six-bike-box {
          margin-top: 17px;
        }

        .six-help {
          margin: 7px 0 0;
          color: #65656e;
          font-size: 9px;
          line-height: 1.5;
        }

        .six-disabled {
          cursor: not-allowed;
          opacity: 0.68;
        }

        .six-upload {
          padding: 20px;
          border: 1px dashed rgba(255, 255, 255, 0.11);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.015);
        }

        .six-upload-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .six-upload-top h3 {
          margin: 0;
          font-size: 13px;
        }

        .six-upload-top p {
          margin: 5px 0 0;
          color: #6f6f78;
          font-size: 9px;
          line-height: 1.5;
        }

        .six-upload-button {
          min-height: 42px;
          padding: 0 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(255, 40, 50, 0.38);
          border-radius: 10px;
          background: rgba(255, 20, 35, 0.055);
          color: #ff4a54;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .six-upload-button:hover {
          transform: translateY(-2px);
          background: rgba(255, 20, 35, 0.1);
        }

        .six-upload-button input {
          display: none;
        }

        .six-no-file {
          margin-top: 15px;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: 11px;
          background: rgba(0, 0, 0, 0.17);
          color: #595963;
          text-align: center;
          font-size: 10px;
        }

        .six-file {
          margin-top: 15px;
          padding: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 11px;
          background: rgba(0, 0, 0, 0.18);
        }

        .six-file strong {
          display: block;
          font-size: 11px;
        }

        .six-file span {
          display: block;
          margin-top: 3px;
          color: #62626b;
          font-size: 9px;
        }

        .six-file button {
          padding: 0;
          border: 0;
          background: transparent;
          color: #ff4650;
          font-size: 10px;
          font-weight: 800;
          cursor: pointer;
        }

        .six-consent {
          padding: 15px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.017);
          color: #81818a;
          font-size: 9px;
          line-height: 1.6;
        }

        .six-consent input {
          margin-top: 1px;
          flex-shrink: 0;
        }

        .six-actions {
          padding: 19px 24px;
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(0, 0, 0, 0.17);
        }

        .six-cancel,
        .six-submit {
          min-height: 44px;
          padding: 0 19px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          font-family: inherit;
          font-size: 11px;
          font-weight: 800;
          transition: 0.2s ease;
        }

        .six-cancel {
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.025);
          color: #e8e8eb !important;
        }

        .six-cancel:hover {
          background: rgba(255, 255, 255, 0.055);
        }

        .six-submit {
          border: 0;
          background:
            linear-gradient(
              135deg,
              #ff202c,
              #d5000f
            );
          color: #ffffff;
          box-shadow:
            0 14px 32px rgba(220, 0, 20, 0.2);
          cursor: pointer;
        }

        .six-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow:
            0 17px 36px rgba(220, 0, 20, 0.28);
        }

        .six-submit:disabled {
          cursor: not-allowed;
          opacity: 0.55;
        }

        @media (max-width: 1220px) {
          .six-page-grid {
            grid-template-columns:
              345px
              minmax(0, 1fr);
          }

          .six-title {
            font-size: 39px;
          }

          .six-title span {
            font-size: 28px;
          }

          .six-grid.four {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .six-page-grid {
            grid-template-columns: 1fr;
          }

          .six-info-panel {
            position: relative;
            top: 0;
          }

          .six-title {
            max-width: 640px;
          }

          .six-title span {
            max-width: 560px;
          }

          .six-grid.three,
          .six-grid.four {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 620px) {
          .six-header-inner,
          .six-page-grid {
            width: min(
              calc(100% - 24px),
              1560px
            );
          }

          .six-header-inner {
            min-height: 72px;
          }

          .six-logo {
            width: 86px;
            height: 48px;
          }

          .six-header-label {
            display: none;
          }

          .six-back {
            padding: 9px 12px;
            font-size: 10px;
          }

          .six-page-grid {
            padding-top: 16px;
            gap: 14px;
          }

          .six-info-content {
            padding: 22px;
          }

          .six-title {
            font-size: 34px;
          }

          .six-title span {
            font-size: 27px;
          }

          .six-mini-grid {
            grid-template-columns: 1fr;
          }

          .six-form-heading {
            padding: 20px;
          }

          .six-form-heading h2 {
            font-size: 26px;
          }

          .six-form-body {
            padding: 18px;
          }

          .six-grid.two,
          .six-grid.three,
          .six-grid.four {
            grid-template-columns: 1fr;
          }

          .six-upload-top {
            align-items: stretch;
            flex-direction: column;
          }

          .six-upload-button {
            width: 100%;
          }

          .six-file {
            align-items: flex-start;
            flex-direction: column;
          }

          .six-actions {
            flex-direction: column-reverse;
          }

          .six-cancel,
          .six-submit {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}

function InfoCard({
  numero,
  titulo,
  texto,
}: {
  numero: string;
  titulo: string;
  texto: string;
}) {
  return (
    <div className="six-info-card">
      <span className="six-info-card-number">
        {numero}
      </span>

      <strong>
        {titulo}
      </strong>

      <p>
        {texto}
      </p>
    </div>
  );
}

function FormSectionTitle({
  numero,
  titulo,
  descricao,
}: {
  numero: string;
  titulo: string;
  descricao: string;
}) {
  return (
    <div className="six-section-title">
      <span className="six-section-number">
        {numero}
      </span>

      <div>
        <h3>
          {titulo}
        </h3>

        <p>
          {descricao}
        </p>
      </div>
    </div>
  );
}

function Campo({
  label,
  valor,
  alterar,
  tipo = "text",
  placeholder = "",
}: {
  label: string;
  valor: string;
  alterar: (
    valor: string
  ) => void;
  tipo?: string;
  placeholder?: string;
}) {
  return (
    <div className="six-field">
      <label>
        {label}
      </label>

      <input
        type={tipo}
        value={valor}
        onChange={(evento) =>
          alterar(
            evento.target.value
          )
        }
        placeholder={placeholder}
      />
    </div>
  );
}