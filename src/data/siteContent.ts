export type FeatureCard = {
  title: string;
  description: string;
};

export type ModuleItem = {
  name: string;
  description: string;
};

export type ModuleGroup = {
  title: string;
  description: string;
  modules: ModuleItem[];
};

export type RoleContent = {
  id: "vendedor" | "gestor" | "master";
  label: string;
  summary: string;
  badge: string;
  inherit?: string;
  outcomes: string[];
  groups: ModuleGroup[];
};

export type PlanCard = {
  name: string;
  audience: string;
  price: string;
  description: string;
  highlight?: boolean;
  features: string[];
};

export const navigation = [
  { href: "/", label: "Apresentacao" },
  { href: "/produto", label: "Produto" },
  { href: "/planos", label: "Planos" },
  { href: "/institucional", label: "Institucional" },
  { href: "/contato", label: "Contato" },
];

export const homepagePillars: FeatureCard[] = [
  {
    title: "CRM de ponta a ponta",
    description:
      "Clientes, orcamentos, vendas, follow-up, consultoria e pos-venda em uma operacao conectada.",
  },
  {
    title: "Rotina operacional do turismo",
    description:
      "Viagens, documentos, campanhas, SAC, escalas e dossies organizados em uma unica plataforma.",
  },
  {
    title: "Gestao com governanca",
    description:
      "Permissoes por perfil, visao por empresa, multiempresa e regras para cada nivel de acesso.",
  },
  {
    title: "Performance comercial",
    description:
      "Dashboards, ranking, metas, comissoes, conciliacao e relatorios para tomada de decisao.",
  },
];

export const roleHighlights: FeatureCard[] = [
  {
    title: "Vendedor",
    description:
      "Rotina diaria, carteira de clientes, vendas, orcamentos, agenda, viagens, SAC e comissionamento.",
    },
  {
    title: "Gestor",
    description:
      "Visao ampliada da equipe com metas, escalas, conciliacao, parametros, cadastros e relatorios gerenciais.",
  },
  {
    title: "Master",
    description:
      "Governanca multiempresa com empresas, usuarios, permissoes e analise consolidada da operacao.",
  },
];

export const productMosaic: FeatureCard[] = [
  {
    title: "Carteira e relacionamento",
    description:
      "Historico do cliente, classificacao de perfil, acompanhantes, contato recorrente e memoria comercial.",
  },
  {
    title: "Venda, proposta e importacao",
    description:
      "Ciclo comercial com orcamentos, contratos, importacoes em lote e acompanhamento por status.",
  },
  {
    title: "Operacao e pos-venda",
    description:
      "Dossie de viagem, documentos, follow-up, consultoria e controle estruturado de SAC.",
  },
  {
    title: "Rotina de equipe",
    description:
      "Agenda, tarefas, mural, campanhas, escala individual e alinhamento da operacao diaria.",
  },
  {
    title: "Financeiro e regras comerciais",
    description:
      "Comissionamento, formas de pagamento, regras de comissao, conciliacao e fechamento.",
  },
  {
    title: "Inteligencia e consolidacao",
    description:
      "Dashboards, KPIs, ranking e relatorios por venda, destino, produto, cliente e empresa.",
  },
];

