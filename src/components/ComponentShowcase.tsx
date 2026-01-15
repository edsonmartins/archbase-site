'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  X,
  CheckCircle,
  Code2,
  Code,
  File,
  FileText,
  FileImage,
  FileJson,
  FileVideo,
  Database,
  Shield,
  Layout,
  Settings,
  FileCode,
  Eye,
  Box,
  LucideIcon,
  Terminal,
  Cpu,
  BookOpen,
  ArrowRight,
  Table,
  Network,
  Sidebar,
  FolderOpen,
  Container,
  Layers,
  User,
  Building2,
  Lock,
  Kanban,
  Calendar,
  Workflow,
  GitBranch,
  Compass,
  Heart,
  Sun,
  Bug,
  Palette,
} from 'lucide-react';

type CategoryKey = 'forms' | 'data' | 'layout' | 'security' | 'viewers' | 'advanced' | 'admin' | 'tools';

interface ComponentItem {
  name: string;
  desc: string;
  badge?: string;
  isHook?: boolean;
  icon: LucideIcon;
}

const getIconComponent = (iconName: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    Edit: FileCode,
    CheckCircle,
    Calendar: Settings,
    Clock: Settings,
    Hash: Settings,
    Lock: Shield,
    AlignLeft: Layout,
    ChevronDown: Layout,
    List: Layout,
    Radio: Layout,
    ToggleLeft: Layout,
    Search,
    TreePine: Box,
    Palette: Settings,
    Star: CheckCircle,
    FileText: FileCode,
    Braces: Code2,
    AtSign: Settings,
    ImageIcon: FileCode,
    Paperclip: FileCode,
    Timer: Settings,
    User: Shield,
    Users: Shield,
    Globe: Settings,
    Layers: Layout,
    Container: Layout,
    Box,
    Grid3x3: Layout,
    Sparkles: CheckCircle,
    Kanban: Layout,
    Table: Database,
    GitBranch: Settings,
    BarChart3: Settings,
    Bell: Settings,
    Flag: Shield,
    Workflow: Settings,
    Terminal: Settings,
    Cpu,
    Network: Settings,
    Bug: Settings,
    Trash2: Settings,
    FileJson: Code2,
    Code,
    File,
    FileImage: FileCode,
    FileVideo: FileCode,
    Fingerprint: Shield,
    KeyRound: Shield,
    Home: Layout,
    Sidebar: Layout,
    FolderOpen: Layout,
    PanelLeft: Layout,
    Blocks: Layout,
    Building2: Shield,
    Zap: Settings,
    Compass: Settings,
    Heart: Shield,
    Sun: Settings,
    RefreshCw: Settings,
  };
  return iconMap[iconName] || CheckCircle;
};

