export type FeatureCard = { title: string; description: string };
export type ModuleItem = { name: string; description: string };
export type ProductIndexSection = { id: string; number: string; title: string; summary: string; features: ModuleItem[] };
export type RoleContent = { id: "vendedor" | "gestor" | "financeiro" | "master"; label: string; badge: string; summary: string; inherit?: string; outcomes: string[]; groups: { title: string; description: string; modules: ModuleItem[] }[] };
export type PlanCard = { name: string; audience: string; price: string; description: string; highlight?: boolean; features: string[] };

export const navigation = [
  { href: "/", label: "Início" },
  { href: "/produto", label: "Funções" },
  { href: "/planos", label: "Planos" },
  { href: "/institucional", label: "Institucional" },
  { href: "/contato", label: "Contato" },
];

export const homepagePillars: FeatureCard[] = [
  { title: "Venda importada sem retrabalho", description: "Contratos CVC, cruzeiros e Rextur entram com recibos, taxas, passageiros, pagamentos e dados de reserva estruturados." },
  { title: "Gestão real da equipe", description: "Dashboards por vendedor, gestor, financeiro e master, com metas, ranking, follow-up, últimas compras e aniversariantes." },
  { title: "Financeiro ligado a operação", description: "Conciliação, comissionamento, fechamento, formas de pagamento, notas fiscais e auditoria conectados ao cadastro da venda." },
  { title: "Governança multiempresa", description: "Permissões por módulo, escopo por empresa, master multiunidade e controles administrativos para operações em crescimento." },
];

export const productMosaic: FeatureCard[] = [
  { title: "CRM para turismo", description: "Clientes, acompanhantes, histórico, preferencias, aniversarios, CRM visual e contatos por tema." },
  { title: "Vendas e importações", description: "Cadastro manual, importação CVC, cruzeiros, Rextur, recibos complementares, rateios e contratos." },
  { title: "Orçamentos e roteiros", description: "Propostas, PDFs, roteiros personalizados, parâmetros de marca e conversão para venda." },
  { title: "Relatórios gerenciais", description: "Vendas, clientes, produtos, destinos, ranking, recibos e visoes por período, empresa e vendedor." },
  { title: "Operação de viagem", description: "Viagens, vouchers, documentos, campanhas, SAC, acompanhamento, agenda, tarefas e últimas compras." },
  { title: "Administracao segura", description: "Usuários, permissões, planos, logs, parâmetros, documentacao, MFA, passkeys e manutencao do sistema." },
];

