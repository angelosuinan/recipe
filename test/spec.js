const user = {
  _id: '5dc5474b4fccb853acf6395c',
  username: 'juandelacruz',
}

module.exports = {
  user,
  foobar: {
    q: `
    query {
      foo
    }
    `,
    r: `
    {
      "data": {
        "foo": "bar"
      }
    }
    `,
  },
  currentUser: {
    q: `
    mutation{
      register(username: "${user.username}", password: "P@ssw0rd") {
        user {
          _id
          username
        }
        token
      }
    }
    `,
    r: `
    {
      "data": {
        "register": {
          "user": {
            "_id": "5dc5474b4fccb853acf6395c",
            "username": "juandelacruz"
          },
          "token": "5dc5474b4fccb853acf6395c"
        }
      }
    }
    `,
  },
}
