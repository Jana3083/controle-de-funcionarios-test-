import 'cypress-xpath';

// Especificação de testes 
describe('Login', () => {

  // Cenário de teste - sucesso
  it('Deve fazer login com sucesso', () => {
    // ARRANGE -> Acesso à página do sistema
    cy.visit('https://cotiaws.github.io/controle-de-funcionarios/app/index.html');

    // ACT -> Ações do teste
    cy.xpath('//*[@id="login-email"]').type('admin@admin.com');
    cy.xpath('//*[@id="login-senha"]').type('123456');
    cy.xpath('//*[@id="btn-login"]').click();

    // ASSERT -> Verificação do resultado
    cy.xpath('//*[@id="tela-dashboard"]/div[1]/h4').should('contain', 'Dashboard');

    // EVIDÊNCIAS
    cy.screenshot('login-sucesso', { overwrite: true });
  });

  // Cenário de teste - falha
  it('Deve falhar ao tentar login', () => {
    // ARRANGE -> Acesso à página do sistema
    cy.visit('https://cotiaws.github.io/controle-de-funcionarios/app/index.html');

    // ACT -> Ações do teste
    cy.xpath('//*[@id="login-email"]').type('admin@admin.com');
    cy.xpath('//*[@id="login-senha"]').type('123467'); // senha incorreta
    cy.xpath('//*[@id="btn-login"]').click();

    // ASSERT -> Verificação do resultado
        cy.xpath('//*[@id="login-erro"]').should('contain', 'Login inválido');
    
    // EVIDÊNCIAS
    cy.screenshot('login-erro', { overwrite: true });
  });

});