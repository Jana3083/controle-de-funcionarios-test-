import 'cypress-xpath';

//

// Especificação de testes 
describe('Dashboard', () => {

  // Cenário de teste - sucesso
  it('Acesso à Tela de Cadastro', () => {
    // ARRANGE -> Acesso à página do sistema
    cy.visit('https://cotiaws.github.io/controle-de-funcionarios/app/index.html');
    cy.xpath('//*[@id="login-email"]').type('admin@admin.com');
    cy.xpath('//*[@id="login-senha"]').type('123456');
    cy.xpath('//*[@id="btn-login"]').click();
    cy.xpath('//*[@id="btn-ir-cadastro"]').click();

    // ACT -> Ações do teste
    cy.xpath('//*[@id="cadastro-nome"]').type('Mariana Pereira');
    cy.xpath('//*[@id="cadastro-cargo"]').type('Analista de Sistema');
    cy.xpath('//*[@id="cadastro-salario"]').type('R$5000,00');
    cy.xpath('//*[@id="btn-salvar-funcionario"]').click();

    // ASSERT -> Verificação do resultado
    cy.xpath('//*[@id="cadastro-sucesso"]').should('contain', 'Funcionário cadastrado com sucesso');

    // EVIDÊNCIAS
    cy.screenshot('cadastro-funcionario-sucesso ', { overwrite: true });

      });

  });