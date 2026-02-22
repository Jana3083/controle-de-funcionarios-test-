import 'cypress-xpath';

//VARIAVEIS GLOBAIS de configuração
const URL_Login = 'https://cotiaws.github.io/controle-de-funcionarios/app/index.html';

//VARIÁVEIS GLOBAIS de valores
const USER_EMAIL = 'admin@admin.com';
const USER_SENHA = '123456';

// Especificação de testes 
describe('cadastro', () => {

  // Cenário de teste - sucesso
  it('Acesso à Tela de Cadastro', () => {
    // ARRANGE -> Acesso à página do sistema
    cy.visit(URL_Login);
    cy.xpath('//*[@id="login-email"]').type(USER_EMAIL);
    cy.xpath('//*[@id="login-senha"]').type(USER_SENHA);
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