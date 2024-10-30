# PLATAFORMA WEB DE APOSTAS EM EVENTOS FUTUROS

## DESCRIÇÃO GERAL DO PROJETO 
Este projeto consiste em uma plataforma de apostas online, onde os usuários podem criar e participar de apostas sobre eventos futuros. Esses eventos podem variar desde resultados de jogos esportivos até acontecimentos como eleições ou eventos naturais, como a erupção de um vulcão.

Os usuários da plataforma têm duas funções principais: lançar novos eventos ou apostar em eventos já existentes. Todas as transações financeiras são simuladas pela plataforma, oferecendo uma experiência sem envolvimento de dinheiro real.

## FUNCIONALIDADES PRINCIPAIS

### MÓDULO 1: USUSUÁRIO E/OU LANÇADOR DE EVENTOS 
1. **Cadastro e Login:**
   - **Cadastro:** Os usuários podem se registrar fornecendo nome, email, senha e data de nascimento.
   - **Login:** Apenas usuários autenticados podem acessar suas contas e criar ou participar de eventos.
   
2. **Criação de Eventos:**
   - Após realizar o login, os usuários podem criar novos eventos, informando título, descrição, valor da aposta, período de recebimento de apostas e a data do evento.
   
3. **Navegação e Apostas:**
   - Na página principal, os usuários podem pesquisar eventos, visualizar eventos mais apostados ou próximos de encerrar, e apostar no resultado do evento (Sim/Não), com o valor debitado de sua carteira virtual.

4. **Minha Wallet:**
   - Os usuários podem simular a adição de créditos à sua carteira virtual, usar esses créditos para realizar apostas e, se desejado, sacar seus fundos para uma conta bancária, respeitando os limites de saque e as taxas da plataforma.

5. **Apostar em Evento:**
   - Os usuários podem apostar em eventos futuros, escolhendo entre "Acontecerá" ou "Não Acontecerá", e o valor apostado é imediatamente debitado da carteira virtual.

### MÓDULO 2: GERENCIAMENTO DA PLATAFORMA 
1. **Avaliação de Eventos:**
   - Moderadores avaliam novos eventos e decidem se os aprovam ou rejeitam, com base em critérios pré-estabelecidos.
   
2. **Finalização de Eventos:**
   - Após a data do evento, o moderador confirma o resultado (Sim/Não) e os ganhos são distribuídos proporcionalmente entre os apostadores vencedores, creditando o valor em suas wallets.

## TECNOLOGIAS UTILIZADAS 
- **Frontend:** HTML, CSS, TypeScript.
- **Backend:** TypeScript e Node.js.
- **Banco de Dados:** MySQL.

## ESTRUTURA DO PROJETO 
Este projeto foi organizado em duas partes:
1. **Backend:** Serviços REST que permitem a criação de eventos, apostas, gestão de carteiras e avaliação de resultados.
2. **Frontend:** Interface de usuário para navegação, visualização de eventos, cadastro e interações com a carteira.

### PRINCIPAIS SERVIÇOS REST 
- `/signUp`: Cadastro de usuários
- `/login`: Autenticação de usuários
- `/addNewEvent`: Cadastro de novos eventos
- `/getEvents`: Busca e listagem de eventos
- `/betOnEvent`: Aposta em eventos
- `/addFunds`: Adição de créditos à carteira
- `/withdrawFunds`: Saque de fundos da carteira
- `/evaluateNewEvent`: Avaliação e aprovação/rejeição de novos eventos
- `/finishEvent`: Finalização de eventos e distribuição de ganhos
- `/searchEvent`: Busca de eventos por palavra-chave

## OBSERVAÇÕES IMPORTANTES 
- Não será implementada alteração de perfil de usuário (como troca de senha ou email).
- O moderador será incluído diretamente no banco de dados, sem um formulário de cadastro.
- O projeto não inclui ranking de apostadores, comentários ou avaliações de eventos.

## ROTEIRO DE DESENVOLVIMENTO 
O projeto foi desenvolvido em várias etapas:
1. **Backend:** Implementação dos serviços mínimos para cadastro, login e gestão de eventos e apostas.
2. **Frontend:** Desenvolvimento da interface de usuário e funcionalidades interativas.
3. **Integração:** Conexão do frontend com o backend para fornecer uma experiência completa.
