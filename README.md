# Monitoria • Aprender é melhor junto

**[Acesse o site](https://victorrmribeiro.github.io/monitoria/)**

Mural estudantil com informações da monitoria, oficinas, materiais, monitores atuais, antigos monitores e atendimento remoto.

## Mural da comunidade

| Espaço | O que reunir |
| --- | --- |
| Oficinas | Tema, responsável, data, modalidade e inscrição |
| Materiais | Assunto, autoria, descrição e link |
| Avisos | Novidades, horários e oportunidades |
| Monitores atuais | Nome autorizado, disciplina e período |
| Nossa história | Antigos monitores e contribuições |

Esta primeira versão tem publicações demonstrativas. Nomes, disciplinas, datas e link da agenda serão preenchidos pela equipe.

## Painel de boas-vindas

O painel **Sua visita** apresenta o funcionamento da monitoria e a sala 194 no campus Taguatinga. Dias, horários, disciplinas e forma de participação aguardam confirmação.

Preencha `visita` em [conteudo.js](conteudo.js): `sala`, `campus`, `horarios`, `observacaoHorarios`, `disciplinas` e `participacao`. Campos vazios exibem avisos de informação ainda não divulgada. Use `\n` para separar dias e horários em linhas. Sem observação específica, os horários usam Brasília. A agenda remota continua independente deste painel.

## Atualizar o site

Edite [conteudo.js](conteudo.js). As alterações na branch `main` são publicadas automaticamente pelo GitHub Pages.

- `agendaUrl`: link HTTPS público da página de reservas do Google Agenda. Vazio enquanto não houver agenda disponível.
- `publicacoes`: cartões nas categorias `Oficina`, `Material` e `Aviso`.
- `atuais` e `anteriores`: monitores atuais e antigos.
- `demonstracao`: use `false` depois de substituir todos os cartões demonstrativos.

Exemplo de monitor:

```js
{ nome: 'Nome autorizado', area: 'Disciplina atendida', periodo: '2026.2', link: '' }
```

Cada publicação usa `categoria`, `titulo`, `resumo`, `detalhe`, `etiqueta`, `visual`, `rodape` e `link`. O visual aceita `git`, `material` ou `aviso`. O link HTTPS é opcional.

Use o [modelo de publicação](modelo-publicacao.md) e o [guia de continuidade](continuidade.md) para manter o conhecimento entre semestres. Sugestões podem ser registradas nas Issues; mudanças podem ser propostas por pull requests.

## Agenda e atendimento remoto

1. Na conta universitária, verifique se Google Agenda disponibiliza **Criar → Programação de horários**. A disponibilidade depende da licença e das configurações da instituição.
2. Configure duração, horários, antecedência e fuso `America/Sao_Paulo`.
3. Escolha Google Meet como videoconferência e peça a disciplina e a dúvida na descrição.
4. Copie o link da página de reservas para `agendaUrl`. Não publique a agenda pessoal.
5. Teste reserva e cancelamento usando uma conta estudantil.

O Google administra reservas e links de reunião. O site não tem autenticação própria nem coleta de dados de atendimento.

[Documentação do Google Agenda](https://support.google.com/calendar/answer/10729749?hl=pt-BR).

## Estrutura

- `index.html`: seções e textos permanentes.
- `styles.css`: visual e layout responsivo.
- `conteudo.js`: conteúdo e configuração.
- `app.js`: filtros, publicações e equipe.
- `modelo-publicacao.md`: modelo para novos conteúdos.
- `continuidade.md`: passagem de conhecimento entre equipes.

Para visualizar localmente, abra `index.html` no navegador. Não precisa instalar dependências ou executar build.

## Publicação

Configurado no GitHub Pages: branch `main`, pasta `/ (root)`. O endereço é https://victorrmribeiro.github.io/monitoria/.

Antes de divulgar novidades, confira links, datas, autorizações de nomes e o funcionamento no celular. Para trocar a equipe, preserve os registros dos antigos monitores.
