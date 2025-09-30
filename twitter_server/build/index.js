import { createGraphQLServer } from './app/index.js';
async function startApp() {
    const app = await createGraphQLServer();
    app.listen(4000, () => {
        console.log('🚀 Server running at http://localhost:4000/graphql');
    });
}
startApp();
//# sourceMappingURL=index.js.map