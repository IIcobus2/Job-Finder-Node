# Job-Finder-Node
Job Finder in NodeJS

## About Express (Sobre Express):

- *app.get(path, callback):* Cria uma rota que aceita solicitações "get" para a URL especificada em "path" e executa a função de callback fornecida.

- *app.post(path, callback):* Cria uma rota que aceita solicitações "post" para a URL especificada em "path" e executa a função de callback fornecida.

- *app.put(path, callback):* Cria uma rota que aceita solicitações "put" para a URL especificada em "path" e executa a função de callback fornecida.

- *app.delete(path, callback):* Cria uma rota que aceita solicitações "delete" para a URL especificada em "path" e executa a função de callback fornecida.

- *app.use(middleware):* Adiciona um middleware à aplicação. Middlewares são funções que são executadas em solicitações e respostas HTTP e podem ser usadas para manipular os dados da solicitação, verificar autorização, etc.

- *app.listen(port, callback):* Inicia o servidor da aplicação na porta especificada em "port" e executa a função de callback fornecida quando o servidor estiver pronto para receber solicitações.

- *app.set(name, value):* Define o valor de uma opção da aplicação. Por exemplo, você pode usar "app.set('view engine', 'hbs')" para definir o motor de visualização da aplicação como Handlebars.

- *app.get(name):* Obtém o valor de uma opção da aplicação.

- *app.render(view, options, callback):* Renderiza uma visualização usando o motor de visualização da aplicação. O nome da visualização é especificado em "view" e as opções são passadas em "options". A função de callback é executada quando a renderização for concluída.

- *app.locals:* Objeto que armazena dados que podem ser acessados por todas as visualizações da aplicação.

- *res.send(body):* Envia uma resposta HTTP com o corpo especificado em "body".

- *res.json(body):* Envia uma resposta HTTP com o corpo especificado em "body" no formato JSON.

- *res.render(view, options):* Renderiza uma visualização e envia a resposta HTTP com o conteúdo gerado. O nome da visualiza