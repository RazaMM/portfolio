import hljs from 'highlight.js/lib/core';

// highlight.js themes
import 'highlight.js/styles/atom-one-dark.css';

// highlight.js languages
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import sql from 'highlight.js/lib/languages/sql';
import yaml from 'highlight.js/lib/languages/yaml';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';

import { useMemo } from 'react';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('xml', xml);

export interface CodeProps {
  source: string;
  language?: 'javascript' | 'typescript' | 'sql' | 'yaml' | 'json' | 'bash' | 'html' | 'xml';
}

export default function Code({ source, language }: CodeProps) {
  const processed = useMemo(() => {
    if (!language) {
      return { value: source };
    }

    return hljs.highlight(source, { language: language });
  }, [source, language]);

  return <code className='tracking-widest text-white' dangerouslySetInnerHTML={{ __html: processed.value }}></code>;
}
