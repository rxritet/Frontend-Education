import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface AdaptiveLayoutProps {
  content: React.ReactNode;
  footer?: React.ReactNode;
}

interface StatItem {
  label: string;
  value: string;
}

interface StatsRowProps {
  stats: ReadonlyArray<StatItem>;
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

const featurePalette = {
  primary: {
    backgroundColor: '#16324f',
    accentColor: '#7dd3fc',
  },
  secondary: {
    backgroundColor: '#1f2937',
    accentColor: '#f9a8d4',
  },
  accent: {
    backgroundColor: '#12372a',
    accentColor: '#86efac',
  },
} as const;

export function AdaptiveLayout({ content, footer }: Readonly<AdaptiveLayoutProps>) {
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingBottom: Math.max(insets.bottom + 24, 24),
            paddingHorizontal: isTablet ? 24 : 16,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>Responsive Layout Lab</Text>
          <Text style={[styles.heroTitle, isTablet && styles.heroTitleTablet]}>
            Adaptive content for phones and tablets
          </Text>
          <Text style={styles.heroSubtitle}>
            This screen rearranges itself based on the available width, keeping
            spacing, hierarchy, and readability consistent.
          </Text>

          <View style={styles.metaRow}>
            <View style={styles.metaCard}>
              <Text style={styles.metaLabel}>Viewport width</Text>
              <Text style={styles.metaValue}>{Math.round(width)} px</Text>
            </View>
            <View style={styles.metaCard}>
              <Text style={styles.metaLabel}>Viewport height</Text>
              <Text style={styles.metaValue}>{Math.round(height)} px</Text>
            </View>
          </View>
        </View>

        <View style={[styles.contentShell, isTablet && styles.contentShellTablet]}>
          {content}
        </View>

        {footer ? <View style={styles.footer}>{footer}</View> : null}
      </ScrollView>
    </View>
  );
}

export function StatsRow({ stats }: Readonly<StatsRowProps>) {
  const { width } = useWindowDimensions();
  const columns = width >= 768 ? 4 : 2;
  const cardWidth = Math.max(0, width / columns - 24);

  return (
    <View style={styles.statsRow}>
      {stats.map((stat) => (
        <View key={stat.label} style={[styles.statCard, { width: cardWidth }]}>
          <Text style={styles.statValue}>{stat.value}</Text>
          <Text style={styles.statLabel}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
  variant = 'primary',
}: Readonly<FeatureCardProps>) {
  const palette = featurePalette[variant];

  return (
    <View style={[styles.featureCard, { backgroundColor: palette.backgroundColor }]}>
      <View style={[styles.iconBadge, { backgroundColor: palette.accentColor }]}>
        <Text style={styles.featureIcon}>{icon}</Text>
      </View>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 20,
  },
  hero: {
    backgroundColor: '#111827',
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  eyebrow: {
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    color: '#94a3b8',
    fontSize: 12,
    marginBottom: 10,
  },
  heroTitle: {
    color: '#f8fafc',
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 34,
  },
  heroTitleTablet: {
    fontSize: 34,
    lineHeight: 40,
  },
  heroSubtitle: {
    color: '#cbd5e1',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 12,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 18,
  },
  metaCard: {
    flexGrow: 1,
    flexBasis: 160,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 16,
    padding: 14,
  },
  metaLabel: {
    color: '#94a3b8',
    fontSize: 12,
    marginBottom: 6,
  },
  metaValue: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '700',
  },
  contentShell: {
    gap: 12,
  },
  contentShellTablet: {
    alignSelf: 'stretch',
  },
  footer: {
    marginTop: 20,
    marginBottom: Platform.OS === 'ios' ? 8 : 0,
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
    marginBottom: 4,
  },
  statCard: {
    paddingHorizontal: 6,
    marginBottom: 12,
  },
  statValue: {
    color: '#f8fafc',
    fontSize: 24,
    fontWeight: '800',
  },
  statLabel: {
    color: '#cbd5e1',
    fontSize: 12,
    marginTop: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  featureCard: {
    borderRadius: 20,
    padding: 18,
  },
  iconBadge: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  featureIcon: {
    color: '#0f172a',
    fontSize: 20,
    fontWeight: '800',
  },
  featureTitle: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  featureDescription: {
    color: '#dbeafe',
    fontSize: 14,
    lineHeight: 20,
  },
});
