const cacheId = require('../../support/cacheId')
const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber')
const boardSevice = require('../../services/boards')
const cardSevice = require('../../services/cards')
const listService = require('../../services/lists')
const { deletAllCards } = require('../../support/cards')

let reqCard

Given('dont have cards', async function () {
    await deletAllCards(cacheId.getIdList())
});

//cenario 1
When('create a new card with name {string}', async function (nameCard) {
    this.reqCard = await cardSevice.createCards(cacheId.getIdList(), nameCard)
});

Then('the card should be created successfully', async function () {
    assert.equal(this.reqCard.status, 200)
});

//cenario 2
Given('have a card', async function () {
    this.reqCard = await cardSevice.createCards(cacheId.getIdList(), "testeCard")
});

When('to change the description', async function () {
    this.reqCard = await cardSevice.updateDescriptions(this.reqCard.body.id, "alterado com sucesso")
});

Then('the description should be changed successfully', async function () {
    this.reqCard = await cardSevice.getByIdCards(this.reqCard.body.id)
    assert.equal(this.reqCard.status, 200)
    assert.equal(this.reqCard.body.desc, "alterado com sucesso")
});

//cenario 3
When('deleted this card', async function () {
    await cardSevice.deleteCard(this.reqCard.body.id)
});

Then('this card should be deleted successfully', async function () {
    this.reqCard = await cardSevice.getByIdCards(this.reqCard.body.id)
    assert.equal(this.reqCard.status, 404)

});

//cenario 4

Given('that the system does not have a list with id {string}', async function (idList) {
    this.reqList = await listService.getByIdList(idList)
    assert.equal(this.reqList.status, 400)
});

When('the user tries to make a card with id {string}', async function (idList) {
    this.reqCard = await cardSevice.createCards(idList, "Testers")

});

Then('the response should be status cod : {int}', async function (status) {
    assert.equal(this.reqCard.status, status)
});