export const roleContent: RoleContent[] = [
  {
    id: "vendedor",
    label: "Vendedor",
    badge: "Operacao comercial",
    summary:
      "Perfil orientado a relacionamento, produtividade comercial e acompanhamento completo da carteira.",
    outcomes: [
      "Mantem a rotina comercial organizada sem sair do CRM.",
      "Acompanha cliente, proposta, venda, viagem e pos-venda em continuidade.",
      "Visualiza metas, comissoes e indicadores individuais de performance.",
    ],
    groups: [
      {
        title: "Rotina e acompanhamento",
        description: "Modulos que sustentam o dia a dia do vendedor dentro do sistema.",
        modules: [
          { name: "Dashboard", description: "Indicadores pessoais, follow-up, consultorias e viagens proximas." },
          { name: "Agenda", description: "Compromissos, retornos e organizacao da agenda comercial." },
          { name: "Tarefas", description: "Pendencias por status para nao perder oportunidades." },
          { name: "Mural de Recados", description: "Comunicados operacionais e alinhamentos internos." },
          { name: "Minhas Preferencias", description: "Ajustes pessoais para experiencia e rotina de uso." },
          { name: "Campanhas", description: "Acesso a campanhas e informativos comerciais." },
          { name: "Minha Escala", description: "Visualizacao da escala individual diretamente no perfil." },
        ],
      },
      {
        title: "CRM e vendas",
        description: "Frente comercial completa para captar, negociar, converter e acompanhar a carteira.",
        modules: [
          { name: "Clientes", description: "Carteira com busca, classificacao, historico, acompanhantes e dados do cliente." },
          { name: "Vendas", description: "Consulta, cadastro, edicao, recibos, pagamentos e filtros por periodo." },
          { name: "Importar Contratos", description: "Importacao em lote de contratos e vendas quando habilitada." },
          { name: "Orcamentos", description: "Criacao, acompanhamento de status e detalhamento de propostas." },
          { name: "Importar Orcamentos", description: "Entrada em lote seguindo o template do sistema quando habilitada." },
          { name: "Consultoria Online", description: "Registro de interacoes, busca e fechamento de consultorias." },
        ],
      },
      {
        title: "Operacao, atendimento e performance",
        description: "Etapas que conectam o comercial ao pos-venda e a leitura de resultados.",
        modules: [
          { name: "Viagens", description: "Lista de viagens, acesso ao dossie e informacoes adicionais do embarque." },
          { name: "Documentos Viagens", description: "Documentos operacionais vinculados ao fluxo de viagem." },
          { name: "Controle de SAC", description: "Historico, filtros, registro de interacao e acompanhamento do atendimento." },
          { name: "Comissionamento", description: "Consulta das comissoes apuradas conforme vendas e regras vigentes." },
          { name: "Metas", description: "Visualizacao das metas definidas pelo gestor quando o modulo estiver habilitado." },
          { name: "Relatorios de Vendas", description: "Visao detalhada, por destino, produto, cliente e ranking." },
        ],
      },
    ],
  },
  {
    id: "gestor",
    label: "Gestor",
    badge: "Gestao de equipe",
    inherit: "Inclui todos os recursos do perfil Vendedor, com visao ampliada para a equipe e a unidade.",
    summary:
      "Perfil para liderancas comerciais que precisam acompanhar pessoas, metas, cadastros, parametros e resultados.",
    outcomes: [
      "Controla performance da equipe com KPIs, metas e ranking.",
      "Organiza operacao, escalas e parametrizacoes sem depender de varias ferramentas.",
      "Cria governanca comercial com regras, cadastros e conciliacao.",
    ],
    groups: [
      {
        title: "Gestao comercial e people management",
        description: "Camada gerencial para acompanhar resultados, times e capacidade operacional.",
        modules: [
          { name: "Dashboard Gestor", description: "Indicadores consolidados da equipe, follow-up e visao por time." },
          { name: "Equipe", description: "Cadastro e gestao de usuarios, horarios de trabalho e atribuicoes." },
          { name: "Metas", description: "Metas gerais, metas por vendedor, divisao por equipe e por produto." },
          { name: "Escalas", description: "Escala mensal, feriados, horarios e atribuicao automatica." },
          { name: "Ranking de Vendas", description: "Comparativo de performance entre vendedores e periodos." },
        ],
      },
      {
        title: "Financeiro e regras comerciais",
        description: "Modulos para garantir consistencia financeira e regras da operacao.",
        modules: [
          { name: "Conciliaçao", description: "Controle operacional e financeiro para validacao de recebimentos." },
          { name: "Regras de Comissao", description: "Configuracao das regras de apuracao comercial." },
          { name: "Formas de Pagamento", description: "Cadastro e manutencao das formas aceitas pela operacao." },
          { name: "Cambios", description: "Parametros de cambio para produtos e negociacoes aplicaveis." },
          { name: "Fechamento de Comissao", description: "Consolidacao do periodo quando o modulo estiver habilitado." },
        ],
      },
      {
        title: "Cadastros e parametros",
        description: "Base estrutural que sustenta a operacao e padroniza a experiencia da equipe.",
        modules: [
          { name: "Paises", description: "Cadastro de paises utilizados pela operacao." },
          { name: "Subdivisoes", description: "Estados, provincias e subdivisoes administrativas." },
          { name: "Cidades", description: "Base geografica para origem, destino e atendimento." },
          { name: "Destinos", description: "Cadastro de destinos turisticos e comerciais." },
          { name: "Produtos", description: "Catalogo comercial de produtos e servicos." },
          { name: "Circuitos", description: "Estruturacao de circuitos e roteiros." },
          { name: "Produtos em Lote", description: "Carga e manutencao em lote do portfolio." },
          { name: "Fornecedores", description: "Base de parceiros e fornecedores da operacao." },
          { name: "Tipo de Produtos", description: "Padronizacao do catalogo por categoria." },
          { name: "Tipo de Pacotes", description: "Tipos e familias de pacotes ofertados." },
          { name: "Parâmetros do Sistema", description: "Configuracoes gerais da operacao e do ambiente." },
          { name: "Avisos", description: "Comunicacoes e avisos internos publicados para os usuarios." },
          { name: "Orçamentos (PDF)", description: "Templates e padroes de saida para propostas." },
        ],
      },
    ],
  },
  {
    id: "master",
    label: "Master",
    badge: "Governanca multiempresa",
    inherit:
      "Recebe a camada de governanca corporativa e pode combinar acessos gerenciais conforme a politica da operacao.",
    summary:
      "Perfil corporativo para consolidar empresas, usuarios, permissoes e visao executiva do ecossistema.",
    outcomes: [
      "Enxerga a operacao por empresa, filial ou consolidado.",
      "Controla acesso, governanca e padronizacao entre unidades.",
      "Acompanha indicadores executivos sem perder a visao operacional do negocio.",
    ],
    groups: [
      {
        title: "Governanca e administracao multiempresa",
        description: "Nucleo de controle corporativo do sistema.",
        modules: [
          { name: "Dashboard Master", description: "Visao consolidada do ambiente e leitura executiva por empresa." },
          { name: "Empresas", description: "Cadastro e gestao das empresas e unidades do ambiente." },
          { name: "Usuarios", description: "Gestao de usuarios entre empresas e equipes." },
          { name: "Permissoes", description: "Definicao global de permissoes por tipo de usuario e modulo." },
          { name: "Selecao de Empresa", description: "Troca de contexto para navegar por diferentes operacoes." },
        ],
      },
      {
        title: "Inteligencia executiva",
        description: "Leitura consolidada para acompanhar o negocio em mais de uma estrutura.",
        modules: [
          { name: "Relatorios Consolidados", description: "Relatorios por empresa, cliente, destino, produto e vendedor." },
          { name: "Vendas por Destino", description: "Visao multiempresa com filtros para leitura comparativa." },
          { name: "Vendas Detalhadas", description: "Analise aprofundada com filtros e apoio contextual." },
          { name: "Ranking de Vendas", description: "Comparacao entre equipes, empresas e periodos." },
        ],
      },
      {
        title: "Operacao corporativa",
        description: "Acesso master a parametros e configuracoes quando a operacao exigir visao centralizada.",
        modules: [
          { name: "Escalas e Parametros", description: "Ajustes corporativos de escalas, equipe e parametros quando habilitados." },
          { name: "Cadastros Compartilhados", description: "Suporte a cadastros estruturais que afetam multiplas empresas." },
          { name: "Governanca de Acesso", description: "Controle de escopo por empresa, perfil e responsabilidade operacional." },
        ],
      },
    ],
  },
];

