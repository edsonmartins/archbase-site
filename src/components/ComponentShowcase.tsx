'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import {
  CheckCircle,
  Code2,
  Database,
  Shield,
  Layout,
  Settings,
  FileCode,
  Search,
  Eye,
  X,
  ChevronRight,
  Edit,
  Calendar,
  Clock,
  Hash,
  Lock,
  AlignLeft,
  ChevronDown,
  List,
  Radio,
  ToggleLeft,
  TreePine,
  Palette,
  Star,
  FileText,
  Braces,
  AtSign,
  Image as ImageIcon,
  Paperclip,
  Timer,
  User,
  Users,
  Globe,
  Layers,
  Container,
  Box,
  Grid3x3,
  Sparkles,
  Kanban,
  Table,
  GitBranch,
  BarChart3,
  Bell,
  Flag,
  Workflow,
  Terminal,
  Cpu,
  Network,
  Bug,
  Trash2,
  FileJson,
  Code,
  File,
  FileImage,
  FileVideo,
  Fingerprint,
  KeyRound,
  Home,
  Sidebar,
  FolderOpen,
  PanelLeft,
  Blocks,
  Building2,
  Zap,
  Compass,
  Heart,
  Sun,
  RefreshCw
} from 'lucide-react';

type CategoryKey = 'forms' | 'data' | 'layout' | 'security' | 'viewers' | 'advanced' | 'admin' | 'tools';

