describe ('Test de login'), () => {

    it('cargar Homen en la ruta/', () => {

    //arrange: configuraciones iniciales
    //act: ejecutar la accion
    cy.visit('/'); // visit () en este caso configura el estado y además realiza la accion ya que estoy revisando que se cargue la pantalla.

    //assert: validaciones
    cy.get('h1').contains('Home');

    });

    it('Iniciar sesión como Customer', () => {
        //intercept: configuraciones iniciales para esperar que se cargue la pantalla
        cy.intercept('POST', 'https://reqres.in/api/login').as('loginRequest');

        //arrange: configuraciones iniciales
        //act: ejecutar la accion
        cy.visit('/Login'); // visit () en este caso configura el estado y además realiza la accion ya que estoy revisando que se cargue la pantalla.
    
        //assert: validaciones
        cy.get('input[type="email"]').type('drstr@example.com');
        cy.get('input[type="password"]').type('123456');
        cy.get('button[type="submit"]').click();

        cy.wait('@loginRequest'); // wait () espera que se cargue la pantalla 
            
        });
}