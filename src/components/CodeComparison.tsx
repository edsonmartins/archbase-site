'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { X, Check } from 'lucide-react';
import { motion } from 'framer-motion';

// Code snippets for comparison
const withoutArchbaseCode = `// Without Archbase - ~50 lines of boilerplate
import { useState, useEffect } from 'react';

function UsersList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sort, setSort] = useState({ field: 'name', order: 'asc' });
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams({
          page: page.toString(),
          size: pageSize.toString(),
          sort: \`\${sort.field},\${sort.order}\`,
          ...filters
        });
        const response = await fetch(\`/api/users?\${params}\`);
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();
        setData(result.content);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, pageSize, sort, filters]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Add table implementation */}
      {/* Add pagination controls */}
      {/* Add sorting UI */}
      {/* Add filter inputs */}
      {/* Total: 50+ lines */}
    </div>
  );
}`;

const withArchbaseCode = `// With Archbase - ~15 lines
import { ArchbaseDataGrid, useArchbaseDataSource }
  from '@archbase/data-grid';

function UsersList() {
  const dataSource = useArchbaseDataSource({
    queryKey: ['users'],
    queryFn: () => api.get('/users'),
    pageSize: 10,
  });

  return (
    <ArchbaseDataGrid
      dataSource={dataSource}
      columns={[
        { field: 'name', headerName: 'Name', sortable: true },
        { field: 'email', headerName: 'Email', filterable: true },
        { field: 'role', headerName: 'Role' },
      ]}
    />
  );
}`;

export function CodeComparison() {
  const t = useTranslations('comparison');
  const [copied, setCopied] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-tech opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tech-badge tech-badge-orange mb-4">
            {t('badge')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Comparison Container */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Without Archbase */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="font-semibold text-red-400">
                    {t('without')}
                  </span>
                </div>
                <span className="tech-badge tech-badge-orange">
                  ~50 lines
                </span>
              </div>

              {/* Code Window */}
              <div className="code-window">
                <div className="code-window-header">
                  <div className="code-window-dots">
                    <div className="code-window-dot red" />
                    <div className="code-window-dot yellow" />
                    <div className="code-window-dot green" />
                  </div>
                  <span className="code-window-title">UsersList.tsx</span>
                </div>
                <pre className="p-4 text-xs md:text-sm overflow-x-auto code-font text-muted-foreground">
                  <code>{withoutArchbaseCode}</code>
                </pre>
              </div>

              {/* Problems list */}
              <div className="mt-4 space-y-2">
                {[
                  t('problems.boilerplate'),
                  t('problems.state'),
                  t('problems.error'),
                  t('problems.ui'),
                ].map((problem, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>{problem}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* With Archbase */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="font-semibold text-green-400">
                    {t('with')}
                  </span>
                </div>
                <span className="tech-badge tech-badge-green">
                  ~15 lines
                </span>
              </div>

              {/* Code Window */}
              <div className="code-window border-tech-green/30 glow-tech-green">
                <div className="code-window-header">
                  <div className="code-window-dots">
                    <div className="code-window-dot red" />
                    <div className="code-window-dot yellow" />
                    <div className="code-window-dot green" />
                  </div>
                  <span className="code-window-title">UsersList.tsx</span>
                </div>
                <pre className="p-4 text-xs md:text-sm overflow-x-auto code-font text-muted-foreground">
                  <code>{withArchbaseCode}</code>
                </pre>
              </div>

              {/* Benefits list */}
              <div className="mt-4 space-y-2">
                {[
                  t('benefits.less'),
                  t('benefits.features'),
                  t('benefits.types'),
                  t('benefits.tested'),
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 grid md:grid-cols-3 gap-4"
          >
            <div className="text-center p-4 border border-border-subtle rounded-lg bg-card/30">
              <div className="text-3xl font-bold text-tech-green font-mono mb-1">
                -70%
              </div>
              <p className="text-sm text-muted-foreground">{t('stats.lines')}</p>
            </div>
            <div className="text-center p-4 border border-border-subtle rounded-lg bg-card/30">
              <div className="text-3xl font-bold text-tech-blue font-mono mb-1">
                100%
              </div>
              <p className="text-sm text-muted-foreground">{t('stats.types')}</p>
            </div>
            <div className="text-center p-4 border border-border-subtle rounded-lg bg-card/30">
              <div className="text-3xl font-bold text-tech-purple font-mono mb-1">
                ∞
              </div>
              <p className="text-sm text-muted-foreground">{t('stats.scalability')}</p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://java.archbase.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-button terminal-button-primary"
          >
            {t('cta')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
