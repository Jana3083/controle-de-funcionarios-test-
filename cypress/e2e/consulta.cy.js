import 'cypress-xpath';

// Especificação de testes 
describe('consulta', () => {

  // Cenário de teste - sucesso
  it('Acesso à Tela de Consulta', () => {
    // ARRANGE -> Acesso à página do sistema
    cy.visit('https://cotiaws.github.io/controle-de-funcionarios/app/index.html');
    cy.xpath('//*[@id="login-email"]').type('admin@admin.com');
    cy.xpath('//*[@id="login-senha"]').type('123456');
    cy.xpath('//*[@id="btn-login"]').click();
    cy.xpath('//*[@id="btn-ir-consulta"]').click();

    // ACT -> Ações do teste
    cy.xpath('//*[@id="consulta-termo"]').type('Mariana Pereira');
    cy.xpath('//*[@id="btn-pesquisar"]').click();

    // ASSERT -> Verificação do resultado
    cy.xpath('//*[@id="col-nome-1"]', { timeout: 10000 }).should('contain', 'Mariana Pereira');

    // EVIDÊNCIAS
    cy.screenshot('consulta-funcionario ', { overwrite: true });

      });

  });