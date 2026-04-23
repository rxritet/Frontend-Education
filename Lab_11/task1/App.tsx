import React from 'react';
import { ScrollView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileCard } from './src/components/ProfileCard';
import { ContactSection } from './src/components/ContactSection';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f0f0" />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <ProfileCard
          name="Радмир Абраев"
          role="Frontend Developer"
          bio="2nd year CS student from Almaty. Go, TypeScript, React Native. Building a portfolio."
          avatar="https://i.pravatar.cc/200?img=12"
        />
        <ContactSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 32,
  },
});