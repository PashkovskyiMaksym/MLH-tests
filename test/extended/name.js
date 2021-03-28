import sel from '../../data/selectors'
import exp from '../../data/expected.json'

describe('Age field suit', function () {

    before('Open App', function () {
        browser.url('');
    });

    describe('Placeholder', function () {

        it('TC - 028 Name Placeholder', function () {
            let placeholder = $(sel.name).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.namePlaceholder);
        });

    });

    describe('Positive cases', function () {

    });

    describe('Negative cases', function () {

    });

});