'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, ArrowRight, BookOpen } from 'lucide-react';

export function CodeShowcase() {
  const t = useTranslations('code');
  const [activeTab, setActiveTab] = useState<'react' | 'java'>('react');

  return (
    <section id="code" className="py-24 relative">
      <div className="absolute inset-0 grid-tech opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tech-badge tech-badge-purple mb-4">
            Developer Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Code Window */}
        <div className="max-w-4xl mx-auto">
          <div className="code-window glow-tech-purple">
            {/* Tabs */}
            <div className="flex items-center gap-1 px-4 pt-4 border-b border-border-subtle">
              <button
                onClick={() => setActiveTab('react')}
                className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-medium font-mono transition-colors ${
                  activeTab === 'react'
                    ? 'bg-tech-blue/10 text-tech-blue'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Code2 className="w-4 h-4" />
                {t('reactTab')}
              </button>
              <button
                onClick={() => setActiveTab('java')}
                className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-medium font-mono transition-colors ${
                  activeTab === 'java'
                    ? 'bg-tech-orange/10 text-tech-orange'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Cpu className="w-4 h-4" />
                {t('javaTab')}
              </button>
            </div>

            {/* Code Content */}
            <div className="relative">
              {/* Window controls */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle bg-secondary/30">
                <div className="code-window-dot red" />
                <div className="code-window-dot yellow" />
                <div className="code-window-dot green" />
                <span className="ml-4 text-xs text-muted-foreground font-mono">
                  {activeTab === 'react' ? 'UsersList.tsx' : 'UserService.java'}
                </span>
              </div>

              {/* React Code */}
              <div className={`p-6 font-mono text-sm overflow-x-auto ${activeTab !== 'react' ? 'hidden' : ''}`}>
                <pre className="text-muted-foreground code-font">
                  <code>
                    <span className="text-tech-purple">{'import'}{' '}</span>
                    <span className="text-foreground">{'{ ArchbaseDataGrid, useArchbaseDataSource }'}</span>
                    <span className="text-tech-purple">{' from '}</span>
                    <span className="text-tech-green">{"'@archbase/data'"}</span>
                    <span className="text-foreground">{";\n\n"}</span>
                    <span className="text-tech-purple">{'export '}</span>
                    <span className="text-tech-purple">{'function '}</span>
                    <span className="text-tech-yellow">{'UsersList'}</span>
                    <span className="text-foreground">{"() {\n  "}</span>
                    <span className="text-tech-purple">{'const '}</span>
                    <span className="text-foreground">{'dataSource = '}</span>
                    <span className="text-tech-yellow">{'useArchbaseDataSource'}</span>
                    <span className="text-foreground">{"({\n    "}</span>
                    <span className="text-foreground">{'queryKey: '}</span>
                    <span className="text-tech-green">{"['users']"}</span>
                    <span className="text-foreground">{"*,\n    "}</span>
                    <span className="text-foreground">{'queryFn: () => api.get'}</span>
                    <span className="text-tech-purple">{"('/users')"}</span>
                    <span className="text-foreground">{"*,\n  "}</span>
                    <span className="text-foreground">{"});\n\n  "}</span>
                    <span className="text-tech-purple">{'return '}</span>
                    <span className="text-foreground">{"(\n    "}</span>
                    <span className="text-tech-red-400">{"<ArchbaseDataGrid\n"}</span>
                    <span className="text-foreground">{"      dataSource="}</span>
                    <span className="text-tech-blue">{"{dataSource}\n"}</span>
                    <span className="text-foreground">{"      columns="}</span>
                    <span className="text-tech-blue">{"{[\n"}</span>
                    <span className="text-foreground">{"        "}</span>
                    <span className="text-tech-blue">{"{ field: 'name', headerName: 'Name' },\n"}</span>
                    <span className="text-foreground">{"        "}</span>
                    <span className="text-tech-blue">{"{ field: 'email', headerName: 'E-mail' },\n"}</span>
                    <span className="text-foreground">{"      "}</span>
                    <span className="text-tech-blue">{"]}\n"}</span>
                    <span className="text-tech-red-400">{"    />\n"}</span>
                    <span className="text-foreground">{"  );\n}"}</span>
                  </code>
                </pre>
              </div>

              {/* Java Code */}
              <div className={`p-6 font-mono text-sm overflow-x-auto ${activeTab !== 'java' ? 'hidden' : ''}`}>
                <pre className="text-muted-foreground code-font">
                  <code>
                    <span className="text-tech-purple">{ '@Service' }</span>
                    <span className="text-foreground">{ '\n' }</span>
                    <span className="text-tech-purple">{ 'public class ' }</span>
                    <span className="text-tech-yellow">{ 'UserService' }</span>
                    <span className="text-foreground">{ ' {\n\n' }</span>
                    <span className="text-foreground">{ '    ' }</span>
                    <span className="text-tech-purple">{ 'private final ' }</span>
                    <span className="text-tech-yellow">{ 'UserRepository' }</span>
                    <span className="text-foreground">{ ' userRepository;\n\n' }</span>
                    <span className="text-foreground">{ '    ' }</span>
                    <span className="text-tech-purple">{ 'public ' }</span>
                    <span className="text-tech-yellow">{ 'User' }</span>
                    <span className="text-foreground">{ ' ' }</span>
                    <span className="text-tech-blue">{ 'create' }</span>
                    <span className="text-foreground">{ '(' }</span>
                    <span className="text-tech-yellow">{ 'CreateUserCommand' }</span>
                    <span className="text-foreground">{ ' command) {\n' }</span>
                    <span className="text-foreground">{ '        ' }</span>
                    <span className="text-tech-yellow">{ 'User' }</span>
                    <span className="text-foreground">{ ' user = ' }</span>
                    <span className="text-tech-yellow">{ 'User' }</span>
                    <span className="text-foreground">{ '.create(\n' }</span>
                    <span className="text-foreground">{ '            command.name(),\n' }</span>
                    <span className="text-foreground">{ '            command.email()\n' }</span>
                    <span className="text-foreground">{ '        );\n' }</span>
                    <span className="text-foreground">{ '        ' }</span>
                    <span className="text-tech-purple">{ 'return '}</span>
                    <span className="text-foreground">{ 'userRepository.save(user);\n' }</span>
                    <span className="text-foreground">{ '    }\n\n' }</span>
                    <span className="text-foreground">{ '    ' }</span>
                    <span className="text-tech-purple">{ '@HasPermission' }</span>
                    <span className="text-foreground">{ "('user.read')\n" }</span>
                    <span className="text-foreground">{ '    ' }</span>
                    <span className="text-tech-purple">{ 'public ' }</span>
                    <span className="text-tech-yellow">{ 'Page' }</span>
                    <span className="text-tech-blue">{ '<UserDto>' }</span>
                    <span className="text-foreground">{ ' ' }</span>
                    <span className="text-tech-blue">{ 'findAll' }</span>
                    <span className="text-foreground">{ '(' }</span>
                    <span className="text-tech-yellow">{ 'Pageable' }</span>
                    <span className="text-foreground">{ ' pageable) {\n' }</span>
                    <span className="text-foreground">{ '        ' }</span>
                    <span className="text-tech-purple">{ 'return ' }</span>
                    <span className="text-foreground">{ 'userRepository\n' }</span>
                    <span className="text-foreground">{ '            .findAll(pageable)\n' }</span>
                    <span className="text-foreground">{ '            .map(UserMapper::toDto);\n' }</span>
                    <span className="text-foreground">{ '    }\n' }</span>
                    <span className="text-foreground">{ '}' }</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="https://java.archbase.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-button terminal-button-primary"
            >
              <BookOpen className="w-4 h-4" />
              View Documentation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/edsonmartins/archbase-app-framework"
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-button"
            >
              Backend Code
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