interface ComponentItem {
  name: string;
  desc: string;
  badge?: string;
  isHook?: boolean;
  icon: LucideIcon;
}

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
    { key: 'tools' as CategoryKey, icon: Search, label: t('categories.tools'), count: 10 },
  ];

  const formComponents: ComponentItem[] = [
    { name: 'ArchbaseEdit', desc: t('items.edit.desc'), icon: Edit },
    { name: 'ArchbaseCheckbox', desc: t('items.checkbox.desc'), icon: CheckCircle },
    { name: 'ArchbaseDatePickerEdit', desc: t('items.datePicker.desc'), icon: Calendar },
    { name: 'ArchbaseDateTimePickerEdit', desc: t('items.dateTimePicker.desc'), icon: Clock },
    { name: 'ArchbaseNumberEdit', desc: t('items.numberEdit.desc'), icon: Hash },
    { name: 'ArchbasePasswordEdit', desc: t('items.passwordEdit.desc'), icon: Lock },
    { name: 'ArchbaseTextArea', desc: t('items.textArea.desc'), icon: AlignLeft },
    { name: 'ArchbaseSelect', desc: t('items.select.desc'), icon: ChevronDown },
    { name: 'ArchbaseAsyncSelect', desc: t('items.asyncSelect.desc'), icon: List },
    { name: 'ArchbaseMultiSelect', desc: t('items.multiSelect.desc'), icon: List },
    { name: 'ArchbaseRadioGroup', desc: t('items.radioGroup.desc'), icon: Radio },
    { name: 'ArchbaseSwitch', desc: t('items.switch.desc'), icon: ToggleLeft },
    { name: 'ArchbaseLookupEdit', desc: t('items.lookup.desc'), icon: Search },
    { name: 'ArchbaseTreeSelect', desc: t('items.treeSelect.desc'), icon: TreePine },
    { name: 'ArchbaseColorPicker', desc: t('items.colorPicker.desc'), icon: Palette },
    { name: 'ArchbaseRating', desc: t('items.rating.desc'), icon: Star },
    { name: 'ArchbaseRichTextEdit', desc: t('items.richText.desc'), icon: FileText },
    { name: 'ArchbaseJsonEdit', desc: t('items.jsonEdit.desc'), icon: Braces },
    { name: 'ArchbaseMaskEdit', desc: t('items.maskEdit.desc'), icon: AtSign },
    { name: 'ArchbaseImageEdit', desc: t('items.imageEdit.desc'), icon: ImageIcon },
    { name: 'ArchbaseFileAttachment', desc: t('items.fileAttachment.desc'), icon: Paperclip },
    { name: 'ArchbaseCronExpressionEditor', desc: t('items.cron.desc'), icon: Timer },
    { name: 'ArchbaseOperatingHoursEditor', desc: t('items.operatingHours.desc'), icon: Clock },
    { name: 'ArchbaseTimeRangeSelector', desc: t('items.timeRange.desc'), icon: Timer },
    { name: 'ArchbaseKeyValueEditor', desc: t('items.keyValue.desc'), icon: KeyRound },
    { name: 'ArchbaseAvatarEdit', desc: t('items.avatar.desc'), icon: User },
  ];

  const dataComponents: ComponentItem[] = [
    { name: 'ArchbaseDataSource', desc: t('items.dataSource.desc'), badge: 'v2', icon: Database },
    { name: 'ArchbaseDataSourceV2', desc: t('items.dataSourceV2.desc'), badge: 'TanStack', icon: Zap },
    { name: 'ArchbaseDataGrid', desc: t('items.dataGrid.desc'), badge: 'Popular', icon: Table },
    { name: 'ArchbaseDataGridPagination', desc: t('items.dataGridPagination.desc'), icon: ChevronRight },
    { name: 'ArchbaseListView', desc: t('items.listView.desc'), icon: List },
    { name: 'ArchbaseCompositeFilters', desc: t('items.compositeFilters.desc'), icon: Settings },
    { name: 'ArchbaseQueryFilter', desc: t('items.queryFilter.desc'), icon: Search },
    { name: 'useArchbaseDataSource', desc: t('items.useDataSource.desc'), isHook: true, icon: Database },
    { name: 'useArchbaseRemoteDataSource', desc: t('items.useRemoteDataSource.desc'), isHook: true, icon: Globe },
    { name: 'ArchbaseRemoteApiService', desc: t('items.remoteApi.desc'), icon: Network },
  ];

  const layoutComponents: ComponentItem[] = [
    { name: 'ArchbaseAdminMainLayout', desc: t('items.adminLayout.desc'), icon: Layout },
    { name: 'ArchbaseAdvancedSidebar', desc: t('items.sidebar.desc'), icon: Sidebar },
    { name: 'ArchbaseTabContainer', desc: t('items.tabContainer.desc'), icon: FolderOpen },
    { name: 'ArchbaseCard', desc: t('items.card.desc'), icon: Box },
    { name: 'ArchbaseContainer', desc: t('items.container.desc'), icon: Container },
    { name: 'ArchbaseStack', desc: t('items.stack.desc'), icon: Layers },
    { name: 'ArchbaseGroup', desc: t('items.group.desc'), icon: Blocks },
    { name: 'ArchbaseMasonry', desc: t('items.masonry.desc'), icon: Grid3x3 },
    { name: 'ArchbaseSpaceTemplate', desc: t('items.spaceTemplate.desc'), icon: PanelLeft },
  ];

  const securityComponents: ComponentItem[] = [
    { name: 'ArchbaseSecurityProvider', desc: t('items.securityProvider.desc'), badge: 'Core', icon: Shield },
    { name: 'ArchbaseAuthenticator', desc: t('items.authenticator.desc'), icon: Fingerprint },
    { name: 'ArchbaseTokenManager', desc: t('items.tokenManager.desc'), icon: KeyRound },
    { name: 'ArchbaseUserModal', desc: t('items.userModal.desc'), icon: User },
    { name: 'ArchbaseGroupModal', desc: t('items.groupModal.desc'), icon: Users },
    { name: 'ArchbaseProfileModal', desc: t('items.profileModal.desc'), icon: User },
    { name: 'ArchbaseApiTokenModal', desc: t('items.apiTokenModal.desc'), icon: KeyRound },
    { name: 'ArchbaseProtectedComponent', desc: t('items.protected.desc'), icon: Lock },
    { name: 'useArchbaseSecurity', desc: t('items.useSecurity.desc'), isHook: true, icon: Shield },
    { name: 'useArchbaseGetLoggedUser', desc: t('items.getLoggedUser.desc'), isHook: true, icon: User },
    { name: 'ArchbaseTenantManager', desc: t('items.tenantManager.desc'), badge: 'Multi-tenancy', icon: Building2 },
  ];

  const viewerComponents: ComponentItem[] = [
    { name: 'ArchbaseImageViewer', desc: t('items.imageViewer.desc'), icon: FileImage },
    { name: 'ArchbasePdfViewer', desc: t('items.pdfViewer.desc'), icon: File },
    { name: 'ArchbaseVideoPlayer', desc: t('items.videoPlayer.desc'), icon: FileVideo },
    { name: 'ArchbaseJsonViewer', desc: t('items.jsonViewer.desc'), icon: FileJson },
    { name: 'ArchbaseCodeViewer', desc: t('items.codeViewer.desc'), icon: Code },
    { name: 'ArchbaseTextViewer', desc: t('items.textViewer.desc'), icon: FileText },
    { name: 'ArchbaseXmlViewer', desc: t('items.xmlViewer.desc'), icon: FileCode },
    { name: 'ArchbaseHtmlViewer', desc: t('items.htmlViewer.desc'), icon: Code },
  ];

  const advancedComponents: ComponentItem[] = [
    { name: 'ArchbaseQueryBuilder', desc: t('items.queryBuilder.desc'), badge: 'Advanced', icon: Search },
    { name: 'ArchbaseKanban', desc: t('items.kanban.desc'), icon: Kanban },
    { name: 'ArchbaseSpreadsheet', desc: t('items.spreadsheet.desc'), icon: Table },
    { name: 'ArchbaseTimeline', desc: t('items.timeline.desc'), icon: GitBranch },
    { name: 'ArchbaseCalendar', desc: t('items.calendar.desc'), icon: Calendar },
    { name: 'ArchbaseCharts', desc: t('items.charts.desc'), icon: BarChart3 },
    { name: 'ArchbaseNotification', desc: t('items.notification.desc'), icon: Bell },
    { name: 'ArchbaseOnboarding', desc: t('items.onboarding.desc'), icon: Sparkles },
    { name: 'ArchbaseFeatureFlags', desc: t('items.featureFlags.desc'), icon: Flag },
    { name: 'ArchbaseWorkflow', desc: t('items.workflow.desc'), icon: Workflow },
  ];

  const adminComponents: ComponentItem[] = [
    { name: 'CommandPalette', desc: t('items.commandPalette.desc'), badge: 'New', icon: Search },
    { name: 'ArchbaseNavigationProvider', desc: t('items.navProvider.desc'), icon: Compass },
    { name: 'ArchbaseKeepAliveRoute', desc: t('items.keepAlive.desc'), icon: Heart },
    { name: 'ArchbaseChangeLanguageAction', desc: t('items.changeLang.desc'), icon: Globe },
    { name: 'ArchbaseColorSchemeAction', desc: t('items.colorScheme.desc'), icon: Sun },
    { name: 'ArchbaseMyProfileModal', desc: t('items.myProfile.desc'), icon: User },
    { name: 'ArchbaseFormTemplate', desc: t('items.formTemplate.desc'), icon: FileCode },
    { name: 'ArchbaseGridTemplate', desc: t('items.gridTemplate.desc'), icon: Table },
    { name: 'ArchbaseModalTemplate', desc: t('items.modalTemplate.desc'), icon: PanelLeft },
  ];

  const toolComponents: ComponentItem[] = [
    { name: 'ArchbaseDebugPanel', desc: t('items.debugPanel.desc'), badge: 'Dev', icon: Bug },
    { name: 'ArchbasePerformanceMonitor', desc: t('items.perfMonitor.desc'), icon: Cpu },
    { name: 'ArchbaseStateInspector', desc: t('items.stateInspector.desc'), icon: Search },
    { name: 'ArchbaseNetworkMonitor', desc: t('items.netMonitor.desc'), icon: Network },
    { name: 'ArchbaseMemoryLeakDetector', desc: t('items.memLeak.desc'), icon: Trash2 },
    { name: 'ArchbaseErrorBoundary', desc: t('items.errorBoundary.desc'), icon: Shield },
    { name: 'ArchbaseConsoleLogger', desc: t('items.logger.desc'), icon: Terminal },
    { name: 'useArchbaseValidator', desc: t('items.useValidator.desc'), isHook: true, icon: CheckCircle },
    { name: 'useArchbaseTheme', desc: t('items.useTheme.desc'), isHook: true, icon: Palette },
    { name: 'useArchbaseForceRenderer', desc: t('items.forceRenderer.desc'), isHook: true, icon: RefreshCw },
  ];

  const getComponents = () => {
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
    ...formComponents.map(c => ({ ...c, isHook: false })),
    ...dataComponents.map(c => ({ ...c, isHook: c.name.startsWith('use') })),
    ...layoutComponents.map(c => ({ ...c, isHook: false })),
    ...securityComponents.map(c => ({ ...c, isHook: c.name.startsWith('use') })),
    ...viewerComponents.map(c => ({ ...c, isHook: false })),
    ...advancedComponents.map(c => ({ ...c, isHook: false })),
    ...adminComponents.map(c => ({ ...c, isHook: c.name.startsWith('use') })),
    ...toolComponents.map(c => ({ ...c, isHook: c.name.startsWith('use') })),
  ];

  const filteredComponents = searchQuery
    ? allComponents.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : getComponents();

  return (
    <section id="components" className="py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm mb-6">
            Component Library
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card/50 backdrop-blur focus:outline-none focus:border-brand-500/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <Clock className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Categories */}
        {!searchQuery && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-brand-500/10 border-brand-500/50 text-brand-400'
                      : 'border-border bg-card/30 hover:bg-card/60 hover:border-border/80'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{cat.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    isActive ? 'bg-brand-500/20 text-brand-400' : 'bg-secondary/50 text-muted-foreground'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Components Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredComponents.map((component) => {
            const ComponentIcon = component.icon;
            return (
              <div
                key={component.name}
                className="group p-5 rounded-xl border border-border bg-card/30 backdrop-blur hover:bg-card/60 hover:border-brand-500/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-brand-500/10 group-hover:bg-brand-500/20 transition-colors">
                      <ComponentIcon className="w-4 h-4 text-brand-400" />
                    </div>
                    <div className="flex flex-col">
                      {component.isHook && (
                        <span className="px-2 py-0.5 rounded text-xs bg-orange-500/20 text-orange-400 font-mono w-fit mb-1">
                          hook
                        </span>
                      )}
                      <span className={`text-sm font-mono ${component.isHook ? 'text-orange-400' : 'text-brand-400'}`}>
                        {component.name}
                      </span>
                    </div>
                  </div>
                  {component.badge && (
                    <span className="px-2 py-0.5 rounded text-xs bg-green-500/20 text-green-400 whitespace-nowrap">
                      {component.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {component.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 p-8 rounded-2xl border border-border bg-card/30 backdrop-blur">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text">100+</div>
              <div className="text-sm text-muted-foreground mt-1">{t('stats.components')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">10+</div>
              <div className="text-sm text-muted-foreground mt-1">{t('stats.hooks')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">10</div>
              <div className="text-sm text-muted-foreground mt-1">{t('stats.packages')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-sm text-muted-foreground mt-1">{t('stats.typescript')}</div>
            </div>
          </div>
        </div>

        {/* Powered By Mantine */}
        <div className="mt-8 text-center">
          <a
            href="https://mantine.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-8 py-5 rounded-2xl border-2 border-orange-500/60 bg-gradient-to-br from-orange-500/10 to-orange-600/10 backdrop-blur hover:from-orange-500/20 hover:to-orange-600/20 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
          >
            {/* Mantine Logo */}
            <img
              src="https://avatars.githubusercontent.com/u/79146003?s=48&v=4"
              alt="Mantine UI"
              className="w-12 h-12 rounded-lg group-hover:scale-110 transition-transform duration-300"
            />
            <div className="text-left">
              <span className="text-sm text-muted-foreground block leading-tight">
                {t('poweredBy.mantine')}
              </span>
              <span className="text-lg font-bold text-orange-400 block leading-tight">
                Mantine UI
              </span>
            </div>
            <span className="hidden sm:inline text-xs text-orange-400/80 font-medium px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30">
              123+ components
            </span>
            <ChevronRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
