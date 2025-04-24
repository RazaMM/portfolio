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
      className={twJoin('font-math [&_*]:font-math', !inline && 'w-full p-4')}
      dangerouslySetInnerHTML={{ __html: processed }}
    ></Tag>
  );
}
