**React Router:** biblioteca utilizada em aplicações React para realizar roteamento de forma declarativa. Ela usa URLs para exibir componentes específicos.

**Configuração:** é importante envolver toda a sua aplicação com o componente BrowserRouter, no ponto de entrada da aplicação. Isso permite que o React Router gerencie o histórico de navegação do navegador. Devemos usar os componentes Routes (no plural) e Route (no singular) para definir as rotas da aplicação. O Routes agrupa todas as rotas, e cada Route define um caminho (path) e o componente (element) que deve ser renderizado quando esse caminho é acessado.

**Single Page Application (SPA):** em uma SPA, o HTML inicial é carregado uma única vez, e o JavaScript (com React) é responsável por construir, renderizar, desmontar, atualizar as diferentes "páginas" ou visões, sem a necessidade de novas requisições completas ao servidor. Elas surgiram para tornar as aplicações mais dinâmicas, interativas, performáticas e eficientes.

**Client (cliente):** É o seu navegador (Chrome, Firefox, Safari, etc.), que faz os pedidos para acessar um site.

**Server (servidor):** É o computador que armazena e envia os arquivos do site quando o cliente faz um pedido.

**server-side:** O servidor é o responsável por montar a página HTML completa, com todos os dados, antes de enviá-la para o navegador. O navegador apenas exibe o que recebeu. É um modelo mais antigo, onde cada clique pode gerar um novo pedido de página completa ao servidor.

**client-side:** O servidor envia um arquivo HTML básico (geralmente com pouco conteúdo), e o próprio navegador, usando JavaScript (como o React), é quem busca os dados, monta os componentes e exibe a interface. Este é o conceito por trás das SPAs (Single Page Applications), onde a aplicação carrega uma vez e as mudanças de tela são gerenciadas pelo navegador, tornando a experiência mais fluida.

**rotas aninhadas (nested routes):** a ideia principal é criar um elemento de rota "pai" com o prefixo comum (por exemplo, <Route path='/auth'>) e, dentro dele, aninhar as rotas "filhas" que completam o caminho (por exemplo, <Route path='register' element={<Register />} />). Isso ajuda a manter o código mais organizado e semântico, evitando a repetição de prefixos e preparando o terreno para futuras funcionalidades, como a aplicação de layouts específicos para grupos de rotas.

**NavLink:** Para renderizar ou aplicar estilos com base na ativação da rota.

**Link:** Para navegação direta, sem a necessidade de controlar o estado de ativação.

**useNavigate:** Para navegação via JavaScript, útil em resposta a eventos.

**URL:** é o endereço completo que aparece no navegador (ex: https://codeconnect.com/auth/login).

**Rota:** é a parte da URL que o React Router usa para decidir qual componente exibir (ex: /auth/login no <Route path="/auth/login" element={<Login />} />).

**Por que usar prefixos nas rotas?** Serve para agrupar rotas que fazem parte de uma mesma "seção" ou funcionalidade da aplicação. Por exemplo, /auth/login e /auth/register indicam que ambas as páginas estão relacionadas à autenticação. Isso melhora a clareza e a organização do código.

**Rota para o logout:** Ao criar uma rota /auth/logout, toda a lógica de saída da conta fica centralizada em um único lugar. A lógica de logout pode ser facilmente reutilizada em diferentes partes da aplicação (menu, botão de sair, etc.), garantindo que a experiência do usuário seja sempre a mesma. Um código centralizado é mais fácil de entender, testar e manter. Se for necessário adicionar uma nova funcionalidade (como um alerta de confirmação antes de sair), a mudança é feita em um só lugar.