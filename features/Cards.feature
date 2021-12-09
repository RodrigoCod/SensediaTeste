Feature: Cards
    Background:
        Given dont have cards

    Scenario: Create a new card
        When create a new card with name "SensediaTeste"
        Then the card should be created successfully

    Scenario: Update a card
        Given have a card
        When to change the description
        Then the description should be changed successfully

    Scenario: Delete a card
        Given have a card
        When deleted this card
        Then this card should be deleted successfully

    Scenario: Create a card with "idList" invalid
        Given that the system does not have a list with id "1"
        When the user tries to make a card with id "1"
        Then the response should be status cod : 400

