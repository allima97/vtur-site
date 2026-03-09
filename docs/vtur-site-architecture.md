# Arquitetura do vtur.com.br

## Posicionamento central

`vtur` deve ser apresentado como um CRM completo para turismo e viagens.

O discurso institucional deixa de tratar o produto como um simples gerenciador de vendas e passa a
organizar a proposta de valor em cinco camadas:

1. CRM e relacionamento
2. Vendas e orcamentos
3. Operacao e pos-venda
4. Gestao de equipe e performance
5. Governanca multiempresa

## Estrutura de paginas recomendada

- `/`:
  homepage com hero forte, prova de valor, blocos por perfil, teaser de planos, metodo de implantacao e FAQ
- `/produto`:
  mapeamento completo dos modulos por permissao
- `/planos`:
  estrutura comercial por camada `Comercial`, `Gestao` e `Master`
- `/institucional`:
  narrativa da marca, principios, especializacao no setor e metodo
- `/contato`:
  qualificacao comercial, briefing e ponte para demonstracao/proposta

## Mapeamento de modulos por permissao

### Vendedor

#### Rotina e acompanhamento
- Dashboard
- Agenda
- Tarefas
- Mural de Recados
- Minhas Preferencias
- Campanhas
- Minha Escala

#### CRM e vendas
- Clientes
- Vendas
- Importar Contratos
- Orcamentos
- Importar Orcamentos
- Consultoria Online

#### Operacao e performance
- Viagens
- Documentos Viagens
- Controle de SAC
- Comissionamento
- Metas
- Relatorios de vendas

### Gestor

Inclui todos os recursos do perfil Vendedor e adiciona:

#### Gestao comercial
- Dashboard Gestor
- Equipe
- Metas
- Escalas
- Ranking de Vendas

#### Financeiro e regras
- Conciliacao
- Regras de Comissao
- Formas de Pagamento
- Cambios
- Fechamento de Comissao

#### Cadastros e parametros
- Paises
- Subdivisoes
- Cidades
- Destinos
- Produtos
- Circuitos
- Produtos em Lote
- Fornecedores
- Tipo de Produtos
- Tipo de Pacotes
- Parametros do Sistema
- Avisos
- Orcamentos (PDF)

### Master

Recebe a camada de governanca corporativa e pode combinar acessos gerenciais conforme a politica da operacao.

#### Governanca
- Dashboard Master
- Empresas
- Usuarios
- Permissoes
- Selecao de Empresa

#### Inteligencia executiva
- Relatorios Consolidados
- Vendas por Destino
- Vendas Detalhadas
- Ranking de Vendas

#### Operacao corporativa
- Escalas e Parametros
- Cadastros Compartilhados
- Governanca de Acesso

## O que grandes empresas de produto fazem bem

Padroes observados em referencias oficiais de SaaS/CRM:

- HubSpot:
  https://www.hubspot.com/products/crm
- Pipedrive:
  https://www.pipedrive.com/
- Salesforce:
  https://www.salesforce.com/crm//
- monday CRM:
  https://monday.com/crm

Principios adaptados para o vtur:

1. Comecar pelo problema e pelo resultado, nao pela lista de menus
2. Explicar o produto por fluxo de trabalho e por perfil
3. Mostrar metodo de implantacao para transmitir confianca
4. Ter pagina de planos alinhada ao valor percebido
5. Usar FAQ, prova de governanca e CTA claros para conversao

## Observacoes para a proxima etapa

- Precos reais ainda precisam ser definidos e encaixados na pagina `/planos`
- Formulario ou canal real de contato ainda pode ser integrado depois
- Quando houver material institucional definitivo, vale incluir prova social, cases e depoimentos
