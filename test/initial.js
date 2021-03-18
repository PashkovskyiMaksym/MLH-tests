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

        describe('Gender radio buttons', function (){

            it('TC-006 Gender radio buttons label (he) is present', function (){
                let label = $$('.ant-form-item-required')[0].isDisplayed();
                expect(label).toEqual(true);
            });

            it('TC-007 Gender radio buttons label (she) is present', function (){
                let label = $$('.ant-form-item-required')[1].isDisplayed();
                expect(label).toEqual(true);
            });

            it('TC-008 Gender radio buttons label (it) is present', function (){
                let label = $$('.ant-form-item-required')[2].isDisplayed();
                expect(label).toEqual(true);
            });

            it('TC-009 Gender radio buttons (he) is present', function (){
                let radioButtons = $$('.ant-radio')[0].isDisplayed();
                expect(radioButtons).toEqual(true)
            });

            it('TC-010 Gender radio buttons (she) is present', function (){
                let radioButtons = $$('.ant-radio')[1].isDisplayed();
                expect(radioButtons).toEqual(true)
            });

            it('TC-011 Gender radio buttons (it) is present', function (){
                let radioButtons = $$('.ant-radio')[2].isDisplayed();
                expect(radioButtons).toEqual(true)
            });

        })

        it('TC-012 Age field  label is present', function (){
            let label = $$('.ant-form-item-required')[2].isDisplayed();
            expect(label).toEqual(true)
        });

        it('TC-013 Age field  is present', function (){
            let input= $$('.ant-input')[1].isDisplayed();
            expect(input).toEqual(true);
        });

        it('TC-014 Story Type dropdown label is present', function (){
            let label = $$('.ant-form-item-required')[3].isDisplayed();
            expect(label).toEqual(true)
        });

        it('TC-015 Story Type dropdown is present', function (){
            let dropdown = $('.ant-select-selector').isDisplayed();
            expect(dropdown).toEqual(true)
        });

        it('TC-016 Image field  label is present', function (){
            let label = $('').isDisplayed();
            expect(label).toEqual(true)
        });

        it('TC-017 Image field  is present', function (){
            let label = $('.ant-upload').isDisplayed();
            expect(label).toEqual(true)
        });

        it('TC-018 Submit button  is present', function (){
            let button = $('.ant-btn').isDisplayed();
            expect(button).toEqual(true)
        });
    });

});