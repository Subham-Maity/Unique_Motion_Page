 ####  We Use Next.js BETA version [Date:2022-11-27]
https://beta.nextjs.org/docs/getting-started

##### Experimental Features [!Important Dev Notes:]
1. 'use client'; ->  https://beta.nextjs.org/docs/rendering/server-and-client-components#server-components
- We don't need to use 'getServerSideProps' anymore. 
- We can use 'useClient' to fetch data from server.
- useState and useEffect are not available in 'useClient' function.

