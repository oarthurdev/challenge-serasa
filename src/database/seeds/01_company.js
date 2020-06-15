
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('company').del()
    .then(function () {
      // Inserts seed entries
      return knex('company').insert([
        {id: 1, name: 'Burguer King', cnpj: '13574594000196', password: 'f5ede74ba1a5e5455ab73d0baf9377a7', qtdInvoicesMonth: 6, qtdDebtsMonth: 2},
        {id: 2, name: 'Apple', cnpj: '00623904000173', password: 'be4e40f49bb46715f05b8338a194a522', qtdInvoicesMonth: 2, qtdDebtsMonth: 0},
      ]);
    });
};