export const productIndex: ProductIndexSection[] = [
  { id: "vendas", number: "01", title: "Vendas e importação inteligente", summary: "Documentos e reservas viram vendas estruturadas, com recibos, pagamentos e taxas.", features: [
    { name: "Importação CVC", description: "Leitura de contrato, cliente, passageiros, recibos, taxas, pagamentos, descontos e total pago." },
    { name: "Importação Rextur", description: "Uso do LOC como reserva e captura de Tax. Emb., RAV, RC, tarifa e bilhetes quando disponíveis." },
    { name: "Importação de cruzeiro", description: "Entrada assistida para reservas maritimas, parcelas e dados operacionais da reserva." },
    { name: "Cadastro manual completo", description: "Venda com cliente manual ou cadastrado, destino, recibos, pagamentos, taxas, DU, RAV e anexos." },
    { name: "Recibos complementares", description: "Vinculo entre recibos relacionados, suporte a duplicidade Rextur e rastreio por reserva." },
    { name: "Rateio de venda", description: "Divisao de comissão por recibo entre vendedores, com visão para financeiro e ranking." },
  ]},
  { id: "crm", number: "02", title: "CRM, clientes e relacionamento", summary: "A carteira ganha memoria comercial e temas de contato para agir no momento certo.", features: [
    { name: "Cadastro de clientes", description: "Dados pessoais, contatos, CPF, endereco, tags, classificacao e empresa vinculada." },
    { name: "Acompanhantes", description: "Passageiros recorrentes, documentos, parentesco, nascimento e observacoes." },
    { name: "CRM visual", description: "Temas para aniversário, ano novo, relacionamento e campanhas com arte e assinatura." },
    { name: "Últimas compras", description: "Lista de compras recentes para contato de agradecimento e pós-venda." },
    { name: "Aniversariantes", description: "Clientes por período com atalhos para acao comercial." },
    { name: "Histórico de envios", description: "Registro de templates, avisos e contatos realizados." },
  ]},
  { id: "orcamentos", number: "03", title: "Orçamentos, propostas e roteiros", summary: "Do atendimento inicial ao PDF final, o sistema organiza proposta, roteiro e conversão para venda.", features: [
    { name: "Orçamentos", description: "Criacao, edicao, status, criticidade, itens, valores e cliente manual quando necessário." },
    { name: "Importar orçamento", description: "Entrada de dados estruturados para reduzir retrabalho na criacao de propostas." },
    { name: "Roteiros personalizados", description: "Dias, cidades, hoteis, transportes, passeios, investimentos e pagamentos." },
    { name: "PDF de proposta", description: "Logo, imagem complementar, consultor, filial, rodape e dados de contato parametrizados." },
    { name: "Circuitos", description: "Cadastro de roteiros combinados, dias, datas, cidades, status e preco medio." },
    { name: "Produtos e destinos", description: "Catalogo operacional para montar propostas e padronizar destinos ofertados." },
  ]},
  { id: "relatorios", number: "04", title: "Relatórios e leitura de performance", summary: "Visões analíticas separadas por decisão: venda, cliente, produto, destino, ranking e recibo.", features: [
    { name: "Relatório de vendas", description: "Vendas por período, empresa, vendedor, status, cliente, destino e recibo." },
    { name: "Relatório de clientes", description: "Clientes que mais compram, volume gasto, recorrência e comportamento comercial." },
    { name: "Relatório de produtos", description: "Produtos e tipos de produto com maior receita, taxas, seguro e margem operacional." },
    { name: "Relatório de destinos", description: "Destinos mais vendidos, ranking por receita e recorte por empresa ou vendedor." },
    { name: "Ranking de vendas", description: "Ranking por vendedor com conciliação, recibos manuais, taxas, seguro e metas." },
    { name: "Produtos por recibo", description: "Analise detalhada por recibo para auditar performance e origem da receita." },
  ]},
  { id: "financeiro", number: "05", title: "Financeiro, conciliação e comissionamento", summary: "O financeiro acompanha o que foi vendido, conciliado e liberado para pagamento.", features: [
    { name: "Conciliação", description: "Importação de extratos, match automático, auditoria de diferencas e dias sem movimento." },
    { name: "Comissões", description: "Calculo por período, regras, status pendente/paga/cancelada e histórico de pagamento." },
    { name: "Fechamento", description: "Consolidacao mensal restrita ao perfil financeiro." },
    { name: "Ajustes de vendas", description: "Rateio, vendedor de ranking, produto de ranking e revisao de recibos conciliados." },
    { name: "Formas de pagamento", description: "Regras de desconto, paga comissão, status e condicoes por empresa." },
    { name: "Notas fiscais", description: "Área reservada ao perfil financeiro para controle fiscal e operacional." },
  ]},
  { id: "operacao", number: "06", title: "Operação, viagem e atendimento", summary: "Depois da compra, viagem, documento, voucher, SAC e follow-up continuam no mesmo ambiente.", features: [
    { name: "Viagens", description: "Lista, detalhe, status, dossie, passageiros, recibos e acompanhamento por data." },
    { name: "Vouchers", description: "Editor e preview de vouchers com logos, imagens, hoteis, dias, apps e emergencia." },
    { name: "Documentos de viagem", description: "Arquivos, modelos, textos e documentos operacionais para a jornada do cliente." },
    { name: "Controle de SAC", description: "Abertura, status, responsavel, prazo, motivo, interacoes e acompanhamento." },
    { name: "Acompanhamento", description: "Retornos de viagem, pendencias operacionais e contato pós-venda." },
    { name: "Campanhas", description: "Pecas, links, regras, status e validade para comunicacoes comerciais." },
  ]},
  { id: "gestao", number: "07", title: "Gestão de equipe e parâmetros", summary: "O gestor controla pessoas, metas, escalas, cadastros, produtos e regras sem depender da área técnica.", features: [
    { name: "Dashboard gestor", description: "Vendas da equipe, ranking, follow-up, últimas compras, atividades e viagens." },
    { name: "Metas", description: "Metas gerais, por vendedor, por produto, templates e copia entre periodos." },
    { name: "Escalas", description: "Mes, horarios, feriados, tipo de dia, observacoes e autoaplicacao." },
    { name: "Equipe", description: "Vendedores, vinculos, participacao em ranking e estrutura por empresa." },
    { name: "Cadastros", description: "Paises, estados, cidades, fornecedores, produtos, destinos, circuitos e tipos." },
    { name: "Parâmetros vouchers", description: "Logos, imagens e assets usados nos vouchers de fornecedores e operadores." },
  ]},
  { id: "master-admin", number: "08", title: "Master, admin e seguranca", summary: "A camada executiva consolida empresas, controla permissões e sustenta operações multiunidade.", features: [
    { name: "Dashboard master", description: "Vendas de todas as equipes, evolucao, top destinos, top vendedores e clientes que mais gastaram." },
    { name: "Empresas", description: "Portfolio de empresas, billing, status, vinculos master e escopo de acesso." },
    { name: "Usuários e permissões", description: "Perfis, tipos de usuário, permissões por módulo, MFA e status de acesso." },
    { name: "Logs administrativos", description: "Auditoria por data, módulo, acao, usuário, IP e detalhes." },
    { name: "Documentacao", description: "Base editavel por módulo, perfil e contexto para orientar usuários do sistema." },
    { name: "Seguranca", description: "Passkeys, MFA, sessao expirada, escopo por empresa e módulos habilitados." },
  ]},
];

