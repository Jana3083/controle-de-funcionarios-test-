import 'cypress-xpath';

// Especificação de testes 
describe('Dashboard', () => {

  // Cenário de teste - sucesso
  it('Acesso à Tela de Cadastro', () => {
    // ARRANGE -> Acesso à página do sistema
    cy.visit('https://cotiaws.github.io/controle-de-funcionarios/app/index.html');
    cy.xpath('//*[@id="login-email"]').type('admin@admin.com');
    cy.xpath('//*[@id="login-senha"]').type('123456');
    cy.xpath('//*[@id="btn-login"]').click();

    // ACT -> Ações do teste
    cy.xpath('//*[@id="btn-ir-cadastro"]').click();

    // ASSERT -> Verificação do resultado
    cy.xpath('//*[@id="tela-cadastro"]/div[1]/h4').should('contain', 'Cadastro de Funcionário');

    // EVIDÊNCIAS
    cy.screenshot('abrir-cadastro ', { overwrite: true });
  });

    // Cenário de teste - sucesso
  it('Acesso à Tela de Consulta', () => {
    // ARRANGE -> Acesso à página do sistema
    cy.visit('https://cotiaws.github.io/controle-de-funcionarios/app/index.html');
    cy.xpath('//*[@id="login-email"]').type('admin@admin.com');
    cy.xpath('//*[@id="login-senha"]').type('123456');
    cy.xpath('//*[@id="btn-login"]').click();

    // ACT -> Ações do teste
    cy.xpath('//*[@id="btn-ir-consulta"]').click();

    // ASSERT -> Verificação do resultado
    cy.xpath('//*[@id="tela-consulta"]/div[1]/h4').should('contain', 'Consulta de Funcionários');

    // EVIDÊNCIAS
    cy.screenshot('abrir-consulta  ', { overwrite: true });
  });

});