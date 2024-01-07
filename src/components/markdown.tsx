import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { Clipboard, Check } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import "../components/default.css"
import { toast } from "sonner"
interface MarkdownProps {
  content: string;
}
const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    toast("复制成功", {
      description: "如果需要引用，请说明来源",
    })
    setTimeout(() => {
      setCopied(false);
    }, 1000);

  };

  return (
    <div className='blog'>
      <ReactMarkdown

        remarkPlugins={[remarkGfm]}
        components={{
          // @ts-ignore
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <div className='relative'>
                <SyntaxHighlighter
                  // @ts-ignore
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                  showLineNumbers
                  lineNumberContainerStyle={{ paddingRight: '10px' }}
                  lineNumberStyle={{ color: '#999' }}
                  {...props}
                >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                <CopyToClipboard text={String(children)} onCopy={handleCopy}>
                  <button
                    className='absolute top-2 right-2 bg-gray-400 bg-opacity-50 text-white rounded-md w-8 h-8 flex justify-center items-center cursor-pointer'
                  >
                    {copied ? <Check size={20} /> : <Clipboard size={20} />}
                  </button>
                </CopyToClipboard>
              </div>
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      >{content}</ReactMarkdown>
    </div>
  );
};

export default Markdown;