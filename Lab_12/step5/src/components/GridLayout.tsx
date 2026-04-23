import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  LayoutChangeEvent,
} from 'react-native';

interface GridLayoutProps {
  children: React.ReactNode;
  columns?: number;
  spacing?: number;
}

export function GridLayout({
  children,
  columns = 2,
  spacing = 12,
}: Readonly<GridLayoutProps>) {
  const { width } = useWindowDimensions();
  const [containerWidth, setContainerWidth] = React.useState(width);

  const effectiveWidth = containerWidth > 0 ? containerWidth : width;
  const itemWidth = Math.max(
    0,
    (effectiveWidth - spacing * (columns + 1)) / columns
  );

  const items = React.Children.toArray(children);
  const rows: React.ReactNode[][] = [];

  for (let i = 0; i < items.length; i += columns) {
    rows.push(items.slice(i, i + columns));
  }

  return (
    <View
      style={[styles.container, { padding: spacing }]}
      onLayout={(event: LayoutChangeEvent) => {
        setContainerWidth(event.nativeEvent.layout.width);
      }}
    >
      {rows.map((row, rowIndex) => {
        const rawRowKey = React.isValidElement(row[0]) ? row[0].key : null;
        const hasBottomSpacing = rowIndex < rows.length - 1;

        let rowKey: string;
        if (rawRowKey === null) {
          rowKey = `row-${rowIndex}`;
        } else {
          rowKey = String(rawRowKey);
        }

        return (
          <View
            key={rowKey}
            style={[styles.row, hasBottomSpacing ? { marginBottom: spacing } : null]}
          >
            {row.map((item, colIndex) => {
              const rawItemKey = React.isValidElement(item) ? item.key : null;

              let itemKey: string;
              if (rawItemKey === null) {
                itemKey = `item-${rowIndex}-${colIndex}`;
              } else {
                itemKey = String(rawItemKey);
              }

              return (
                <View
                  key={itemKey}
                  style={[
                    styles.item,
                    {
                      width: itemWidth,
                      marginRight: colIndex < columns - 1 ? spacing : 0,
                    },
                  ]}
                >
                  {item}
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
}

interface CardProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function Card({ title, subtitle, children }: Readonly<CardProps>) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {subtitle ? <Text style={styles.cardSubtitle}>{subtitle}</Text> : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  item: {
    flex: 1,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
});