import 'cypress-xpath';

//VARIAVEIS GLOBAIS de configuração
const URL_Login = 'https://cotiaws.github.io/controle-de-funcionarios/app/index.html';

//VARIÁVEIS GLOBAIS de valores
const USER_EMAIL = 'admin@admin.com';
const USER_SENHA = '123456';

// Especificação de testes 
describe('fluxo-completo', () => {

  // Cenário de teste - sucesso
  it('Realizar o fluxo completo de cadastro e consulta', () => {
    // ARRANGE -> Acesso à página do sistema
    cy.visit(URL_Login); // acesso à página do sistema
    cy.xpath('//*[@id="login-email"]').type(USER_EMAIL); // preenchimento do campo de email para login
    cy.xpath('//*[@id="login-senha"]').type(USER_SENHA); // preenchimento do campo de senha para login
    cy.xpath('//*[@id="btn-login"]').click(); // ação para realizar o login no sistema
    cy.xpath('//*[@id="btn-ir-cadastro"]').click(); // ação para acessar a tela de cadastro de funcionário

    // ACT -> Ações do teste
    cy.xpath('//*[@id="cadastro-nome"]').type('Mariana Pereira'); // nome do funcionário a ser cadastrado
    cy.xpath('//*[@id="cadastro-cargo"]').type('Analista de Sistema'); // cargo do funcionário a ser cadastrado
    cy.xpath('//*[@id="cadastro-salario"]').type('R$5000,00'); // salário do funcionário a ser cadastrado
    cy.xpath('//*[@id="btn-salvar-funcionario"]').click(); // ação para salvar o funcionário cadastrado

    // ASSERT -> Verificação do resultado
    cy.xpath('//*[@id="cadastro-sucesso"]').should('contain', 'Funcionário cadastrado com sucesso'); // validação da mensagem de sucesso do cadastro

    // ACT -> Ações do teste  
    cy.xpath('//*[@id="btn-voltar-dashboard-cadastro"]').click(); // ação para voltar ao dashboard
    cy.xpath('//*[@id="btn-ir-consulta"]').click(); // ação para acessar a tela de consulta
    cy.xpath('//*[@id="consulta-termo"]').type('Mariana Pereira'); // termo de pesquisa para encontrar o funcionário cadastrado
    cy.xpath('//*[@id="btn-pesquisar"]').click();// ação para realizar a pesquisa do funcionário cadastrado

    // ASSERT -> Verificação do resultado
    cy.xpath('//*[@id="col-nome-1"]').should('contain', 'Mariana Pereira'); // validação de que o funcionário cadastrado foi encontrado na consulta

    // ACT -> Ações do teste
    cy.xpath('//*[@id="btn-voltar-dashboard-consulta"]').click(); // ação para voltar ao dashboard
    cy.xpath('//*[@id="btn-logout"]').click(); // ação para realizar logout do sistema

    // ASSERT -> Verificação do resultado
    cy.xpath('//*[@id="login-email"]').should('be.visible'); // validação de que a tela de login está visível após o logout do sistema    

    // EVIDÊNCIAS
    cy.screenshot('fluxo-completo', { overwrite: true });

      });

  });