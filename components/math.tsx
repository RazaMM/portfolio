import Katex from 'katex';
import { useMemo } from 'react';
import { twJoin } from 'tailwind-merge';

interface MathProps {
  source: string;
  inline?: boolean;
}

export default function Math({ source, inline = false }: MathProps) {
  const Tag = inline ? 'span' : 'div';

  const processed = useMemo(() => {
    return Katex.renderToString(source, {
      throwOnError: false,
      displayMode: !inline,
    });
  }, [inline, source]);

  return (
    <Tag
      className={twJoin('math font-math [&_*]:font-math', !inline && 'w-full')}
      dangerouslySetInnerHTML={{ __html: processed }}
    ></Tag>
  );
}
