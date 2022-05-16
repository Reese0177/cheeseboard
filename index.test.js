const { sequelize } = require('./db');
const { User, Board, Cheese } = require('./index')

describe('User, Board, and Cheese Models', () => {
    /**
     * Runs the code prior to all tests
     */

    let user1;
    let board1;
    let board2;
    let cheese1;
    let cheese3;

    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
        user1 = await User.create({ name: "Reese", email: "reese@email.com" });
        board1 = await Board.create({ type: "Favorites", description: "Reese's Favorite Cheese", rating: 5 });
        board2 = await Board.create({type: "Variety", description: "A variety of cheeses", rating: 4});
        cheese1 = await Cheese.create({ title: "Pepper Jack", description: "A spicy cheese" });
        cheese3 = await Cheese.create({ title: "Provolone", description: "A semi-hard cheese" });
    })

    test('can create a User - name', async () => {
        expect(user1.name).toBe('Reese');
    })

    test('can create a User - email', async () => {
        expect(user1.email).toBe('reese@email.com');
    })

    test('can create a Board - type', async () => {
        expect(board1.type).toBe('Favorites');
    })

    test('can create a Board - description', async () => {
        expect(board1.description).toBe("Reese's Favorite Cheese");
    })

    test('can create a Board - rating', async () => {
        expect(board1.rating).toBe(5);
    })

    test('can create a Cheese - title', async () => {
        expect(cheese1.title).toBe("Pepper Jack");
    })

    test('can create a Cheese - description', async () => {
        expect(cheese1.description).toBe("A spicy cheese");
    })

    test('can add board to user', async () => {
        await user1.addBoard(board1);
        const boards = await user1.getBoards();
        expect(boards.length).toBe(1);
    })

    test('can add more boards to user', async () => {
        await user1.addBoard(board2);
        const boards = await user1.getBoards();
        expect(boards.length).toBe(2);
    })

    test('can add cheese to board', async () => {
        await board1.addCheese(cheese1);
        const cheeses = await board1.getCheeses();
        expect(cheeses.length).toBe(1);
    })

    test('can add more cheeses to board', async () => {
        await board1.addCheese(cheese3);
        const cheeses = await board1.getCheeses();
        expect(cheeses.length).toBe(2);
    })

    test('can add cheese to more board', async () => {
        await board2.addCheese(cheese3);
        const boards = await cheese3.getBoards();
        expect(boards.length).toBe(2);
    })

})