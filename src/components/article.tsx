"use client"
import { Separator } from "@radix-ui/react-separator";
import Markdown from "../components/markdown";
const Article = () => {
    //add markdown with js code test
    const markdown = `
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
**bold text**
*italicized text*
> blockquote
1. First item
2. Second item
3. Third item
- First item
- Second item
- Third item
[link](https://www.example.com)
![alt text](image.jpg)
\`\`\`js
// Code block
function sum(a, b) {
  return a + b;
}
\`\`\`
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

**Task List**
- [x] Task 1
- [x] Task 2
- [ ] Task 3

`;
    return (
        <div className="col-span-2 max-[1200px]:col-span-3 bg-white dark:bg-[#242525] rounded-lg p-5">
            <div>
                <h1 className="text-4xl font-bold text-gray-800">Article</h1>
                <Separator className="my-5 h-[1px] bg-gray-100" />
                <Markdown content={markdown} />
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
            </div>
        </div>
    )
}
export default Article; 