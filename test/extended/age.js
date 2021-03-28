import sel from '../../data/selectors';
import exp from '../../data/expected.json'

describe('Age field test', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    it('TC-028 Age Field Placeholder = "Hero \'s age" ', function () {
        let placeholder = $(sel.age).getAttribute('placeholder');
        expect(placeholder).toEqual(exp.agePlaceholder);
    });

});