export function ComponentShowcase() {
  const t = useTranslations('components');
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('forms');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { key: 'forms' as CategoryKey, icon: FileCode, label: t('categories.forms'), count: 35 },
    { key: 'data' as CategoryKey, icon: Database, label: t('categories.data'), count: 15 },
    { key: 'layout' as CategoryKey, icon: Layout, label: t('categories.layout'), count: 10 },
    { key: 'security' as CategoryKey, icon: Shield, label: t('categories.security'), count: 12 },
    { key: 'viewers' as CategoryKey, icon: Eye, label: t('categories.viewers'), count: 8 },
    { key: 'advanced' as CategoryKey, icon: Settings, label: t('categories.advanced'), count: 15 },
    { key: 'admin' as CategoryKey, icon: Code2, label: t('categories.admin'), count: 8 },
    { key: 'tools' as CategoryKey, icon: Terminal, label: t('categories.tools'), count: 10 },
  ];

  // Simplified component list - just showing key components
  const formComponents: ComponentItem[] = [
    { name: 'ArchbaseEdit', desc: t('items.edit.desc'), icon: FileCode },
    { name: 'ArchbaseDatePickerEdit', desc: t('items.datePicker.desc'), icon: Settings },
    { name: 'ArchbaseSelect', desc: t('items.select.desc'), icon: Layout },
    { name: 'ArchbaseAsyncSelect', desc: t('items.asyncSelect.desc'), icon: Database },
    { name: 'useArchbaseDataSource', desc: t('items.useDataSource.desc'), isHook: true, icon: Database },
    { name: 'ArchbaseDataGrid', desc: t('items.dataGrid.desc'), badge: 'Popular', icon: Table },
  ];

  const dataComponents: ComponentItem[] = [
    { name: 'ArchbaseDataSourceV2', desc: t('items.dataSourceV2.desc'), badge: 'TanStack', icon: Cpu },
    { name: 'ArchbaseDataGrid', desc: t('items.dataGrid.desc'), badge: 'Popular', icon: Table },
    { name: 'ArchbaseListView', desc: t('items.listView.desc'), icon: Layout },
    { name: 'useArchbaseDataSource', desc: t('items.useDataSource.desc'), isHook: true, icon: Database },
    { name: 'ArchbaseQueryFilter', desc: t('items.queryFilter.desc'), icon: Search },
    { name: 'ArchbaseRemoteApiService', desc: t('items.remoteApi.desc'), icon: Network },
  ];

  const layoutComponents: ComponentItem[] = [
    { name: 'ArchbaseAdminMainLayout', desc: t('items.adminLayout.desc'), icon: Layout },
    { name: 'ArchbaseAdvancedSidebar', desc: t('items.sidebar.desc'), icon: Sidebar },
    { name: 'ArchbaseTabContainer', desc: t('items.tabContainer.desc'), icon: FolderOpen },
    { name: 'ArchbaseCard', desc: t('items.card.desc'), icon: Box },
    { name: 'ArchbaseContainer', desc: t('items.container.desc'), icon: Container },
    { name: 'ArchbaseStack', desc: t('items.stack.desc'), icon: Layers },
  ];

  const securityComponents: ComponentItem[] = [
    { name: 'ArchbaseSecurityProvider', desc: t('items.securityProvider.desc'), badge: 'Core', icon: Shield },
    { name: 'useArchbaseSecurity', desc: t('items.useSecurity.desc'), isHook: true, icon: Shield },
    { name: 'ArchbaseTenantManager', desc: t('items.tenantManager.desc'), badge: 'Multi', icon: Building2 },
    { name: 'ArchbaseUserModal', desc: t('items.userModal.desc'), icon: User },
    { name: 'useArchbaseGetLoggedUser', desc: t('items.getLoggedUser.desc'), isHook: true, icon: Shield },
    { name: 'ArchbaseProtectedComponent', desc: t('items.protected.desc'), icon: Lock },
  ];

  const viewerComponents: ComponentItem[] = [
    { name: 'ArchbaseImageViewer', desc: t('items.imageViewer.desc'), icon: FileImage },
    { name: 'ArchbasePdfViewer', desc: t('items.pdfViewer.desc'), icon: File },
    { name: 'ArchbaseJsonViewer', desc: t('items.jsonViewer.desc'), icon: FileJson },
    { name: 'ArchbaseCodeViewer', desc: t('items.codeViewer.desc'), icon: Code },
    { name: 'ArchbaseVideoPlayer', desc: t('items.videoPlayer.desc'), icon: FileVideo },
    { name: 'ArchbaseTextViewer', desc: t('items.textViewer.desc'), icon: FileText },
  ];

  const advancedComponents: ComponentItem[] = [
    { name: 'ArchbaseQueryBuilder', desc: t('items.queryBuilder.desc'), icon: Search },
    { name: 'ArchbaseKanban', desc: t('items.kanban.desc'), icon: Kanban },
    { name: 'ArchbaseSpreadsheet', desc: t('items.spreadsheet.desc'), icon: Table },
    { name: 'ArchbaseTimeline', desc: t('items.timeline.desc'), icon: GitBranch },
    { name: 'ArchbaseCalendar', desc: t('items.calendar.desc'), icon: Calendar },
    { name: 'ArchbaseWorkflow', desc: t('items.workflow.desc'), icon: Workflow },
  ];

  const adminComponents: ComponentItem[] = [
    { name: 'CommandPalette', desc: t('items.commandPalette.desc'), badge: 'New', icon: Search },
    { name: 'ArchbaseNavigationProvider', desc: t('items.navProvider.desc'), icon: Compass },
    { name: 'ArchbaseKeepAliveRoute', desc: t('items.keepAlive.desc'), icon: Heart },
    { name: 'ArchbaseColorSchemeAction', desc: t('items.colorScheme.desc'), icon: Sun },
    { name: 'ArchbaseFormTemplate', desc: t('items.formTemplate.desc'), icon: FileCode },
    { name: 'ArchbaseGridTemplate', desc: t('items.gridTemplate.desc'), icon: Table },
  ];

  const toolComponents: ComponentItem[] = [
    { name: 'ArchbaseDebugPanel', desc: t('items.debugPanel.desc'), badge: 'Dev', icon: Bug },
    { name: 'ArchbasePerformanceMonitor', desc: t('items.perfMonitor.desc'), icon: Cpu },
    { name: 'ArchbaseStateInspector', desc: t('items.stateInspector.desc'), icon: Search },
    { name: 'ArchbaseNetworkMonitor', desc: t('items.netMonitor.desc'), icon: Network },
    { name: 'useArchbaseValidator', desc: t('items.useValidator.desc'), isHook: true, icon: CheckCircle },
    { name: 'useArchbaseTheme', desc: t('items.useTheme.desc'), isHook: true, icon: Palette },
  ];

  const getComponents = (): ComponentItem[] => {
    switch (activeCategory) {
      case 'forms': return formComponents;
      case 'data': return dataComponents;
      case 'layout': return layoutComponents;
      case 'security': return securityComponents;
      case 'viewers': return viewerComponents;
      case 'advanced': return advancedComponents;
      case 'admin': return adminComponents;
      case 'tools': return toolComponents;
      default: return formComponents;
    }
  };

  const allComponents = [
    ...formComponents,
    ...dataComponents,
    ...layoutComponents,
    ...securityComponents,
    ...viewerComponents,
    ...advancedComponents,
    ...adminComponents,
    ...toolComponents,
  ];

  const filteredComponents = searchQuery
    ? allComponents.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : getComponents();

  return (
    <section id="components" className="py-24 relative">
      <div className="absolute inset-0 grid-tech opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tech-badge tech-badge-cyan mb-4">
            Component Library
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 rounded border border-border-subtle bg-card/50 focus:outline-none focus:border-tech-blue/50 transition-colors font-mono text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Categories */}
        {!searchQuery && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded border transition-all duration-300 font-mono text-sm ${
                    isActive
                      ? 'bg-tech-cyan/10 border-tech-cyan/50 text-tech-cyan'
                      : 'border-border-subtle bg-card/30 hover:bg-card/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    isActive ? 'bg-tech-cyan/20' : 'bg-secondary/50'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Components Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredComponents.map((component, index) => {
            const ComponentIcon = component.icon;
            return (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="metric-card p-4 h-full">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded bg-tech-cyan/5 group-hover:bg-tech-cyan/10 transition-colors">
                        <ComponentIcon className="w-4 h-4 text-tech-cyan" />
                      </div>
                      <div className="flex flex-col">
                        {component.isHook && (
                          <span className="px-2 py-0.5 rounded text-xs bg-tech-purple/10 text-tech-purple font-mono w-fit mb-1">
                            hook
                          </span>
                        )}
                        <span className={`text-sm font-mono ${component.isHook ? 'text-tech-purple' : 'text-tech-cyan'}`}>
                          {component.name}
                        </span>
                      </div>
                    </div>
                    {component.badge && (
                      <span className="px-2 py-0.5 rounded text-xs bg-tech-green/10 text-tech-green whitespace-nowrap font-mono">
                        {component.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {component.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-12 p-6 border border-border-subtle rounded bg-card/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold font-mono text-tech-cyan">100+</div>
              <div className="text-xs text-muted-foreground mt-1">{t('stats.components')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-tech-purple">10+</div>
              <div className="text-xs text-muted-foreground mt-1">{t('stats.hooks')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-tech-blue">10</div>
              <div className="text-xs text-muted-foreground mt-1">{t('stats.packages')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-tech-green">100%</div>
              <div className="text-xs text-muted-foreground mt-1">{t('stats.typescript')}</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://java.archbase.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-button terminal-button-primary"
          >
            <BookOpen className="w-4 h-4" />
            Explore Components
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