export const roleHighlights: FeatureCard[] = [
  { title: "Vendedor", description: "Carteira, vendas, orçamentos, viagens, tarefas, CRM, comissões e relatórios individuais." },
  { title: "Gestor", description: "Equipe, metas, escalas, cadastros, parâmetros, ranking, conciliação e indicadores da loja." },
  { title: "Master", description: "Empresas, usuários, permissões, dashboards consolidados e leitura de todas as equipes atribuidas." },
];

export const roleContent: RoleContent[] = [
  { id: "vendedor", label: "Vendedor", badge: "Operação comercial", summary: "Perfil para quem vende, acompanha clientes e transforma atendimento em reserva, venda e pós-venda.", outcomes: ["Consulta carteira, aniversariantes, últimas compras e histórico.", "Cria vendas, importa contratos, acompanha orçamentos e visualiza comissões.", "Organiza agenda, tarefas, viagens, SAC e follow-up."], groups: [
    { title: "CRM e rotina", description: "Ferramentas para manter a carteira ativa.", modules: [
      { name: "Dashboard vendedor", description: "KPIs, próximas viagens, atividades e aniversariantes." }, { name: "Clientes", description: "Carteira, acompanhantes, histórico, CRM e templates." }, { name: "Agenda e tarefas", description: "Compromissos, Kanban/lista, prioridade e categoria." }, { name: "Consultoria online", description: "Atendimentos, destino, taxa, lembrete e notas." }]},
    { title: "Venda e proposta", description: "Do contrato ao recibo.", modules: [
      { name: "Vendas", description: "Cadastro, edicao, recibos, pagamentos e contratos." }, { name: "Importar vendas", description: "CVC, cruzeiro e Rextur com extracao de campos críticos." }, { name: "Orçamentos", description: "Propostas, status, interacoes, itens e conversão." }, { name: "Roteiros", description: "Dias, hoteis, transportes e investimento." }]},
  ]},
  { id: "gestor", label: "Gestor", badge: "Gestão da loja", inherit: "Inclui a operação do vendedor e adiciona leitura da equipe, parametrização e controle gerencial.", summary: "Perfil para acompanhar pessoas, metas, cadastros e resultados da loja.", outcomes: ["Acompanha vendas da equipe, ranking, top destinos e follow-up.", "Configura metas, escalas, equipe, produtos, fornecedores e parâmetros.", "Controla conciliação, ajustes, regras e relatórios gerenciais."], groups: [
    { title: "Gestão comercial", description: "Painel de comando da loja.", modules: [
      { name: "Dashboard gestor", description: "KPIs, ranking, follow-up e aniversariantes." }, { name: "Metas", description: "Metas por vendedor, produto, template e período." }, { name: "Equipe", description: "Usuários vinculados, ranking e estrutura por empresa." }, { name: "Escalas", description: "Período, horarios, feriados e distribuicao." }]},
    { title: "Cadastros e parâmetros", description: "Base operacional da venda.", modules: [
      { name: "Produtos e destinos", description: "Produtos, tarifas, fornecedores, circuitos e cidades." }, { name: "Vouchers", description: "Templates, logos, imagens, hoteis e dias." }, { name: "Campanhas", description: "Pecas comerciais, links, regras e validade." }, { name: "Parâmetros", description: "Sistema, comissão, orçamentos, vouchers e CRM." }]},
  ]},
  { id: "financeiro", label: "Financeiro", badge: "Controle financeiro", summary: "Perfil focado em conciliação, comissionamento, fechamento, notas fiscais e auditoria.", outcomes: ["Valida extratos e diferencas entre sistema e lancamentos.", "Calcula e controla comissões pagas, pendentes e canceladas.", "Acessa áreas restritas como fechamento e notas fiscais."], groups: [
    { title: "Conferencia e conciliação", description: "Rotina financeira diária.", modules: [
      { name: "Conciliação", description: "Importar, conciliar, auditar diferenca e sanear." }, { name: "Ajustes de vendas", description: "Rateios, vendedor destino e percentual por recibo." }, { name: "Baixa RAC", description: "Identificacao de documentos fora do ranking comum." }, { name: "Execucoes", description: "Histórico de processamento e status." }]},
    { title: "Comissões e fechamento", description: "Ciclo de pagamento.", modules: [
      { name: "Comissões", description: "Calculo, consulta, pagamento, edicao e cancelamento." }, { name: "Fechamento", description: "Consolidacao mensal restrita ao financeiro." }, { name: "Notas fiscais", description: "Área fiscal visivel somente para financeiros." }, { name: "Auditoria", description: "Logs, diferencas, detalhes e rastreio." }]},
  ]},
  { id: "master", label: "Master", badge: "Governança multiempresa", inherit: "Camada executiva para grupos, redes e operações com mais de uma empresa.", summary: "Perfil para consolidar indicadores, controlar empresas, usuários, permissões e escopos.", outcomes: ["Ve vendas de todas as equipes e empresas atribuidas.", "Compara vendedores independente da loja.", "Administra usuários, empresas, permissões e módulos."], groups: [
    { title: "Visão executiva", description: "Indicadores consolidados.", modules: [
      { name: "Dashboard master", description: "Vendas das equipes, evolucao, top destinos e seguro." }, { name: "Top vendedores", description: "Ranking geral entre lojas e equipes." }, { name: "Clientes que mais gastaram", description: "Nome, saída, destino e valor no mes." }, { name: "Últimas compras", description: "Compras recentes para relacionamento." }]},
    { title: "Governança", description: "Controle de acesso e portfolio.", modules: [
      { name: "Empresas", description: "Escopo, status, billing e vinculos master." }, { name: "Usuários", description: "Perfis, empresas, status, 2FA e tipo." }, { name: "Permissões", description: "Módulo, papel, acesso e matriz." }, { name: "Logs", description: "Acoes, usuário, IP, data e detalhes." }]},
  ]},
];

