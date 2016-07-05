export default {
  
  searchYelp: (term, location, callback) => {
    const url = `http://localhost:3000/yelpSearch?term=${term}&location=${location}`;
    
    fetch(url)
      .then(function(response) {
        // console.log(response);                   
        return response.json() 
      })
      .then(function(data) {
        // console.log(data.businesses);
        
        const businesses = data.businesses.map( business => {
          return {
            id: business.id,
            name: business.name,
            like: 0,
            image_url: business.image_url,
            url: business.url,
            review_count: business.review_count,
            rating_img_url: business.rating_img_url,
            rating_img_url_large: business.rating_img_url_large,
            rating_img_url_small: business.rating_img_url_small
          }
        })
        callback(businesses);
      })
      .catch(function(err) {
        console.log(err);
      })
  },
  
  getYelpBusiness: (id, callback) => {
    const url = `http://localhost:3000/yelpSearch/business?id=${id}`;
    
    fetch(url)
      .then(function(response) {
        // console.log(response);                   
        return response.json() 
      })
      .then(function(business) {
        const data = {
          id: business.id,
          name: business.name,
          like: 0,
          image_url: business.image_url,
          url: business.url,
          review_count: business.review_count,
          rating_img_url: business.rating_img_url,
          rating_img_url_large: business.rating_img_url_large,
          rating_img_url_small: business.rating_img_url_small
        }
        // console.log(data);
        callback(data);
      })
      .catch(function(err) {
        console.log(err);
      })
  },

  getUsers: (callback) => {
    const url = `http://localhost:3000/users`;
    fetch(url)
      .then(function(response) {             
        return response.json() ;
      })
      .then(function(user) {
        console.log(user);
        callback(user);
      })
      .catch(function(err) {
        console.log(err);
      })
  },

  getFriends: (callback, userid) => {
    const url = `http://localhost:3000/users/friends/${userid}`;
    fetch(url)
      .then(function(response) {               
        return response.json() ;
      })
      .then(function(user) {
        console.log(user);
        callback(user);
      })
      .catch(function(err) {
        console.log(err);
      })
  },
  
  addFriend: (callback, userid, user) => {
    const url = `http://localhost:3000/users/friends/${userid}`;
    fetch(url, {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(function(response) {               
        return response.json();
      })
      .then(function(user) {
        callback(user);
      })
      .catch(function(err) {
        console.log(err);
      })
  },
  
  getUserCreatedDecks: (userid, callback) => {
    const url = `http://localhost:3000/decks/${userid}`;
    fetch(url)
      .then(function(response) {
        return response.json() 
      })
      .then(function(userDecks) {
        callback(userDecks);
      })
      .catch(function(err) {
        console.log(err);
      })
  },
  
  getUserSharedDecks: (userid, callback) => {
    const url = `http://localhost:3000/decks/shared/${userid}`;
    fetch(url)
      .then(function(response) {
        return response.json() 
      })
      .then(function(sharedDecks) {
        callback(sharedDecks);
      })
      .catch(function(err) {
        console.log(err);
      })
  },
  
  updateLikeCount: (deckid, cardid, callback) => {
    const url = `http://localhost:3000/decks/${deckid}`;
    const request = new Request(url, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        cardId: cardid
      })
    })
    fetch(request)
      .then(function(response) {
        return response.json() 
      })
      .then(function(response) {
        callback(response);
      })
      .catch(function(err) {
        console.log(err);
      })
  },
  
  updateSwipeStatus: (deckid, userId, callback) => {
    const url = `http://localhost:3000/decks/shared/${deckid}`;
    const request = new Request(url, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        userId: userId
      })
    })
    fetch(request)
      .then(function(response) {
        return response.json() 
      })
      .then(function(response) {
        callback(response);
      })
      .catch(function(err) {
        console.log(err);
      })
  }
};


