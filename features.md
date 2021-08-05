##MVP Features -> Korean real estate app similar to Gaijinpot for Japan for foreigners w/ short term stay for exchange students

1. Backend API - property schema -> MongoDB schema 'woorijip'
2. Create a listing -> POST request to API to add new listing on SUBMIT
3. Search function w/ GET request to API which match listings location -> Throw error if none found
4. Front End -> Home page with links & example recommendations
5. Front End -> Rental Search: Search based on criteria, dropdown boxes w/ Search button
6. Front End -> List a place for rent


##End State
4. Component: Mortgage Calculator on Listing page
5. Component: Price predictor via regression model - need Data set (zillow?), scikit learn for regression? Have location/house price of listing tested against the model
6. User Account -> Ability to save a listing w/ heart symbol onClick(), ability to delete listing w/ trashcan onClick()
7. Contact box to contact owner