describe('Автотесты на форму логина', function () {
    it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт 
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
         })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт 
        cy.get('#forgotEmailButton').click(); // Нажать забыли пароль
        cy.get('#mailForgot').type('maxim@qa.studio'); // Ввели любой имейл
        cy.get('#restoreEmailButton').click(); // Нажать отправить код
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
        })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт 
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин
        cy.get('#pass').type('iLoveqastudio2'); // Ввели пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
         })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт 
        cy.get('#mail').type('german3@dolnikov.ru'); // Ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
         })

     it('Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт 
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
         })

    it('Логин строчными буквами и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт 
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
         })
})
