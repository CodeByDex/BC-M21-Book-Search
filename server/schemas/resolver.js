const { User, Book } = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },
        user: async (parent, { username }) => {
            return await User.findOne({ username });
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        saveBook: async (parent, {userEmail, authors, description, bookId, image, link, title}) => {
            return User.findOneAndUpdate(
                {email: userEmail},
                {
                    $addToSet: {
                        savedBooks: {
                            authors,
                            description,
                            bookId,
                            image,
                            link,
                            title
                        }
                    }
                },
                {
                    new: true,
                    runValidators: true
                }
            );
        }
    }
};

module.exports = resolvers;