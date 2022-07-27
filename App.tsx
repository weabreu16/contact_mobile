import 'react-native-gesture-handler';
import AppContainer from './src/components/app_container';
import Navigator from './src';

export default function App() {
  return (
    <AppContainer>
      <Navigator />
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
