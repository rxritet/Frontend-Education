export type RootStackParamList = {
  HomeMain: undefined;
  Profile: { userId?: string } | undefined;
  Settings: undefined;
  SearchMain: undefined;
  NotificationsMain: undefined;
};

export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Notifications: undefined;
  Profile: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
