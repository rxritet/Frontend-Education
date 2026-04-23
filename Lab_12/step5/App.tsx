import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, View, StyleSheet } from 'react-native';
import { GridLayout, Card } from './src/components/GridLayout';
import { ResponsiveHeader } from './src/components/ResponsiveHeader';
import {
  AdaptiveLayout,
  FeatureCard,
  StatsRow,
} from './src/components/AdaptiveLayout';

const stats = [
  { label: 'Projects', value: '12' },
  { label: 'Stars', value: '248' },
  { label: 'Commits', value: '1.4k' },
  { label: 'PRs', value: '89' },
];

function HomeContent() {
  return (
    <>
      <StatsRow stats={stats} />

      <FeatureCard
        icon="!"
        title="Performance"
        description="Responsive layouts that adapt to any screen size and orientation."
        variant="primary"
      />
      <FeatureCard
        icon="A"
        title="Styling"
        description="Consistent design using StyleSheet.create() and Flexbox."
        variant="secondary"
      />
      <FeatureCard
        icon="R"
        title="Cross Platform"
        description="Platform.select() ensures correct behavior on iOS and Android."
        variant="accent"
      />

      <Text style={styles.sectionTitle}>Grid Layout Demo</Text>
      <GridLayout columns={2} spacing={12}>
        <Card title="React Native" subtitle="Mobile framework" />
        <Card title="Expo" subtitle="Toolchain" />
        <Card title="TypeScript" subtitle="Type safety" />
        <Card title="Flexbox" subtitle="Layout system" />
        <Card title="StyleSheet" subtitle="Styles API" />
        <Card title="SafeAreaView" subtitle="Device insets" />
      </GridLayout>
    </>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ResponsiveHeader
        title="Lab 12 - Responsive Layouts"
        rightAction={{ icon: '*', onPress: () => {} }}
      />
      <AdaptiveLayout
        content={<HomeContent />}
        footer={
          <View style={styles.footerContent}>
            <Text style={styles.footerText}>Project 2 - Step 5 - Lab 12</Text>
          </View>
        }
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#cbd5e1',
    marginBottom: 8,
    marginTop: 8,
  },
  footerContent: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#94a3b8',
  },
});
