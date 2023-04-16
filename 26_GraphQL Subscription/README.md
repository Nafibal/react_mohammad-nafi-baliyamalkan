# Resume Materi KMReact – GraphQL Subscription

---

### Pengertian

Subscription adalah sebuah fitur pada GraphQL yang berfungsi untuk mengirimkan data kemabli pada client saat terjadi sebuah perubahan pada data. Hal ini berguna agar data yang kita punya pada aplikasi kita selalu _up to date_. Fitur ini memanfaatkan WebSockets. Saat terjadi perubahan data pada server, maka client akan mendapatkan data terbaru secara _real-time_.

### Konfigurasi

1. Install graphql-ws
   `npm install graphql-ws`
2. Inisialisasi GrapghQLEsLink

```javascript
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:4000/subscriptions",
  })
);
```

ganti nilai dari url dengan alamat server GraphQL kita.

3. Pisah Link

```javascript
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:4000/subscriptions",
  })
);

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);
```

4. Sambungkan link pada Apollo Client

```javascript
import { ApolloClient, InMemoryCache } from "@apollo/client";

// ...code from the above example goes here...

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
```

5. Beri Autentikasi pada WebSocket (Opsional)

```javascript
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:4000/subscriptions",
    connectionParams: {
      authToken: user.authToken,
    },
  })
);
```

### Pemakaian

Kita dapat menggunakan fitur subscription menggunakan hooks useSubscription.

```javascript
const COMMENTS_SUBSCRIPTION = gql`
  subscription OnCommentAdded($postID: ID!) {
    commentAdded(postID: $postID) {
      id
      content
    }
  }
`;

function LatestComment({ postID }) {
  const { data, loading } = useSubscription(COMMENTS_SUBSCRIPTION, {
    variables: { postID },
  });
  return <h4>New comment: {!loading && data.commentAdded.content}</h4>;
}
```