export const implementationSteps: FeatureCard[] = [
  { title: "Diagnostico da operação", description: "Mapeamento de usuários, empresas, lojas, fluxo de venda, origem de contratos e regras comerciais." },
  { title: "Parametrização guiada", description: "Permissões, metas, comissões, formas de pagamento, vouchers, logos, cadastros e documentacao." },
  { title: "Treinamento por perfil", description: "Vendedor, gestor, financeiro e master aprendem apenas o que precisam operar." },
  { title: "Go-live com auditoria", description: "Validação de importações, conciliação, ranking, relatórios e acompanhamento das primeiras rotinas." },
];

export const pricingPlans: PlanCard[] = [
  { name: "Comercial", audience: "Lojas que precisam organizar CRM, propostas, vendas e pós-venda.", price: "Sob consulta", description: "Entrada para padronizar a rotina comercial.", features: ["Dashboard vendedor", "Clientes, CRM e aniversariantes", "Vendas manuais e importadas", "Orçamentos e propostas", "Viagens, documentos e SAC", "Relatórios operacionais"] },
  { name: "Gestão", audience: "Operações que precisam controlar equipe, metas, cadastros e financeiro.", price: "Sob consulta", description: "Camada completa para lojas que querem gestão ativa.", highlight: true, features: ["Tudo do Comercial", "Dashboard gestor e ranking", "Metas, equipe e escalas", "Cadastros e fornecedores", "Conciliação e comissão", "Parâmetros e vouchers"] },
  { name: "Master", audience: "Grupos, redes ou operações com mais de uma empresa.", price: "Sob consulta", description: "Governança multiempresa e consolidacao executiva.", features: ["Tudo do Gestão", "Dashboard master", "Empresas, usuários e permissões", "Top vendedores entre lojas", "Clientes que mais gastaram", "Governança por escopo"] },
];

export const institutionalPrinciples: FeatureCard[] = [
  { title: "Especializacao em turismo", description: "O produto entende contrato, reserva, recibo, taxas, passageiros, viagem, voucher e pós-venda." },
  { title: "Operação antes de aparencia", description: "A interface e limpa, mas cada tela existe para resolver uma etapa real da agência." },
  { title: "Governança por perfil", description: "Vendedor, gestor, financeiro, master e admin nao veem a mesma coisa." },
  { title: "Evolucao continua", description: "O sistema cresce por módulo e acompanha novos modelos de documento." },
];

export const faqs = [
  { question: "O VTUR é apenas um CRM?", answer: "Não. Ele combina CRM, vendas, importação de contratos, orçamentos, viagens, financeiro, comissionamento, relatórios, governança e operação diária." },
  { question: "Quais importações de venda o sistema cobre?", answer: "O fluxo atual contempla contratos CVC, reservas Rextur, cruzeiros e cadastro manual, com evolucao continua conforme novos modelos surgem." },
  { question: "O financeiro ve as mesmas opcoes que outros usuários?", answer: "Não. Fechamento, nota fiscal e pagamento de comissões sao funções restritas ao perfil financeiro." },
  { question: "O master ve todas as lojas?", answer: "O master ve as empresas atribuidas ao seu escopo, com dashboards consolidados, top vendedores, últimas compras e governança." },
];
