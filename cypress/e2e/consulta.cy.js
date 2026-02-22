import 'cypress-xpath';

//VARIAVEIS GLOBAIS de configuração
const URL_Login = 'https://cotiaws.github.io/controle-de-funcionarios/app/index.html';

//VARIÁVEIS GLOBAIS de valores
const USER_EMAIL = 'admin@admin.com';
const USER_SENHA = '123456';
// Especificação de testes 
describe('consulta', () => {

  // Cenário de teste - sucesso
  it('Acesso à Tela de Consulta', () => {
    // ARRANGE -> Acesso à página do sistema
    cy.visit(URL_Login);
    cy.xpath('//*[@id="login-email"]').type(USER_EMAIL);
    cy.xpath('//*[@id="login-senha"]').type(USER_SENHA);
    cy.xpath('//*[@id="btn-login"]').click();
    cy.xpath('//*[@id="btn-ir-consulta"]').click();

    // ACT -> Ações do teste
    cy.xpath('//*[@id="consulta-termo"]').type('Mariana Pereira');
    cy.xpath('//*[@id="btn-pesquisar"]').click();

    // ASSERT -> Verificação do resultado
    cy.xpath('//*[@id="col-nome-1"]').should('contain', 'Mariana Pereira');

    // EVIDÊNCIAS
    cy.screenshot('consulta-funcionario ', { overwrite: true });

      });

  });