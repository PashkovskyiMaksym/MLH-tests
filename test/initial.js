describe('My Little Hero', function () { //define suite title by passing a string

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        before('Open App', function () {
            browser.url(''); //open baseUrl
        });

        it('TC-001 Page Title is MLH trial', function () { //define test title by passing a string
            let title = browser.getTitle(); //get page title and assign it to the "title" variable
            browser.pause(2000); //just pause to visually see that something is happening on the page
            expect(title).toEqual('MLH trial'); //compare {title} (actual) and "MLH trial" (expected)
        });

    });

    describe('Elements exist', function () {

        it('TC-002 Header is present', function () {
            let header = $('h3').isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-003 Instruction is present', function () {
            let instruction = $('p').isDisplayed();
            expect(instruction).toEqual(true);
        });

        it('TC-004 Name field label is present', function () {
            let label = $$('.ant-form-item-required')[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-005 Name field is present', function (){
            let input= $$('.ant-input')[0].isDisplayed();
            expect(input).toEqual(true);
        });

        it('TC-006 Gender radio buttons label is present', function (){       // проверка всех элементов массива
            let label = $('.ant-radio-wrapper').isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-007 Gender radio buttons  is present', function (){     // проверка всех элементов массива
            let radioButtons = $('.ant-radio-input').isDisplayed();
            expect(radioButtons).toEqual(true)
        });

        it('TC-008 Age field  label is present', function (){
            let label = $$('.ant-form-item-required')[1].isDisplayed();
            expect(label).toEqual(true)
        });

        it('TC-009 Age field  is present', function (){
            let input= $$('.ant-input')[1].isDisplayed();
            expect(input).toEqual(true);
        });

        it('TC-010 Story Type dropdown label is present', function (){
            let label = $$('.ant-form-item-required')[2].isDisplayed();
            expect(label).toEqual(true)
        });

        it('TC-011 Story Type dropdown label is present', function (){
            let label = $('.ant-select-selection-search-input').isDisplayed();
            expect(label).toEqual(true)
        });





    });

});