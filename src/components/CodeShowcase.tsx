'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Code2, Cpu } from 'lucide-react';

export function CodeShowcase() {
  const t = useTranslations('code');
  const [activeTab, setActiveTab] = useState<'react' | 'java'>('react');

  return (
    <section id="code" className="py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-sm mb-6">
            Developer Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Code Window */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl border border-border bg-card/80 backdrop-blur overflow-hidden glow">
            {/* Tabs */}
            <div className="flex items-center gap-1 px-4 pt-4 border-b border-border">
              <button
                onClick={() => setActiveTab('react')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'react'
                    ? 'bg-brand-500/10 text-brand-400'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Code2 className="w-4 h-4" />
                {t('reactTab')}
              </button>
              <button
                onClick={() => setActiveTab('java')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'java'
                    ? 'bg-orange-500/10 text-orange-400'
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
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-xs text-muted-foreground font-mono">
                  {activeTab === 'react' ? 'UsersList.tsx' : 'UserService.java'}
                </span>
              </div>

              {/* React Code */}
              <div className={`p-6 font-mono text-sm overflow-x-auto ${activeTab !== 'react' ? 'hidden' : ''}`}>
                <pre className="text-muted-foreground">
                  <code>
                    <span className="text-purple-400">{'import'}{' '}</span>
                    <span className="text-foreground">{'{ ArchbaseDataGrid, useArchbaseDataSource }'}</span>
                    <span className="text-purple-400">{' from '}</span>
                    <span className="text-green-400">{"'@archbase/data'"}</span>
                    <span className="text-foreground">{";\n\n"}</span>
                    <span className="text-purple-400">{'export '}</span>
                    <span className="text-purple-400">{'function '}</span>
                    <span className="text-yellow-400">{'UsersList'}</span>
                    <span className="text-foreground">{"() {\n  "}</span>
                    <span className="text-purple-400">{'const '}</span>
                    <span className="text-foreground">{'dataSource = '}</span>
                    <span className="text-yellow-400">{'useArchbaseDataSource'}</span>
                    <span className="text-foreground">{"({\n    "}</span>
                    <span className="text-foreground">{'queryKey: '}</span>
                    <span className="text-green-400">{"['users']"}</span>
                    <span className="text-foreground">{"*,\n    "}</span>
                    <span className="text-foreground">{'queryFn: () => api.get'}</span>
                    <span className="text-purple-400">{"('/users')"}</span>
                    <span className="text-foreground">{"*,\n  "}</span>
                    <span className="text-foreground">{"});\n\n  "}</span>
                    <span className="text-purple-400">{'return '}</span>
                    <span className="text-foreground">{"(\n    "}</span>
                    <span className="text-red-400">{"<ArchbaseDataGrid\n"}</span>
                    <span className="text-foreground">{"      dataSource="}</span>
                    <span className="text-blue-400">{"{dataSource}\n"}</span>
                    <span className="text-foreground">{"      columns="}</span>
                    <span className="text-blue-400">{"{[\n"}</span>
                    <span className="text-foreground">{"        "}</span>
                    <span className="text-blue-400">{"{ field: 'name', headerName: 'Nome' },\n"}</span>
                    <span className="text-foreground">{"        "}</span>
                    <span className="text-blue-400">{"{ field: 'email', headerName: 'E-mail' },\n"}</span>
                    <span className="text-foreground">{"      "}</span>
                    <span className="text-blue-400">{"]}\n"}</span>
                    <span className="text-red-400">{"    />\n"}</span>
                    <span className="text-foreground">{"  );\n}"}</span>
                  </code>
                </pre>
              </div>

              {/* Java Code */}
              <div className={`p-6 font-mono text-sm overflow-x-auto ${activeTab !== 'java' ? 'hidden' : ''}`}>
                <pre className="text-muted-foreground">
                  <code>
                    <span className="text-purple-400">{ '@Service' }</span>
                    <span className="text-foreground">{ '\n' }</span>
                    <span className="text-purple-400">{ 'public class ' }</span>
                    <span className="text-yellow-400">{ 'UserService' }</span>
                    <span className="text-foreground">{ ' {\n\n' }</span>
                    <span className="text-foreground">{ '    ' }</span>
                    <span className="text-purple-400">{ 'private final ' }</span>
                    <span className="text-yellow-400">{ 'UserRepository' }</span>
                    <span className="text-foreground">{ ' userRepository;\n\n' }</span>
                    <span className="text-foreground">{ '    ' }</span>
                    <span className="text-purple-400">{ 'public ' }</span>
                    <span className="text-yellow-400">{ 'User' }</span>
                    <span className="text-foreground">{ ' ' }</span>
                    <span className="text-blue-400">{ 'create' }</span>
                    <span className="text-foreground">{ '(' }</span>
                    <span className="text-yellow-400">{ 'CreateUserCommand' }</span>
                    <span className="text-foreground">{ ' command) {\n' }</span>
                    <span className="text-foreground">{ '        ' }</span>
                    <span className="text-yellow-400">{ 'User' }</span>
                    <span className="text-foreground">{ ' user = ' }</span>
                    <span className="text-yellow-400">{ 'User' }</span>
                    <span className="text-foreground">{ '.create(\n' }</span>
                    <span className="text-foreground">{ '            command.name(),\n' }</span>
                    <span className="text-foreground">{ '            command.email()\n' }</span>
                    <span className="text-foreground">{ '        );\n' }</span>
                    <span className="text-foreground">{ '        ' }</span>
                    <span className="text-purple-400">{ 'return ' }</span>
                    <span className="text-foreground">{ 'userRepository.save(user);\n' }</span>
                    <span className="text-foreground">{ '    }\n\n' }</span>
                    <span className="text-foreground">{ '    ' }</span>
                    <span className="text-purple-400">{ '@HasPermission' }</span>
                    <span className="text-foreground">{ "('user.read')\n" }</span>
                    <span className="text-foreground">{ '    ' }</span>
                    <span className="text-purple-400">{ 'public ' }</span>
                    <span className="text-yellow-400">{ 'Page' }</span>
                    <span className="text-blue-400">{ '<UserDto>' }</span>
                    <span className="text-foreground">{ ' ' }</span>
                    <span className="text-blue-400">{ 'findAll' }</span>
                    <span className="text-foreground">{ '(' }</span>
                    <span className="text-yellow-400">{ 'Pageable' }</span>
                    <span className="text-foreground">{ ' pageable) {\n' }</span>
                    <span className="text-foreground">{ '        ' }</span>
                    <span className="text-purple-400">{ 'return ' }</span>
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
        </div>
      </div>
    </section>
  );
}
