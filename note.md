- **React server component** --
  a new full stack architecture for react apps.
  server is first class citizen
- introduce the server as an integral part of react component trees. server components
- _server_component is only rendered on the server_
- no state
- re render on url change
  **Client component**

- regular component that has state
- components that sent to browser and responsible for interactive
- we use 'use client ' to declare the componentn as a client
- server lient boundery -[is when a client component is under a server side ]
- only import client component
- on state change

**alias-importing**
using '@/app/\_components/' instead of '/../../../'

**REACT SUSPENCE**
-- is built in react com[onent]

- used to catch components which are not ready to be rendered
- wrap the data fetching component into its own component ,