export const implementationSteps: FeatureCard[] = [
  {
    title: "Diagnostico operacional",
    description:
      "Levantamento da rotina comercial, da estrutura da equipe e dos modulos que serao ativados.",
  },
  {
    title: "Configuracao e parametrizacao",
    description:
      "Ajuste de permissoes, cadastros, templates, metas, regras de comissao e operacao inicial.",
  },
  {
    title: "Migracao e treinamento",
    description:
      "Importacao de dados, orientacao dos perfis e validacao dos principais fluxos do negocio.",
  },
  {
    title: "Go-live com evolucao continua",
    description:
      "Entrada em producao com acompanhamento, refinamento e expansao por modulos e unidades.",
  },
];

export const pricingPlans: PlanCard[] = [
  {
    name: "Comercial",
    audience: "Equipes que querem estruturar CRM, carteira, orcamentos e vendas.",
    price: "Sob consulta",
    description:
      "Entrada ideal para padronizar a operacao comercial e conectar clientes, propostas, vendas e pos-venda.",
    features: [
      "Camada Vendedor",
      "CRM e carteira de clientes",
      "Orcamentos, vendas e consultoria",
      "Agenda, tarefas e campanhas",
      "Viagens, documentos e SAC",
      "Relatorios operacionais",
    ],
  },
  {
    name: "Gestao",
    audience: "Operacoes que precisam de performance, lideranca e controle da equipe.",
    price: "Sob consulta",
    description:
      "Amplia a base comercial com metas, escalas, cadastros, parametros e visao gerencial do negocio.",
    highlight: true,
    features: [
      "Tudo do plano Comercial",
      "Camada Gestor",
      "Dashboard gestor e ranking",
      "Equipe, metas e escalas",
      "Conciliaçao e regras de comissao",
      "Cadastros e parametros do sistema",
    ],
  },
  {
    name: "Master",
    audience: "Grupos, redes ou operacoes com mais de uma empresa ou unidade.",
    price: "Sob consulta",
    description:
      "Pacote para governanca corporativa, multiempresa, controle de acesso e leitura consolidada.",
    features: [
      "Tudo do plano Gestao",
      "Camada Master",
      "Empresas, usuarios e permissoes",
      "Visao consolidada por empresa",
      "Governanca multiempresa",
      "Expansao por unidade e estrutura",
    ],
  },
];

