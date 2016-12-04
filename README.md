# tech-relationship-visualized-doc-concept
A Proposal to an way to document Networks of Services/Tech stacks

## Demo
https://ryuheechul.github.io/tech-rel-visualized-doc-concept/

## Why propose this way?
> See -> [Demo](https://ryuheechul.github.io/tech-rel-visualized-doc-concept/)

- Visualized 
> much quicker and easier to understand the structure of the network

- Version Controlled
> make collaborating/maintaining documents easy

- Easy to manage the source via github 
- Easy to share(run/serve) the content via auth s3/wherever

## Dependencies
- http://js.cytoscape.org

## Where to Document?
- [legacy.js](https://github.com/ryuheechul/tech-rel-visualized-doc-concept/blob/gh-pages/legacy.js)
- [to-be.js](https://github.com/ryuheechul/tech-rel-visualized-doc-concept/blob/gh-pages/to-be.js)

## How to run/serve?
> This is a static website.

- Use any http server to run.
- You can use gh pages if it's ok to be public.
- Or use other http servers with authentication, if the infomation is private.

## This project is very young and still under Experimenting
- The file and folder structure of this project are not decided yet.
- Documenting code are hard corded so far.
- Not considered for multiple pages document yet

## To do
- Devide src(documenting) and dist.
- Avoid boilerplating to generate each page. (like index.js, generate.js style.css and so on)
- Hide implement detail into a library and only manage document files. (like legacy.js and to-be.js)
- Easy way to add/link-to multiple pages.
- Generalize this tool so that any document about network relationship can be generated via this tool.

## Contributions
Any contributions are welcome.
