// Edite este arquivo para atualizar o site. Não inclua dados privados.
window.MONITORIA = {
  nome: 'Monitoria',
  repositorio: 'https://github.com/VictorRMRibeiro/monitoria',
  // Cole aqui o link público de RESERVAS, não o link da sua agenda pessoal.
  agendaUrl: '',
  demonstracao: true,
  // Painel de apresentação. Preencha somente com informações confirmadas.
  // Campos vazios exibem os avisos de informação ainda não divulgada.
  visita: {
    sala: 'Sala 194',
    campus: 'Campus Taguatinga',
    horarios: '', // Ex.: dias da semana e intervalos de atendimento
    observacaoHorarios: '', // Ex.: período de vigência ou exceções
    disciplinas: '',
    participacao: '' // Informe se pode chegar direto ou como agendar.
  },
  publicacoes: [
    { categoria: 'Oficina', titulo: 'Do primeiro commit ao trabalho em equipe.', resumo: 'Uma ideia de oficina para perder o medo do Git e construir junto no GitHub.', detalhe: 'Exemplo de publicação: uma oficina prática sobre repositórios, commits e colaboração. A equipe ainda precisa confirmar a programação, o responsável, a data e o link de inscrição.', etiqueta: 'PROPOSTA DE OFICINA', visual: 'git', rodape: 'Data a definir', link: '' },
    { categoria: 'Material', titulo: 'Seu próximo “agora entendi” começa aqui.', resumo: 'Um cantinho para reunir guias, exercícios e descobertas da comunidade.', detalhe: 'Exemplo de publicação: reúna aqui materiais revisados pela equipe. Ao cadastrar um recurso, informe o assunto, a autoria e o link de acesso. Ainda não há material vinculado a este cartão.', etiqueta: 'BIBLIOTECA EM CONSTRUÇÃO', visual: 'material', rodape: 'Feito para consultar e voltar', link: '' },
    { categoria: 'Aviso', titulo: 'Um novo ponto de encontro para aprender.', resumo: 'Estamos preparando este espaço. Sua participação vai ajudar a dar forma a ele.', detalhe: 'Este é o mural inicial da monitoria. Em breve, a equipe poderá cadastrar monitores, publicar oficinas e disponibilizar os horários de atendimento. Os conteúdos atuais são demonstrativos.', etiqueta: 'NOSSO ESPAÇO', visual: 'aviso', rodape: 'A comunidade começa com você', link: '' }
  ],
  // Exemplo: { nome: 'Nome autorizado', area: 'Disciplina', periodo: '2026.2', link: '' }
  atuais: [],
  anteriores: []
};