export const institutionalPrinciples: FeatureCard[] = [
  {
    title: "Especializacao em turismo e viagens",
    description:
      "O vtur foi desenhado para a rotina de venda, atendimento, operacao e relacionamento do setor.",
  },
  {
    title: "Clareza operacional",
    description:
      "Menus, modulos e permissoes organizados para cada perfil enxergar apenas o que precisa operar.",
  },
  {
    title: "Confianca e governanca",
    description:
      "Escopo por empresa, permissao por papel e leitura consolidada sem perder o controle do acesso.",
  },
  {
    title: "Evolucao por maturidade",
    description:
      "O produto pode comecar pela camada comercial e evoluir para gestao, parametros e multiempresa.",
  },
];

export const faqs = [
  {
    question: "O vtur e apenas um sistema de vendas?",
    answer:
      "Nao. O vtur se posiciona como um CRM completo para turismo e viagens, conectando relacionamento, vendas, operacao, atendimento, gestao e governanca multiempresa.",
  },
  {
    question: "Os modulos podem ser liberados conforme o perfil do usuario?",
    answer:
      "Sim. A estrutura do sistema trabalha com permissoes por modulo e por perfil, o que permite compor experiencias para vendedor, gestor e master sem expor menus desnecessarios.",
  },
  {
    question: "O sistema atende apenas uma empresa?",
    answer:
      "Nao. O perfil Master contempla operacao multiempresa, com troca de contexto, relatorios consolidados e governanca corporativa.",
  },
  {
    question: "Como a implantacao pode acontecer?",
    answer:
      "O fluxo recomendado passa por diagnostico, parametrizacao, migracao, treinamento e entrada em producao com acompanhamento das primeiras rotinas.",
  },
];
