
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('company').del()
    .then(function () {
      // Inserts seed entries
      return knex('company').insert([
        {id: 1, name: 'Burguer King', cnpj: '13.574.594/0001-96', password: 'bk2020', qtdInvoicesMonth: 6, qtdDebtsMonth: 2},
        {id: 2, name: 'Apple', cnpj: '00.623.904/0001-73', password: 'apple2020', qtdInvoicesMonth: 2, qtdDebtsMonth: 0},
        {id: 3, name: 'MC Donads', cnpj: '42.591.651/0001-43', password: 'mc2020', qtdInvoicesMonth: 5, qtdDebtsMonth: 3},
        {id: 4, name: 'Acer', cnpj: '11.068.167/0004-53', password: 'acer2020', qtdInvoicesMonth: 8, qtdDebtsMonth: 1},
        {id: 5, name: 'Pão de Açucar', cnpj: '47.474.245/0001-41', password: 'pda2020', qtdInvoicesMonth: 2, qtdDebtsMonth: 2},
        {id: 6, name: 'Samnsung', cnpj: '00.280.273/0001-37', password: 'samnsung2020', qtdInvoicesMonth: 1, qtdDebtsMonth: 0},
        {id: 7, name: 'Xiaomi', cnpj: '20.221.812/0001-74', password: 'xiami2020', qtdInvoicesMonth: 4, qtdDebtsMonth: 6}
      ]);
    });
};
