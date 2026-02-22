import 'cypress-xpath';

//Especificação de testes 
describe('Login no sistema', () => {

  //Cenário de teste 
  it('Deve fazer login com sucesso', () => {

    //ARRANGE -> Acesso a página do sistema
    cy.visit('https://cotiaws.github.io/controle-de-funcionarios/app/index.html');


    //ACT -> Etapa para realizar as ações do teste
    cy.xpath('//*[@id="login-email"]').type('admin@admin.com');
    cy.xpath('//*[@id="login-senha"]').type('123456');
    cy.xpath('//*[@id="btn-login"]').click();

    //ASSERT -> Etapa para verificar os resultados do teste 
    cy.xpath('//*[@id="tela-dashboard"]/div[1]/h4').should('contain', 'Dashboard');

    //EVIDÊNCIAS
    cy.screenshot('Deve fazer login com sucesso', { overwrite : true });
  })

}) 