import sel from '../../data/selectors'
import {name, gender,  age, story} from '../../data/testdata'

describe('Required fields and story created', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-026 Submit button is enabled after fields 1-4 are field in with valid values', function () {
        $(sel.name).setValue(name.default);
        $$(sel.radioButtons)[gender.she].click();
        $(sel.age).setValue(age.default);
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        browser.pause(2000);
        let submitBtn = $(sel.submitButton).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-027 Submit button is enabled after fields 1-4 are field in with valid values', function () {
        browser.refresh();

        $(sel.name).setValue('LadyBug007');
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        $(sel.submitButton).click();
        browser.pause(2000)
        let tryAgainButton = $(sel.tryAgain).isDisplayed();
        expect(tryAgainButton).toEqual(true);
    });

});