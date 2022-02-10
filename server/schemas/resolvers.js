const { User } = require('../models/User');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {

  Query: { 
    // attempt 2 with different style
    me: async (parent, args, context) => {
    try {
        if (context.user) {
          return User.findOne({ _id: context.user._id })
        }
        throw new AuthenticationError('You need to be logged in!');
    }
    catch (err) {
        console.log(err);
    }
},
},

  Mutation: {
    login: async (parent, {email, password}) => {
      const user = await User.findOne({email});
        if (!user) {
    throw new AuthenticationError('This info is wrong');
  }

  const correctPw = await user.isCorrectPassword(password);

  if (!correctPw) {
    throw new AuthenticationError('This info is wrong');
  }

  const token = signToken(user);
  return { token, user };
 
    },
    
    addUser: async (parent, args) => {
      // instead of args? - {username, email, password}
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    saveBook: async (parent, { bookData }, context) => {
      //         saveBook: async (parent, args, context) => {
      if (context.user) {
          const user = await User.findByIdAndUpdate(
            // return User.findOneAndUpdate(

              { _id: context.user._id },
              { $push: { savedBooks: bookData } },
              //               {$push: { savedBooks: args}},
              // { new: true, runValidators: true }
                { new: true}
              //   .then (result => {
              //     return{...result}
              // })
              // .catch (err => {
              //     console.error(err)
              // })

          );

          return user;
      }

      throw new AuthenticationError('There was a request error...');
  },
    
  
        removeBook: async (parent, {bookId}, context) => {
          if (context.user) {
          return User.findOneAndUpdate(
              { _id: context.user._id},
              {$pull: { savedBooks: {bookId: bookId} }},
              { new: true})
              .then (result => {
                  return{...result}
              })
              .catch (err => {
                  console.error(err)
              })
      }
      throw new AuthenticationError('Please login to delete a book!');

  } 
}
// }
};

module.exports = resolvers;
