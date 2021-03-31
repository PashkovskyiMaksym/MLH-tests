// import sel from '../../data/selectors'
// import {age, gender, name, story} from '../../data/testData'
// import inputValues4 from '../../helpers/methods';
//
// import path from 'path';
//
//
// describe('Image', function () {
//
//     before('Open App', function () {
//         browser.url('');
//     });
//
//     it(' TC - 777 Uploading image jpeg', function () {
//         inputValues4(name.default, gender.she, age.default, story.comedy);
//         const image = $(".ant-upload input");
//         const filepath = path.join(__dirname, '../../data/image.jpeg');
//         const remoteFilePath = browser.uploadFile(filepath);
//         browser.execute(function () {
//             document.getElementsByTagName("input")[6].style.display = 'block'
//         });
//         image.waitForDisplayed();
//         image.setValue(remoteFilePath)
//         $(sel.submit).click();
//         browser.pause(3000)
//         let tryAgainBtn = $(sel.tryAgain).isDisplayed();
//         expect(tryAgainBtn).toEqual(true);
//     });
//
//     // it('TC - 778 Upload image', function  (){
//     //     const image = $(".ant-upload input");
//     //     const filePath = path.join(__dirname, `../../data/image.jpeg`);
//     //     const remoteFilePath = browser.uploadFile(filePath);
//     //     $('div [role=button]').click().setValue(remoteFilePath)
//     //     image.waitForDisplayed();
//     //
//     // });
//     //
//     // it('TC - 779 should upload a file', function () {
//     //
//     //     const filePath = `../../data/image.jpeg`
//     //     const remoteFilePath = browser.uploadFile(filePath)
//     //
//     //     $(".ant-upload input").setValue(remoteFilePath)
//     //
//     // });
//
// });
