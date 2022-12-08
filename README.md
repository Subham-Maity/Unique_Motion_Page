### The motion page was originally created by CodeXam member Subham. Our beta version is now available for anyone to join and help with the development of the CodeXam Unique Motion Front Page

####  We Use Next.js 13 [BETA version](https://nextjs.org/blog/next-13) [Date:2022-11-27]
https://beta.nextjs.org/docs/getting-started

##### Experimental Features [!Important Dev Notes:]
1. 'use client'; ->  https://beta.nextjs.org/docs/rendering/server-and-client-components#server-components
- We don't need to use 'getServerSideProps' anymore. 
- We can use 'useClient' to fetch data from server.
- useState and useEffect are not available in 'useClient' function.
2. We use framer motion for animation. -> https://www.framer.com/motion/
- Scroll animation - https://www.framer.com/docs/examples/#scroll-triggered-animations
- whileInView prop that defines a visual state to animate to while a component is in the viewport.
  - viewport={{ once: true }} - Here once we reach the component, it will not animate again. 
  - If I set false then it will animate again and again when we scroll up and down the page 
  - also when I set the amount like ``amount:0.25`` then it will animate when the component is 25% in the viewport.
  Example : https://codesandbox.io/embed/framer-motion-5-3-scroll-triggered-animations-2hbg5?fontsize=14&hidenavigation=1&theme=dark
3. Globe with girl figma canvas: https://www.figma.com/file/B18x5Gzry3VTWjBlZd4tGr/Girlwithglobe?node-id=0%3A1&t=KpDo4x1zWvTUM7zM-1

